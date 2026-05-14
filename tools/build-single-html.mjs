import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputHtml = path.join(repoRoot, 'index.html');
const outputHtml = path.join(repoRoot, 'dist', 'kyushu-trip-final.html');

async function readText(relativeOrAbsolutePath) {
  return readFile(relativeOrAbsolutePath, 'utf8');
}

function toRepoPath(assetPath) {
  return path.join(repoRoot, assetPath.replace(/^\.\//, ''));
}

async function inlineCssFile(cssPath, seen = new Set()) {
  const absolutePath = path.resolve(cssPath);
  if (seen.has(absolutePath)) {
    throw new Error(`Circular CSS import detected: ${absolutePath}`);
  }
  seen.add(absolutePath);

  const css = await readText(absolutePath);
  const cssDir = path.dirname(absolutePath);
  const importPattern = /@import\s+(?:url\()?['"]([^'")]+)['"]\)?\s*;/g;
  let output = '';
  let lastIndex = 0;

  for (const match of css.matchAll(importPattern)) {
    output += css.slice(lastIndex, match.index);
    const importedPath = path.resolve(cssDir, match[1]);
    const importedRelative = path.relative(repoRoot, importedPath).replaceAll(path.sep, '/');
    output += `\n/* === ${importedRelative} === */\n`;
    output += await inlineCssFile(importedPath, new Set(seen));
    output += '\n';
    lastIndex = match.index + match[0].length;
  }

  output += css.slice(lastIndex);
  return output;
}

async function inlineLinkedStyles(html) {
  const stylesheetTag = /<link\s+href="css\/style\.css"\s+rel="stylesheet"\s*\/?>/;
  if (!stylesheetTag.test(html)) {
    throw new Error('Could not find css/style.css link in index.html');
  }

  const inlineCss = await inlineCssFile(toRepoPath('css/style.css'));
  return html.replace(
    stylesheetTag,
    `<style id="kyushu-inline-styles">\n${inlineCss}\n</style>`,
  );
}

async function inlineScripts(html) {
  const scriptPattern = /<script\s+src="(js\/[^"]+\.js)"><\/script>/g;
  let output = '';
  let lastIndex = 0;
  let inlinedCount = 0;

  for (const match of html.matchAll(scriptPattern)) {
    output += html.slice(lastIndex, match.index);
    const src = match[1];
    const script = await readText(toRepoPath(src));
    output += `<script data-source="${src}">\n${script}\n</script>`;
    lastIndex = match.index + match[0].length;
    inlinedCount += 1;
  }

  if (inlinedCount === 0) {
    throw new Error('Could not find local JS scripts in index.html');
  }

  output += html.slice(lastIndex);
  return output;
}

async function buildSingleHtml() {
  let html = await readText(inputHtml);
  html = await inlineLinkedStyles(html);
  html = await inlineScripts(html);

  html = html.replace(/[ \t]+$/gm, '');

  const banner = '<!-- Built by tools/build-single-html.mjs. Edit source modules, not this file. -->\n';
  await mkdir(path.dirname(outputHtml), { recursive: true });
  await writeFile(outputHtml, banner + html);
  console.log(`Built ${path.relative(repoRoot, outputHtml)}`);
}

await buildSingleHtml();
