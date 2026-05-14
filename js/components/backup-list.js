// Backup spot, shop and gourmet decision center renderers.
// The modal is intentionally decision-first: keep main routes safe, then decide
// whether a spot / meal / supply run is worth inserting.

const BACKUP_RANK_ORDER = ['S', 'S-', 'A', 'B+', 'B', 'B-', 'C', 'X'];
const BACKUP_RANK_SCORE = { S: 90, 'S-': 85, A: 70, 'B+': 62, B: 55, 'B-': 48, C: 35, X: 5 };
const BACKUP_RANK_META = {
    S: { label: '主線核心', tone: 's', copy: '應固定保留；不要再把其他加點壓到它前面。' },
    'S-': { label: '條件型主線', tone: 's', copy: '價值高，但必須服從天候、潮汐、時間或返程安全。' },
    A: { label: '高優先加點', tone: 'a', copy: '有條件就做；時間不足時可以砍，不需要補償。' },
    'B+': { label: '強力救場', tone: 'b', copy: '下雨、太熱、孩子累、主線提前結束時使用。' },
    B: { label: '情境救場', tone: 'b', copy: '主要價值是解決現場問題，不是增加景點數。' },
    'B-': { label: '需重排備案', tone: 'b', copy: '除非整段改線，否則不硬插。' },
    C: { label: '收藏', tone: 'c', copy: '保留在資料庫；這趟不主動排。' },
    X: { label: '本趟不建議', tone: 'x', copy: '景點本身可能很好，但會破壞本趟節奏。' },
};

const FOOD_CATEGORY_ORDER = [
    '主線餐',
    '高優先餐',
    '地方代表',
    '親子保底',
    '保底餐 / 補給',
    '甜點零食',
    '甜點零食 / 伴手禮',
    '伴手禮',
    '願望餐',
    '成人加碼',
    '收藏',
    '不建議硬追',
];
const FOOD_RANK_SCORE = { S: 90, 'S-': 84, A: 70, B: 52, C: 30, X: 0 };
const FOOD_RANK_META = {
    S: { label: '主線餐', tone: 's', copy: '可以為它保留時間，但仍要服從硬切時間。' },
    'S-': { label: '條件主線', tone: 's', copy: '值得吃；但需要天候、排隊或當天動線成立。' },
    A: { label: '高優先', tone: 'a', copy: '有時間就攻；排隊過長就降級。' },
    B: { label: '保底 / 救場', tone: 'b', copy: '孩子累、太晚、天候差時用。' },
    C: { label: '收藏', tone: 'c', copy: '可以記住，但這趟不主動追。' },
    X: { label: '不建議硬追', tone: 'x', copy: '不是不好吃，而是不符合這趟節奏。' },
};

function normalizeBackupEntry(item) {
    if (!item) return { title: '', desc: '', rank: 'B', mapQuery: '', tags: [] };
    if (typeof item === 'object') {
        const title = String(item.title || item.name || '').trim();
        const rank = String(item.rank || (item.starred ? 'S' : 'B')).trim();
        return {
            title,
            desc: String(item.desc || item.description || '').trim(),
            rank,
            type: String(item.type || '').trim(),
            bestDays: String(item.bestDays || item.bestDay || '').trim(),
            time: String(item.time || '').trim(),
            risk: String(item.risk || '').trim(),
            condition: String(item.condition || '').trim(),
            sacrifice: String(item.sacrifice || '').trim(),
            decision: String(item.decision || '').trim(),
            mapQuery: item.mapQuery || title,
            tags: Array.isArray(item.tags) ? item.tags : [],
            includeInPaper: item.includeInPaper !== false,
        };
    }
    const raw = String(item);
    const separatorIndex = raw.indexOf('|');
    const rawTitle = separatorIndex >= 0 ? raw.slice(0, separatorIndex) : raw;
    const desc = separatorIndex >= 0 ? raw.slice(separatorIndex + 1) : '';
    const starred = rawTitle.includes('⭐');
    const title = rawTitle.replace('⭐', '').trim();
    return { title, desc: desc.trim(), rank: starred ? 'S' : 'B', mapQuery: title, tags: [] };
}

