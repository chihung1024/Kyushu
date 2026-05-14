import { copyFile, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rootPdf = path.join(repoRoot, 'kyushu-travel-manual.pdf');
const distPdf = path.join(repoRoot, 'dist', 'kyushu-travel-manual.pdf');

const sourceFiles = [
  'js/utils/html.js',
  'js/data/constants.js',
  'js/data/parking.js',
  'js/data/itinerary.js',
  'js/data/backup.js',
  'js/data/gourmet-backup.js',
  'js/data/day-focus.js',
  'js/data/day-gourmet.js',
  'js/components/print-view.js',
];

async function readRepoText(relativePath) {
  return readFile(path.join(repoRoot, relativePath), 'utf8');
}

async function renderPaperManualHtml() {
  const context = vm.createContext({ encodeURIComponent, String, Array, Object, console });

  for (const file of sourceFiles) {
    const code = await readRepoText(file);
    new vm.Script(code, { filename: file }).runInContext(context);
  }

  const manualHtml = new vm.Script('renderPrintViewHtml()').runInContext(context);
  const printCss = await readRepoText('css/print.css');

  return `<!doctype html>
<html lang="zh-TW">
<head>
<meta charset="utf-8">
<title>九州親子大冒險｜紙本攻略</title>
<style>
html, body { margin: 0; background: #fff; }
body { font-family: 'Noto Sans TC', 'Microsoft JhengHei', 'PingFang TC', Arial, sans-serif; }
${printCss}
</style>
</head>
<body>
<div id="print-container">
${manualHtml}
</div>
</body>
</html>`;
}

async function extractPdfText(pdfPath) {
  try {
    const { stdout } = await execFileAsync('pdftotext', [pdfPath, '-'], { maxBuffer: 20 * 1024 * 1024 });
    return stdout;
  } catch (error) {
    return '';
  }
}

function assertTextIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Generated PDF is missing ${label}: ${needle}`);
  }
}

function assertTextExcludes(text, needle, label) {
  if (text.includes(needle)) {
    throw new Error(`Generated PDF still contains stale ${label}: ${needle}`);
  }
}

async function validateGeneratedPdf(pdfPath) {
  const text = await extractPdfText(pdfPath);
  if (!text) {
    console.warn('Warning: pdftotext is unavailable; skipped generated PDF text validation.');
    return;
  }

  assertTextIncludes(text, '熊本市區慢節奏恢復日：三方案＋熊本熊部長', 'current Day 6 title');
  assertTextIncludes(text, 'Day6 定案為熊本市區慢節奏恢復日', 'current Day 6 decision text');
  assertTextIncludes(text, '返台前雕像收集日：魯夫・喬巴・布魯克＋機場收尾', 'current Day 8 title');
  assertTextIncludes(text, 'Day8 定案為雕像收集主軸', 'current Day 8 decision text');
  assertTextExcludes(text, '熊本市區 → 御船恐龍/布魯克 → 市區休息 → 熊本熊廣場 → 光之森 Workman', 'old Day 6 route');
}

async function generatePaperPdf() {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), 'kyushu-paper-pdf-'));
  const tmpHtml = path.join(tmpDir, 'paper-manual.html');

  try {
    const html = await renderPaperManualHtml();
    await writeFile(tmpHtml, html, 'utf8');

    await execFileAsync('weasyprint', [tmpHtml, distPdf], {
      cwd: repoRoot,
      maxBuffer: 20 * 1024 * 1024,
    });

    await validateGeneratedPdf(distPdf);
    await copyFile(distPdf, rootPdf);
    console.log(`Generated ${path.relative(repoRoot, distPdf)} and ${path.relative(repoRoot, rootPdf)}`);
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      throw new Error('weasyprint is required to generate kyushu-travel-manual.pdf. Install WeasyPrint or keep the committed generated PDF.');
    }
    throw error;
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
}

await generatePaperPdf();
