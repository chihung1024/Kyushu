// Backup spot and gourmet list renderers.

const BACKUP_RANK_ORDER = ['S', 'S-', 'A', 'B+', 'B', 'B-', 'C', 'X'];
const BACKUP_RANK_SCORE = { S: 90, 'S-': 85, A: 70, 'B+': 62, B: 55, 'B-': 48, C: 35, X: 5 };
const BACKUP_RANK_META = {
    S: { label: 'S 主線核心', tone: 's', copy: '應固定保留；不要再把其他加點壓到它前面。' },
    'S-': { label: 'S- 條件型主線', tone: 's', copy: '價值高，但必須服從天候、潮汐、時間或返程安全。' },
    A: { label: 'A 高優先加點', tone: 'a', copy: '有條件就做；時間不足時可以砍，不需要補償。' },
    'B+': { label: 'B+ 強力救場', tone: 'b', copy: '下雨、太熱、孩子累、主線提前結束時使用。' },
    B: { label: 'B 情境救場', tone: 'b', copy: '主要價值是解決現場問題，不是增加景點數。' },
    'B-': { label: 'B- 需重排備案', tone: 'b', copy: '除非整段改線，否則不硬插。' },
    C: { label: 'C 收藏', tone: 'c', copy: '保留在資料庫；這趟不主動排。' },
    X: { label: 'X 本趟不建議', tone: 'x', copy: '景點本身可能很好，但會破壞本趟節奏。' },
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

function sortBackupEntries(entries) {
    return entries.slice().sort((a, b) => {
        const rankDelta = (BACKUP_RANK_SCORE[b.rank] || 0) - (BACKUP_RANK_SCORE[a.rank] || 0);
        return rankDelta || String(a.title).localeCompare(String(b.title), 'zh-Hant');
    });
}

function backupMetaChip(label, value) {
    if (!value) return '';
    return `<span class="backup-meta-chip"><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`;
}

function backupActionLinks(entry) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.mapQuery || entry.title)}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent((entry.mapQuery || entry.title) + ' 営業時間 駐車場 公式')}`;
    return `<div class="backup-actions">
        <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer">📍 導航</a>
        <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer">🔎 查營業/停車</a>
    </div>`;
}

function renderDecisionBackupCard(entry) {
    const meta = getBackupRankMeta(entry.rank);
    const tagHtml = (entry.tags || []).slice(0, 4).map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
    return `<article class="backup-decision-card rank-tone-${escapeAttr(meta.tone)}">
        <div class="backup-decision-head">
            <span class="backup-rank-pill rank-tone-${escapeAttr(meta.tone)}">${escapeHtml(entry.rank)}</span>
            <div class="min-w-0">
                <h4>${escapeHtml(entry.title)}</h4>
                <p>${escapeHtml(entry.desc || '尚未填寫說明。')}</p>
            </div>
        </div>
        <div class="backup-meta-row">
            ${backupMetaChip('類型', entry.type)}
            ${backupMetaChip('適合', entry.bestDays)}
            ${backupMetaChip('時間', entry.time)}
            ${backupMetaChip('風險', entry.risk)}
        </div>
        <div class="backup-decision-grid">
            ${entry.condition ? `<div><strong>插入條件</strong><span>${escapeHtml(entry.condition)}</span></div>` : ''}
            ${entry.sacrifice ? `<div><strong>犧牲代價</strong><span>${escapeHtml(entry.sacrifice)}</span></div>` : ''}
            ${entry.decision ? `<div class="decision"><strong>一句決策</strong><span>${escapeHtml(entry.decision)}</span></div>` : ''}
        </div>
        ${tagHtml ? `<div class="backup-tag-row">${tagHtml}</div>` : ''}
        ${backupActionLinks(entry)}
    </article>`;
}

function renderBackupSummary(entries, currentBackupCategory) {
    const rankCount = entries.reduce((acc, entry) => {
        const key = entry.rank && entry.rank.startsWith('S') ? 'S' : entry.rank && entry.rank.startsWith('B') ? 'B' : entry.rank || 'B';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    const title = currentBackupCategory === 'shop' ? '採買補給決策' : '景點決策分級';
    const rule = currentBackupCategory === 'shop'
        ? 'S＝主力補給；A＝順路優先；B＝缺東西或改案時使用；C/X 不主動排。'
        : 'S＝主線核心；A＝高優先加點；B＝情境救場；C＝收藏；X＝本趟不建議。';
    return `<section class="backup-control-panel">
        <div>
            <span>Decision Arsenal</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(rule)} 目標不是多跑，而是保護主線、睡眠、還車與駕駛安全。</p>
        </div>
        <div class="backup-summary-stats">
            <strong>${entries.length}</strong><span>可查項目</span>
            <strong>${rankCount.S || 0}</strong><span>主線/條件主線</span>
            <strong>${rankCount.A || 0}</strong><span>高優先</span>
            <strong>${rankCount.B || 0}</strong><span>救場</span>
        </div>
    </section>`;
}

function renderDecisionBackupList(container, currentBackupRegion, currentBackupCategory) {
    const rawList = backupDB[currentBackupRegion]?.[currentBackupCategory] || [];
    const entries = sortBackupEntries(rawList.map(normalizeBackupEntry).filter(entry => entry.title));

    if (!entries.length) {
        container.innerHTML = `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">目前沒有符合的備案資料。</div>`;
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
            return `<section class="backup-rank-section rank-tone-${escapeAttr(meta.tone)}">
                <header>
                    <div><span class="backup-rank-pill rank-tone-${escapeAttr(meta.tone)}">${escapeHtml(rank)}</span><h3>${escapeHtml(meta.label)}</h3></div>
                    <p>${escapeHtml(meta.copy)}</p>
                </header>
                <div class="backup-card-grid">
                    ${grouped[rank].map(renderDecisionBackupCard).join('')}
                </div>
            </section>`;
        }).join('');

    container.innerHTML = `<div class="backup-decision-layout animate-[fadeIn_0.3s_ease-out]">
        ${renderBackupSummary(entries, currentBackupCategory)}
        ${groupHtml}
    </div>`;
}