function getBackupRankMeta(rank) {
    return BACKUP_RANK_META[rank] || BACKUP_RANK_META.B;
}

function getFoodRankMeta(rank) {
    return FOOD_RANK_META[rank] || FOOD_RANK_META.B;
}

function sortBackupEntries(entries) {
    return entries.slice().sort((a, b) => {
        const rankDelta = (BACKUP_RANK_SCORE[b.rank] || 0) - (BACKUP_RANK_SCORE[a.rank] || 0);
        return rankDelta || String(a.title).localeCompare(String(b.title), 'zh-Hant');
    });
}

function sortFoodEntries(entries) {
    return entries.slice().sort((a, b) => {
        const priorityDelta = (b.paperPriority || 0) - (a.paperPriority || 0);
        const rankDelta = (FOOD_RANK_SCORE[b.rank] || 0) - (FOOD_RANK_SCORE[a.rank] || 0);
        return priorityDelta || rankDelta || String(a.name).localeCompare(String(b.name), 'zh-Hant');
    });
}

function compactCount(entries, ranks) {
    return entries.filter(item => ranks.includes(item.rank)).length;
}

function renderDecisionMetric(label, value) {
    return `<span class="decision-metric"><strong>${escapeHtml(String(value))}</strong>${escapeHtml(label)}</span>`;
}

function getRankLegend(category) {
    if (category === 'food') return 'S 主線餐 / A 可攻 / B 保底 / C 收藏 / X 不硬追';
    if (category === 'shop') return 'S 主力補給 / A 順路優先 / B 缺東西才用 / C/X 不主動排';
    return 'S 主線 / A 可攻 / B 救場 / C 收藏 / X 不建議';
}

function backupMetaChip(label, value) {
    if (!value) return '';
    return `<span class="decision-chip"><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`;
}

