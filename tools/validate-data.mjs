import { readFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const dataFiles = [
  'js/data/constants.js',
  'js/data/parking.js',
  'js/data/itinerary.js',
  'js/data/backup.js',
  'js/data/gourmet-backup.js',
  'js/data/day-focus.js',
  'js/data/day-gourmet.js',
];

function resolveRepoPath(relativePath) {
  return path.join(repoRoot, relativePath);
}

const context = vm.createContext({
  console,
  encodeURIComponent,
  String,
  Array,
  Object,
  Set,
});

for (const file of dataFiles) {
  const code = await readFile(resolveRepoPath(file), 'utf8');
  new vm.Script(code, { filename: file }).runInContext(context);
}

new vm.Script(`
(function validateData() {
  const errors = [];
  const warnings = [];
  const fail = message => errors.push(message);
  const warn = message => warnings.push(message);
  const isNonEmptyString = value => typeof value === 'string' && value.trim().length > 0;
  const assert = (condition, message) => { if (!condition) fail(message); };
  const validUrl = value => !value || /^https:\/\//i.test(String(value));

  assert(Array.isArray(itineraryData), 'itineraryData must be an array');
  assert(itineraryData.length === 8, 'itineraryData should contain 8 travel days');

  const seenDays = new Set();
  const allowedTypes = new Set([...Object.keys(icons || {}), 'rain']);
  let sectionCount = 0;
  let checklistCount = 0;

  itineraryData.forEach((dayData, dayIndex) => {
    const label = 'Day ' + (dayData && dayData.day);
    assert(Number.isInteger(dayData.day), label + ': day must be an integer');
    assert(!seenDays.has(dayData.day), label + ': duplicate day number');
    seenDays.add(dayData.day);
    assert(dayData.day === dayIndex + 1, label + ': day numbers should be sequential from 1');
    assert(isNonEmptyString(dayData.date), label + ': missing date');
    assert(isNonEmptyString(dayData.title), label + ': missing title');
    assert(isNonEmptyString(dayData.route), label + ': missing route');
    assert(isNonEmptyString(dayData.hotel), label + ': missing hotel');
    assert(validUrl(dayData.mapLink), label + ': mapLink should be https URL');
    assert(Array.isArray(dayData.sections) && dayData.sections.length > 0, label + ': sections must be a non-empty array');
    if (Array.isArray(dayData.checklist)) checklistCount += dayData.checklist.length;

    (dayData.sections || []).forEach((section, sectionIndex) => {
      const sectionLabel = label + ' section ' + (sectionIndex + 1);
      sectionCount += 1;
      assert(isNonEmptyString(section.type), sectionLabel + ': missing type');
      assert(allowedTypes.has(section.type), sectionLabel + ': unsupported type "' + section.type + '"');
      assert(isNonEmptyString(section.title), sectionLabel + ': missing title');
      assert(isNonEmptyString(section.content), sectionLabel + ': missing content');
      if (!section.time) warn(sectionLabel + ': no time label');
      if (section.parkingQuery) {
        const queries = Array.isArray(section.parkingQuery) ? section.parkingQuery : [section.parkingQuery];
        queries.forEach(query => assert(isNonEmptyString(query), sectionLabel + ': empty parkingQuery value'));
      }
    });
  });

  itineraryData.forEach(dayData => {
    assert(dayFocusDB[dayData.day], 'dayFocusDB missing Day ' + dayData.day);
    assert(dayGourmetDB[String(dayData.day)] || dayGourmetDB[dayData.day], 'dayGourmetDB missing Day ' + dayData.day);
  });

  Object.entries(parkingLookup || {}).forEach(([source, target]) => {
    assert(isNonEmptyString(source), 'parkingLookup contains empty key');
    const targets = Array.isArray(target) ? target : [target];
    targets.forEach(query => {
      assert(isNonEmptyString(query), 'parkingLookup[' + source + '] contains empty target');
      if (!parkingLabelLookup[query]) warn('parkingLabelLookup missing explicit label for: ' + query);
    });
  });

  Object.entries(backupDB || {}).forEach(([region, regionData]) => {
    ['sight', 'food', 'shop'].forEach(category => {
      const list = regionData[category];
      assert(Array.isArray(list), 'backupDB.' + region + '.' + category + ' must be an array');
      (list || []).forEach((item, index) => {
        if (typeof item === 'string') {
          assert(item.includes('|'), 'backupDB.' + region + '.' + category + '[' + index + '] should contain "|" separator');
        } else if (item && typeof item === 'object') {
          assert(isNonEmptyString(item.title || item.name), 'backupDB.' + region + '.' + category + '[' + index + '] object missing title/name');
        } else {
          fail('backupDB.' + region + '.' + category + '[' + index + '] has unsupported entry type');
        }
      });
    });
  });

  Object.entries(gourmetBackupDB || {}).forEach(([region, list]) => {
    assert(Array.isArray(list), 'gourmetBackupDB.' + region + ' must be an array');
    (list || []).forEach((item, index) => {
      const label = 'gourmetBackupDB.' + region + '[' + index + ']';
      ['name', 'rank', 'type', 'bestDay', 'area', 'mapQuery', 'must', 'why', 'strategy', 'kid'].forEach(field => {
        assert(isNonEmptyString(item[field]), label + ': missing ' + field);
      });
      (item.links || []).forEach((link, linkIndex) => {
        assert(isNonEmptyString(link.label), label + '.links[' + linkIndex + ']: missing label');
        assert(validUrl(link.url), label + '.links[' + linkIndex + ']: url must be https');
      });
    });
  });

  Object.entries(dayGourmetDB || {}).forEach(([day, data]) => {
    assert(isNonEmptyString(data.headline), 'dayGourmetDB[' + day + ']: missing headline');
    assert(Array.isArray(data.categories) && data.categories.length > 0, 'dayGourmetDB[' + day + ']: missing categories');
    (data.categories || []).forEach((category, categoryIndex) => {
      const label = 'dayGourmetDB[' + day + '].categories[' + categoryIndex + ']';
      assert(isNonEmptyString(category.title), label + ': missing title');
      assert(Array.isArray(category.items), label + ': items must be an array');
      (category.items || []).forEach((item, itemIndex) => {
        const itemLabel = label + '.items[' + itemIndex + ']';
        ['name', 'rank', 'meal', 'area', 'order', 'note', 'fit', 'mapQuery'].forEach(field => {
          assert(isNonEmptyString(item[field]), itemLabel + ': missing ' + field);
        });
      });
    });
  });

  if (warnings.length) {
    console.warn('Data validation warnings:\\n' + warnings.map(w => '- ' + w).join('\\n'));
  }
  if (errors.length) {
    throw new Error('Data validation failed:\\n' + errors.map(e => '- ' + e).join('\\n'));
  }

  console.log('Data validation passed: ' + itineraryData.length + ' days, ' + sectionCount + ' sections, ' + checklistCount + ' checklist items.');
})();
`, { filename: 'tools/validate-data.inline.js' }).runInContext(context);
