import { access, readFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const sourceFiles = [
  'js/utils/html.js',
  'js/data/constants.js',
  'js/data/parking.js',
  'js/data/itinerary.js',
  'js/data/backup.js',
  'js/data/gourmet-backup.js',
  'js/data/day-focus.js',
  'js/data/day-gourmet.js',
  'js/components/parking-buttons.js',
  'js/components/daily-gourmet.js',
  'js/components/day-timeline.js',
  'js/components/backup-list.js',
  'js/components/day-info-modal.js',
  'js/components/print-view.js',
  'js/components/static-modals.js',
  'js/controllers/modal.js',
  'js/controllers/tabs.js',
  'js/controllers/backup-modal.js',
  'js/controllers/clipboard.js',
];


class FakeClassList {
  constructor() {
    this.values = new Set();
  }

  add(...items) {
    items.forEach(item => this.values.add(item));
  }

  remove(...items) {
    items.forEach(item => this.values.delete(item));
  }

  contains(item) {
    return this.values.has(item);
  }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = tagName;
    this.ownerDocument = ownerDocument;
    this.children = [];
    this.classList = new FakeClassList();
    this.dataset = {};
    this.style = { setProperty() {} };
    this.attributes = new Map();
    this.open = false;
    this.scrollTop = 0;
    this._id = '';
    this._innerHTML = '';
    this._textContent = '';
  }

  set id(value) {
    this._id = String(value || '');
    if (this._id) this.ownerDocument.elements.set(this._id, this);
  }

  get id() {
    return this._id;
  }

  set innerHTML(value) {
    this._innerHTML = String(value || '');
    this.children = [];
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set textContent(value) {
    this._textContent = String(value || '');
  }

  get textContent() {
    return this._textContent;
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
    if (name === 'id') this.id = value;
  }

  appendChild(child) {
    this.children.push(child);
    if (child.id) this.ownerDocument.elements.set(child.id, child);
    return child;
  }

  addEventListener() {}
  querySelector() { return null; }
  querySelectorAll() { return []; }
  getBoundingClientRect() { return { top: 0, right: 100, bottom: 100, left: 0 }; }
}

class FakeDocument {
  constructor() {
    this.elements = new Map();
    this.documentElement = new FakeElement('html', this);
    this.body = new FakeElement('body', this);
    ['tabs-container', 'itinerary-content', 'print-container', 'backup-category-tabs'].forEach((id) => {
      const element = new FakeElement('div', this);
      element.id = id;
    });
  }

  createElement(tagName) {
    return new FakeElement(tagName, this);
  }

  getElementById(id) {
    return this.elements.get(id) || null;
  }

  querySelectorAll(selector) {
    return selector === 'dialog' ? [] : [];
  }
}

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


async function runAppRenderSmokeTest() {
  const document = new FakeDocument();
  const window = {
    location: { hash: '' },
    history: { pushState() {} },
    innerHeight: 800,
    innerWidth: 1024,
    scrollY: 0,
    isSecureContext: false,
    addEventListener() {},
    scrollTo() {},
  };
  const context = vm.createContext({
    window,
    document,
    history: window.history,
    navigator: {},
    encodeURIComponent,
    parseInt,
    isNaN,
    String,
    Array,
    setTimeout,
    requestAnimationFrame: callback => callback(),
    alert() {},
  });

  for (const file of [...sourceFiles, 'js/main.js']) {
    const code = await readFile(resolveRepoPath(file), 'utf8');
    new vm.Script(code, { filename: file }).runInContext(context);
  }

  const tabs = document.getElementById('tabs-container');
  const content = document.getElementById('itinerary-content');
  const firstDay = document.getElementById('day-content-1');
  if (!tabs || tabs.children.length !== 8) {
    throw new Error('app render failed: day tabs were not created');
  }
  if (!content || content.children.length === 0 || !firstDay) {
    throw new Error('app render failed: itinerary content is blank');
  }
  if (!firstDay.innerHTML.includes('今日動線') || !firstDay.innerHTML.includes('Day 1')) {
    throw new Error('app render failed: first day content is incomplete');
  }
  if (!firstDay.innerHTML.includes('防呆清單') || !firstDay.innerHTML.includes('每日輔助資訊')) {
    throw new Error('app render failed: day diagnostics panel is missing');
  }
}


async function assertPrintContainerOutsidePrintHidden(file) {
  const html = await readFile(resolveRepoPath(file), 'utf8');
  const printIndex = html.indexOf('id="print-container"');
  if (printIndex === -1) {
    throw new Error(`${file} missing #print-container`);
  }

  const stack = [];
  const tagPattern = /<\/?div\b[^>]*>/gi;
  let match;
  while ((match = tagPattern.exec(html)) && match.index < printIndex) {
    const tag = match[0];
    if (/^<\/div/i.test(tag)) {
      stack.pop();
    } else if (!/\/\s*>$/.test(tag)) {
      stack.push(tag);
    }
  }

  const hiddenAncestor = stack.find(tag => /class=["'][^"']*\bprint:hidden\b[^"']*["']/i.test(tag));
  if (hiddenAncestor) {
    throw new Error(`${file} places #print-container inside a print:hidden ancestor, causing blank print output`);
  }
}


async function assertModalLinkIntegrity() {
  const staticCode = await readFile(resolveRepoPath('js/components/static-modals.js'), 'utf8');
  const context = vm.createContext({});
  new vm.Script(staticCode, { filename: 'js/components/static-modals.js' }).runInContext(context);
  const renderedStatic = new vm.Script('renderStaticModals();').runInContext(context);

  const dialogIds = Array.from(renderedStatic.matchAll(/<dialog\b[^>]*\bid=["']([^"']+)["']/g)).map(match => match[1]);
  const idCounts = new Map();
  for (const id of Array.from(renderedStatic.matchAll(/\bid=["']([^"']+)["']/g)).map(match => match[1])) {
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
  }
  const duplicateIds = Array.from(idCounts.entries()).filter(([, count]) => count > 1).map(([id, count]) => `${id}×${count}`);
  if (duplicateIds.length) {
    throw new Error(`static modal markup contains duplicate ids: ${duplicateIds.join(', ')}`);
  }

  const indexHtml = await readFile(resolveRepoPath('index.html'), 'utf8');
  const itineraryJs = await readFile(resolveRepoPath('js/data/itinerary.js'), 'utf8');
  const allInlineHandlers = `${indexHtml}\n${itineraryJs}\n${renderedStatic}`;
  const requestedModalIds = Array.from(new Set(Array.from(allInlineHandlers.matchAll(/showModal\(['"]([^'"]+)['"]\)/g)).map(match => match[1])));
  const missingModalIds = requestedModalIds.filter(id => !dialogIds.includes(id));
  if (missingModalIds.length) {
    throw new Error(`showModal handlers reference missing dialogs: ${missingModalIds.join(', ')}`);
  }
  if (!dialogIds.includes('preTripModal') || !renderedStatic.includes('VJW＋旅遊醫療保險教學')) {
    throw new Error('preTripModal is missing or does not contain the VJW/medical insurance guide');
  }
}

async function runDataAndComponentSmokeTest() {
  const context = vm.createContext({ encodeURIComponent, String, Array, Object });

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
    if (htmlToPlainText('A<br>B</div><strong>C</strong>') !== 'A\\nB\\nC') throw new Error('htmlToPlainText failed to preserve line breaks');
    if (!escapeHtml('<script>').includes('&lt;script&gt;')) throw new Error('escapeHtml failed');
    if (!renderParkingButtons('阿蘇くまもと空港 駐車場').includes('阿蘇熊本機場')) throw new Error('parking renderer failed');
    if (!renderDailyGourmet(1).includes('今日吃什麼決策')) throw new Error('gourmet renderer failed');
    const backupContainer = { innerHTML: '' };
    renderBackupList(backupContainer, 'oita', 'sight');
    if (!backupContainer.innerHTML.includes('九州自然動物園 African Safari')) throw new Error('backup renderer failed');
    renderBackupList(backupContainer, 'unknown-region', 'sight');
    if (!backupContainer.innerHTML.includes('目前沒有符合的備案資料')) throw new Error('backup empty-state failed');
    const staticModals = renderStaticModals();
    if (!staticModals.includes('id="dayInfoModal"') || !staticModals.includes('id="backupModal"')) throw new Error('static modal renderer failed');
    const printHtml = renderPrintViewHtml();
    if (!printHtml.includes('Day 1') || !printHtml.includes('Day 8') || !printHtml.includes('九州親子大冒險｜紙本攻略') || !printHtml.includes('當日時間軸')) throw new Error('print renderer failed');
  `).runInContext(context);
}

await assertMissing('js/data.js');
await assertMissing('js/components.js');
await assertContains('index.html', /js\/utils\/html\.js/, 'shared HTML helpers');
await assertContains('index.html', /js\/data\/constants\.js/, 'modular data scripts');
await assertContains('index.html', /js\/components\/parking-buttons\.js/, 'modular component scripts');
await assertContains('css/style.css', /print\.css/, 'print stylesheet import');
await assertPrintContainerOutsidePrintHidden('index.html');
await assertModalLinkIntegrity();
const dist = await assertContains('dist/kyushu-trip-final.html', /kyushu-inline-styles/, 'inlined CSS marker');
await assertPrintContainerOutsidePrintHidden('dist/kyushu-trip-final.html');
if (/\[object Promise\]/.test(dist)) {
  throw new Error('dist/kyushu-trip-final.html contains an unresolved Promise marker');
}
if (/<script\s+src="js\//.test(dist) || /<link\s+href="css\/style\.css"/.test(dist)) {
  throw new Error('dist/kyushu-trip-final.html should inline local CSS and JS assets');
}
await runDataAndComponentSmokeTest();
await runAppRenderSmokeTest();

console.log('Smoke checks passed');