function backupActionLinks(entry) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.mapQuery || entry.title)}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent((entry.mapQuery || entry.title) + ' 営業時間 駐車場 公式')}`;
    return `<div class="decision-card-actions">
        <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer">導航</a>
        <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer">查營業 / 停車</a>
    </div>`;
}

function renderDecisionRow(label, value, tone = '') {
    if (!value) return '';
    return `<div class="decision-row ${escapeAttr(tone)}"><b>${escapeHtml(label)}</b><span>${escapeHtml(value)}</span></div>`;
}

function renderDecisionBackupCard(entry, compact = false) {
    const meta = getBackupRankMeta(entry.rank);
    const tagHtml = (entry.tags || []).slice(0, compact ? 2 : 4).map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
    return `<article class="decision-card rank-tone-${escapeAttr(meta.tone)} ${compact ? 'compact' : ''}">
        <div class="decision-card-head">
            <span class="decision-rank rank-tone-${escapeAttr(meta.tone)}">${escapeHtml(entry.rank)}</span>
            <div class="min-w-0">
                <h4>${escapeHtml(entry.title)}</h4>
                ${entry.desc ? `<p>${escapeHtml(entry.desc)}</p>` : ''}
            </div>
        </div>
        <div class="decision-chip-row">
            ${backupMetaChip('類型', entry.type)}
            ${backupMetaChip('適合', entry.bestDays)}
            ${backupMetaChip('時間', entry.time)}
            ${backupMetaChip('風險', entry.risk)}
        </div>
        <div class="decision-rows">
            ${renderDecisionRow('適合情境', entry.condition || meta.copy)}
            ${renderDecisionRow('犧牲代價', entry.sacrifice)}
            ${renderDecisionRow('一句決策', entry.decision, 'primary')}
        </div>
        ${tagHtml ? `<div class="decision-tags">${tagHtml}</div>` : ''}
        ${backupActionLinks(entry)}
    </article>`;
}

function renderDecisionHero(entries, currentBackupCategory, currentBackupRegion) {
    const titleMap = { sight: '去哪裡', food: '吃什麼', shop: '怎麼補給' };
    const subtitleMap = {
        sight: '先保護主線，再用 A/B 備案處理天候、疲勞與早到晚到。',
        food: '先選可控餐，再看排隊與孩子電量；甜點只服務行程，不反客為主。',
        shop: '把補給視為風險控制，不把購物變成第二套行程。',
    };
    const regionName = currentBackupRegion === 'oita' ? '大分・別府・由布院' : '熊本・阿蘇・上天草';
    const metrics = [
        renderDecisionMetric('全部', entries.length),
        renderDecisionMetric('S / S-', compactCount(entries, ['S', 'S-'])),
        renderDecisionMetric('A', compactCount(entries, ['A'])),
        renderDecisionMetric('B 系', entries.filter(item => String(item.rank || '').startsWith('B')).length),
        renderDecisionMetric('C / X', compactCount(entries, ['C', 'X'])),
    ].join('');
    return `<section class="decision-hero">
        <div>
            <div class="decision-eyebrow">${escapeHtml(regionName)}</div>
            <h3>${escapeHtml(titleMap[currentBackupCategory] || '現場決策')}</h3>
            <p>${escapeHtml(subtitleMap[currentBackupCategory] || '')}</p>
        </div>
        <div class="decision-metrics">${metrics}</div>
    </section>`;
}

function renderDecisionRuleStrip(category) {
    const rules = category === 'food'
        ? ['排隊超過 30 分鐘：降級', '返程日不追名店', '小孩餓了先保底', '生食與牡蠣保守處理']
        : category === 'shop'
            ? ['先買水與點心', '缺東西才進商場', '購物不壓縮睡眠', '返程日只買機場可帶走']
            : ['先看硬切時間', '孩子累直接降級', '下雨改室內', '不為補點犧牲還車'];
    return `<div class="decision-rule-strip">${rules.map(rule => `<span>${escapeHtml(rule)}</span>`).join('')}</div>`;
}

function renderDecisionSectionIntro(title, description, label = 'FIELD PICKS') {
    return `<header class="decision-section-intro">
        <div>
            <span>${escapeHtml(label)}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(description)}</p>
        </div>
    </header>`;
}

function renderDecisionSpotlight(entries, category) {
    const picks = entries.filter(item => ['S', 'S-', 'A'].includes(item.rank)).slice(0, 3);
    if (!picks.length) return '';
    const title = category === 'food' ? '先看這幾個' : category === 'shop' ? '最穩補給' : '優先判斷';
    const description = category === 'shop'
        ? '先處理水、點心、藥妝與停車；不需要時不要把補給變成第二套行程。'
        : category === 'food'
            ? '先用 S / A 做決策；排隊、孩子狀態或硬切時間不合時，直接降級。'
            : '先看 S / A，再看 B；C / X 僅作提醒，不主動排。';
    return `<section class="decision-spotlight">
        ${renderDecisionSectionIntro(title, description, getRankLegend(category))}
        <div class="decision-spotlight-grid">
            ${picks.map(item => renderDecisionBackupCard(item, true)).join('')}
        </div>
    </section>`;
}

function renderDecisionBackupList(container, currentBackupRegion, currentBackupCategory) {
    const rawList = backupDB[currentBackupRegion]?.[currentBackupCategory] || [];
    const entries = sortBackupEntries(rawList.map(normalizeBackupEntry).filter(entry => entry.title));

    if (!entries.length) {
        container.innerHTML = `<div class="decision-empty">目前沒有符合的備案資料。</div>`;
        return;
    }

    const grouped = entries.reduce((acc, entry) => {
        const rank = entry.rank || 'B';
        if (!acc[rank]) acc[rank] = [];
        acc[rank].push(entry);
        return acc;
    }, {});

    const groupHtml = BACKUP_RANK_ORDER
        .filter(rank => grouped[rank] && grouped[rank].length)
        .map(rank => {
            const meta = getBackupRankMeta(rank);
            const isOpen = ['S', 'S-', 'A'].includes(rank);
            return `<details class="decision-section decision-collapsible rank-tone-${escapeAttr(meta.tone)}" ${isOpen ? 'open' : ''}>
                <summary>
                    <div><span class="decision-rank rank-tone-${escapeAttr(meta.tone)}">${escapeHtml(rank)}</span><h3>${escapeHtml(meta.label)}</h3></div>
                    <p>${escapeHtml(meta.copy)}</p>
                    <span class="decision-collapse-indicator" aria-hidden="true"></span>
                </summary>
                <div class="decision-card-grid">
                    ${grouped[rank].map(item => renderDecisionBackupCard(item)).join('')}
                </div>
            </details>`;
        }).join('');

    container.innerHTML = `<div class="decision-layout animate-[fadeIn_0.3s_ease-out]">
        ${renderDecisionHero(entries, currentBackupCategory, currentBackupRegion)}
        ${renderDecisionRuleStrip(currentBackupCategory)}
        ${renderDecisionSpotlight(entries, currentBackupCategory)}
        ${groupHtml}
    </div>`;
}

function normalizeFoodRankClass(rank) {
    return String(rank || 'B').replace(/[^A-Za-z0-9_-]/g, '').replace(/-/g, 'minus').toLowerCase();
}

function foodDecisionChip(label, value) {
    if (!value) return '';
    return `<span class="decision-chip"><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`;
}

function getFoodAvoidText(item) {
    if (item.warning) return item.warning;
    if (item.rank === 'X') return '不要為它改動主線；這趟只作提醒。';
    if (item.rank === 'C') return '這趟不主動追，剛好遇到再說。';
    if (String(item.queueRisk || '').includes('高')) return '排隊或等待過長就放棄，不補償。';
    return '排隊、孩子狀態或硬切時間不對，就直接降級。';
}

function getFoodFallbackText(item) {
    const category = item.category || '';
    if (category.includes('甜點')) return '買不到就改便利商店甜點或飯店宵夜，不補點。';
    if (category.includes('伴手禮')) return '最後可用機場 / 商場伴手禮櫃收斂。';
    if (category.includes('保底')) return '這本身就是保底，不需要再找第二個保底。';
    if (item.area && item.area.includes('別府')) return '改 Youme Town / MEGA Trial / 飯店附近餐。';
    if (item.area && item.area.includes('天草')) return '改天のや、道之驛或車上補給。';
    return '改商場、美食街、便利商店或飯店附近可控餐。';
}

function renderFoodDecisionCard(item, compact = false) {
    const rank = item.rank || 'B';
    const rankKey = normalizeFoodRankClass(rank);
    const rankMeta = getFoodRankMeta(rank);
    const query = item.mapQuery || item.name;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || '')}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent((query || '') + ' 営業時間 定休日 メニュー 予約 テイクアウト')}`;
    const links = (item.links || []).slice(0, compact ? 1 : 2).map(link => {
        const url = safeExternalUrl(link.url, mapUrl);
        return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label || '官方')}</a>`;
    }).join('');

    return `<article class="food-card-v3 rank-${escapeAttr(rankKey)} ${compact ? 'compact' : ''}">
        <div class="food-card-top">
            <span class="food-rank-badge rank-${escapeAttr(rankKey)}">${escapeHtml(rank)}</span>
            <div class="min-w-0">
                <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="food-card-title">${escapeHtml(item.name)}</a>
                <p>${escapeHtml(item.type || rankMeta.label)}</p>
            </div>
        </div>
        <div class="decision-chip-row">
            ${foodDecisionChip('時機', item.bestDay)}
            ${foodDecisionChip('區域', item.area)}
            ${foodDecisionChip('排隊', item.queueRisk)}
            ${foodDecisionChip('外帶', item.takeout)}
        </div>
        <div class="food-decision-grid-v3">
            ${renderDecisionRow('點什麼', item.must || item.order, 'primary')}
            ${renderDecisionRow('適合', item.why || rankMeta.copy)}
            ${renderDecisionRow('不要硬排', getFoodAvoidText(item), 'warn')}
            ${compact ? '' : renderDecisionRow('替代', getFoodFallbackText(item))}
            ${compact ? '' : renderDecisionRow('親子判斷', item.kid)}
            ${compact ? '' : renderDecisionRow('現場策略', item.strategy)}
        </div>
        <div class="decision-card-actions">
            <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer">導航</a>
            <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer">查營業 / 外帶</a>
            ${links}
        </div>
    </article>`;
}

function renderFoodSpotlight(sorted) {
    const picks = sorted.filter(item => ['S', 'S-', 'A'].includes(item.rank)).slice(0, 4);
    if (!picks.length) return '';
    return `<section class="food-quick-picks">
        ${renderDecisionSectionIntro('今日先看', '先用 S / A 做決策；不符合條件時，直接往 B、商場、美食街或便利商店降級。', 'FOOD PRIORITY')}
        <div class="food-quick-grid">
            ${picks.map(item => renderFoodDecisionCard(item, true)).join('')}
        </div>
    </section>`;
}

function renderGourmetBackupList(container, currentBackupRegion) {
    if (!container) return;
    const dataList = gourmetBackupDB[currentBackupRegion] || [];
    const regionName = currentBackupRegion === 'oita' ? '大分・別府・由布院' : '熊本・阿蘇・上天草';
    if (!dataList.length) {
        container.innerHTML = `<div class="decision-empty">目前沒有美食備案資料。</div>`;
        return;
    }

    const sorted = sortFoodEntries(dataList);
    const caution = currentBackupRegion === 'kumamoto'
        ? '熊本策略：赤牛、太平燕、天草海鮮與伴手禮分開決策；Day8 返程日只接受可控餐、機場餐與可外帶點心。'
        : '大分策略：別府在地味以地獄蒸、冷麵、琉球丼、豐後牛為核心；由布院只用甜點 / 小吃短打，不把甜點排成主線。';

    const groups = sorted.reduce((acc, item) => {
        const key = item.category || '其他';
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
    const orderedKeys = Object.keys(groups).sort((a, b) => {
        const ia = FOOD_CATEGORY_ORDER.indexOf(a);
        const ib = FOOD_CATEGORY_ORDER.indexOf(b);
        return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b, 'zh-Hant');
    });

    const groupHtml = orderedKeys.map(key => {
        const items = sortFoodEntries(groups[key]);
        const bestRank = items[0]?.rank || 'B';
        const meta = getFoodRankMeta(bestRank);
        const isOpen = ['S', 'S-', 'A'].includes(bestRank);
        return `<details class="food-section-v3 decision-collapsible rank-tone-${escapeAttr(meta.tone)}" ${isOpen ? 'open' : ''}>
            <summary>
                <div>
                    <span>${escapeHtml(items.length)} 選</span>
                    <h3>${escapeHtml(key)}</h3>
                </div>
                <p>${escapeHtml(meta.copy)}</p>
                <span class="decision-collapse-indicator" aria-hidden="true"></span>
            </summary>
            <div class="food-card-grid-v3">${items.map(item => renderFoodDecisionCard(item)).join('')}</div>
        </details>`;
    }).join('');

    container.innerHTML = `<div class="decision-layout food-layout-v3 animate-[fadeIn_0.3s_ease-out]">
        ${renderDecisionHero(sorted, 'food', currentBackupRegion)}
        <section class="food-strategy-card">
            <div><span>用餐策略</span><p>${escapeHtml(caution)} 帶小孩同行時，牡蠣、生魚片、牛肉生食採保守原則；燒肉由成人烤熟後再分食。</p></div>
            <div class="food-strategy-rule"><strong>硬規則</strong><span>排隊或等待超過 30 分鐘，直接降級，不做補償。</span></div>
        </section>
        ${renderDecisionRuleStrip('food')}
        ${renderFoodSpotlight(sorted)}
        ${groupHtml}
    </div>`;
}

function renderBackupList(container, currentBackupRegion, currentBackupCategory) {
    if (!container) return;
    if (currentBackupCategory === 'food') {
        renderGourmetBackupList(container, currentBackupRegion);
        return;
    }
    renderDecisionBackupList(container, currentBackupRegion, currentBackupCategory);
}