function getFoodRankLabel(rank) {
    const labels = {
        S: 'S 主線餐',
        'S-': 'S- 條件主線',
        A: 'A 高優先',
        B: 'B 保底/救場',
        C: 'C 收藏',
        X: 'X 不建議'
    };
    return labels[rank] || `${rank || 'B'} 決策`;
}

function normalizeFoodRankClass(rank) {
    return String(rank || 'B').replace(/[^A-Za-z0-9_-]/g, '').replace(/-/g, 'minus').toLowerCase();
}

function renderFoodDecisionChip(label, value, extraClass = '') {
    if (!value) return '';
    return `<span class="food-decision-chip ${escapeAttr(extraClass)}"><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`;
}

function renderFoodDecisionCard(item) {
    const rank = item.rank || 'B';
    const rankKey = normalizeFoodRankClass(rank);
    const query = item.mapQuery || item.name;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || '')}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent((query || '') + ' 営業時間 定休日 メニュー 予約 テイクアウト')}`;
    const links = (item.links || []).map(link => {
        const url = safeExternalUrl(link.url, mapUrl);
        return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">🔎 ${escapeHtml(link.label || '官方')}</a>`;
    }).join('');
    const warnBlock = item.warning ? `<div class="food-decision-note warn"><strong>注意</strong><span>${escapeHtml(item.warning)}</span></div>` : '';
    const cardTone = rank === 'S' || rank === 'S-' ? 's-rank' : rank === 'A' ? 'a-rank' : rank === 'X' ? 'x-rank' : '';
    return `<article class="gourmet-card food-decision-card ${cardTone}">
        <div class="gourmet-head">
            <span class="gourmet-rank rank-${escapeAttr(rankKey)}">${escapeHtml(rank)}</span>
            <div class="min-w-0">
                <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-title">${escapeHtml(item.name)}</a>
                <div class="gourmet-meta">
                    <span class="gourmet-chip type">${escapeHtml(item.type || '')}</span>
                    <span class="gourmet-chip day">${escapeHtml(item.bestDay || '')}</span>
                    <span class="gourmet-chip family">${escapeHtml(item.area || '')}</span>
                </div>
            </div>
        </div>
        <div class="food-decision-chip-row">
            ${renderFoodDecisionChip('類別', item.category)}
            ${renderFoodDecisionChip('排隊', item.queueRisk)}
            ${renderFoodDecisionChip('外帶', item.takeout)}
        </div>
        <div class="food-decision-note primary"><strong>必點 / 買什麼</strong><span>${escapeHtml(item.must)}</span></div>
        <div class="food-decision-note"><strong>為什麼留下</strong><span>${escapeHtml(item.why)}</span></div>
        <div class="food-decision-note decision"><strong>現場決策</strong><span>${escapeHtml(item.strategy)}</span></div>
        <div class="food-decision-note"><strong>親子判斷</strong><span>${escapeHtml(item.kid)}</span></div>
        ${warnBlock}
        <div class="gourmet-actions">
            <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-action">📍 導航</a>
            <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">⏱️ 查營業/外帶</a>
            ${links}
        </div>
    </article>`;
}

