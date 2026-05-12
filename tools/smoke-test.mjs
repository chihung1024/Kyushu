import { access, readFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const sourceFiles = [
  'js/data/constants.js',
  'js/data/parking.js',
  'js/data/itinerary.js',
  'js/data/backup.js',
  'js/data/gourmet-backup.js',
  'js/data/day-focus.js',
  'js/data/day-gourmet.js',
  'js/components/parking-buttons.js',
  'js/components/daily-gourmet.js',
];

function resolveRepoPath(relativePath) {
  return path.join(repoRoot, relativePath);
}

async function assertMissing(relativePath) {
  try {
    await access(resolveRepoPath(relativePath), fsConstants.F_OK);
  } catch {
    return;
  }
  throw new Error(`${relativePath} should not exist; data now lives under js/data/*.js`);
}

async function assertContains(file, pattern, description) {
  const text = await readFile(resolveRepoPath(file), 'utf8');
  if (!pattern.test(text)) {
    throw new Error(`${file} missing expected content: ${description}`);
  }
  return text;
}

async function runDataAndComponentSmokeTest() {
  const context = vm.createContext({ encodeURIComponent });

  for (const file of sourceFiles) {
    const code = await readFile(resolveRepoPath(file), 'utf8');
    new vm.Script(code, { filename: file }).runInContext(context);
  }

  new vm.Script(`
    if (!Array.isArray(itineraryData) || itineraryData.length === 0) throw new Error('missing itineraryData');
    if (!backupDB.oita.sight.length) throw new Error('missing backupDB.oita.sight');
    if (!gourmetBackupDB.oita.length) throw new Error('missing gourmetBackupDB.oita');
    if (!dayFocusDB[1]) throw new Error('missing dayFocusDB[1]');
    if (!dayGourmetDB[1]) throw new Error('missing dayGourmetDB[1]');
    if (!renderParkingButtons('阿蘇くまもと空港 駐車場').includes('阿蘇熊本機場')) throw new Error('parking renderer failed');
    if (!renderDailyGourmet(1).includes('今日美食候選')) throw new Error('gourmet renderer failed');
  `).runInContext(context);
}

await assertMissing('js/data.js');
await assertContains('index.html', /js\/data\/constants\.js/, 'modular data scripts');
await assertContains('index.html', /js\/components\/parking-buttons\.js/, 'modular component scripts');
const dist = await assertContains('dist/kyushu-trip-final.html', /kyushu-inline-styles/, 'inlined CSS marker');
if (/\[object Promise\]/.test(dist)) {
  throw new Error('dist/kyushu-trip-final.html contains an unresolved Promise marker');
}
if (/<script\s+src="js\//.test(dist) || /<link\s+href="css\/style\.css"/.test(dist)) {
  throw new Error('dist/kyushu-trip-final.html should inline local CSS and JS assets');
}
await runDataAndComponentSmokeTest();

console.log('Smoke checks passed');
