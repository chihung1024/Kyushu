import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const fail = message => errors.push(message);
const warn = message => warnings.push(message);

function repoPath(relativePath) {
  return path.join(repoRoot, relativePath);
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(repoPath(dir), { withFileTypes: true })) {
    const rel = path.posix.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(rel));
    else out.push(rel);
  }
  return out;
}

function isExternal(url) {
  return /^https:\/\//i.test(url);
}

function isSkippable(url) {
  return !url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('data:') || url.includes('${') || url.includes('`');
}

function checkHref(file, tag, href) {
  if (isSkippable(href)) return;
  if (/^http:\/\//i.test(href)) fail(`${file}: insecure http URL: ${href}`);
  if (/\s/.test(href)) fail(`${file}: href contains raw whitespace: ${href}`);
  if (tag.includes('target="_blank"') || tag.includes("target='_blank'")) {
    if (!/rel=("|')[^"']*noopener[^"']*noreferrer[^"']*("|')/i.test(tag)) {
      fail(`${file}: target=_blank missing rel="noopener noreferrer" for ${href}`);
    }
  }
  if (!isExternal(href) && !href.startsWith('/') && !href.startsWith('new URL(')) {
    const clean = href.split('#')[0].split('?')[0];
    if (clean && !existsSync(repoPath(clean))) fail(`${file}: local href target does not exist: ${href}`);
  }
}

async function checkStaticHrefs() {
  const rootFiles = ['index.html', 'kyushu-trip-final-day6-day8.html', 'dist/kyushu-trip-final.html'].filter(file => existsSync(repoPath(file)));
  const files = [...rootFiles, ...(await walk('js')).filter(f => f.endsWith('.js'))];
  const tagPattern = /<[^>]+href=("|')([^"']+)\1[^>]*>/gi;
  for (const file of files) {
    const source = await readFile(repoPath(file), 'utf8');
    for (const match of source.matchAll(tagPattern)) {
      checkHref(file, match[0], match[2]);
    }
  }
}

async function loadDataContext() {
  const context = vm.createContext({ console, encodeURIComponent, String, Array, Object, Set });
  for (const file of [
    'js/data/constants.js',
    'js/data/parking.js',
    'js/data/itinerary.js',
    'js/data/backup.js',
    'js/data/gourmet-backup.js',
    'js/data/day-focus.js',
    'js/data/day-gourmet.js',
  ]) {
    const code = await readFile(repoPath(file), 'utf8');
    new vm.Script(code, { filename: file }).runInContext(context);
  }
  return context;
}

async function checkDataLinksAndParking() {
  const context = await loadDataContext();
  context.fail = fail;
  context.warn = warn;
  new vm.Script(`
(function validateLinks() {
  const isNonEmptyString = value => typeof value === 'string' && value.trim().length > 0;
  const validHttps = value => !value || /^https:\\/\\//i.test(String(value));
  itineraryData.forEach(day => {
    if (day.mapLink && !validHttps(day.mapLink)) fail('Day ' + day.day + ': mapLink must be https: ' + day.mapLink);
    (day.sections || []).forEach((section, index) => {
      const label = 'Day ' + day.day + ' section ' + (index + 1) + ' [' + section.title + ']';
      if (section.mapQuery && !section.parkingNotRequired) {
        const parking = section.parkingQuery || parkingLookup[section.mapQuery];
        if (!parking) fail(label + ': mapQuery exists but parkingQuery / parkingLookup is missing for "' + section.mapQuery + '"');
      }
      if (section.parkingQuery) {
        const queries = Array.isArray(section.parkingQuery) ? section.parkingQuery : [section.parkingQuery];
        queries.forEach(query => { if (!isNonEmptyString(query)) fail(label + ': empty parkingQuery'); });
      }
    });
  });
  Object.entries(gourmetBackupDB || {}).forEach(([region, list]) => {
    (list || []).forEach((item, index) => {
      (item.links || []).forEach((link, linkIndex) => {
        if (!validHttps(link.url)) fail('gourmetBackupDB.' + region + '[' + index + '].links[' + linkIndex + '] is not https: ' + link.url);
      });
    });
  });
})();
`, { filename: 'tools/validate-links.inline.js' }).runInContext(context);
}

function checkRequiredAssets() {
  ['kyushu-travel-manual.pdf', 'dist/kyushu-travel-manual.pdf'].forEach(file => {
    if (!existsSync(repoPath(file))) fail(`Missing required PDF asset: ${file}`);
  });
}

async function main() {
  await checkStaticHrefs();
  await checkDataLinksAndParking();
  checkRequiredAssets();
  const allSource = [
    await readFile(repoPath('index.html'), 'utf8'),
    await readFile(repoPath('js/components/static-modals.js'), 'utf8'),
  ].join('\n');
  if (allSource.includes('https://www.japan.travel/en/plan/insurance/')) {
    fail('Old JNTO insurance URL is still present.');
  }
  if (warnings.length) console.warn('Link validation warnings:\n' + warnings.map(w => '- ' + w).join('\n'));
  if (errors.length) throw new Error('Link validation failed:\n' + errors.map(e => '- ' + e).join('\n'));
  console.log('Link validation passed: static hrefs, map links, parking coverage and PDF assets.');
}

await main();