function renderGourmetBackupList(container, currentBackupRegion) {
    if (!container) return;
    const dataList = gourmetBackupDB[currentBackupRegion] || [];
    const regionName = currentBackupRegion === 'oita' ? '大分・別府・由布院' : '熊本・阿蘇・上天草';
    if (!dataList.length) {
        container.innerHTML = `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">目前沒有美食備案資料。</div>`;
        return;
    }

    const categoryOrder = ['主線餐', '地方代表', '高優先餐', '親子保底', '保底餐 / 補給', '保底餐 / 補給', '甜點零食', '甜點零食 / 伴手禮', '伴手禮', '願望餐', '成人加碼', '收藏', '不建議硬追'];
    const rankScore = { S: 90, 'S-': 84, A: 70, B: 52, C: 30, X: 0 };
    const sorted = dataList.slice().sort((a, b) => (rankScore[b.rank] || 0) - (rankScore[a.rank] || 0));
    const rankCounts = sorted.reduce((acc, item) => {
        const key = item.rank || 'B';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    const topSafe = sorted.filter(item => ['S', 'S-', 'A'].includes(item.rank)).slice(0, 5).map(item => item.name).join('、');
    const caution = currentBackupRegion === 'kumamoto'
        ? '熊本策略：赤牛、太平燕、天草海鮮與伴手禮分開決策；Day8 返程日只接受可控餐、機場餐與可外帶點心。'
        : '大分策略：別府在地味以地獄蒸、冷麵、琉球丼、豐後牛為核心；由布院只用甜點/小吃短打，不把甜點排成主線。';

    const groups = sorted.reduce((acc, item) => {
        const key = item.category || '其他';
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
    const orderedKeys = Object.keys(groups).sort((a, b) => {
        const ia = categoryOrder.indexOf(a);
        const ib = categoryOrder.indexOf(b);
        return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b, 'zh-Hant');
    });

    const groupHtml = orderedKeys.map(key => {
        const items = groups[key];
        return `<section class="food-decision-section">
            <header>
                <div>
                    <span>Food Decision</span>
                    <h3>${escapeHtml(key)}</h3>
                </div>
                <p>${escapeHtml(items.length)} 項。先看 S/A，再看 B；C/X 只作提醒，不主動排。</p>
            </header>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">${items.map(renderFoodDecisionCard).join('')}</div>
        </section>`;
    }).join('');

    container.innerHTML = `<div class="food-decision-layout animate-[fadeIn_0.3s_ease-out]">
        <section class="food-control-panel">
            <div>
                <span>Food / Sweets / Snacks</span>
                <h3>${escapeHtml(regionName)}｜吃什麼決策中心</h3>
                <p>${escapeHtml(caution)} 帶小孩同行時，牡蠣、生魚片、牛肉生食採保守原則；燒肉由成人烤熟後再分食。</p>
            </div>
            <div class="food-summary-stats">
                <strong>${sorted.length}</strong><span>保留項目</span>
                <strong>${(rankCounts.S || 0) + (rankCounts['S-'] || 0)}</strong><span>主線餐</span>
                <strong>${rankCounts.A || 0}</strong><span>高優先</span>
                <strong>${(rankCounts.C || 0) + (rankCounts.X || 0)}</strong><span>收藏/不建議</span>
            </div>
        </section>
        <div class="gourmet-warning"><strong>優先清單：</strong>${escapeHtml(topSafe || '依當天動線選擇')}<br>S＝主線餐；A＝高優先；B＝保底/救場；C＝收藏；X＝本趟不建議硬追。</div>
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
