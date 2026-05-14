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

function renderGourmetBackupList(container, currentBackupRegion) {
    if (!container) return;
    const dataList = gourmetBackupDB[currentBackupRegion] || [];
    const regionName = currentBackupRegion === 'oita' ? '大分・別府・由布院' : '熊本・阿蘇・上天草';
    const topS = dataList.filter(item => item.rank === 'S').slice(0, 4).map(item => String(item.name || '').replace(/／.*/, '')).join('、');
    const caution = currentBackupRegion === 'kumamoto'
        ? '<strong>6 月上天草策略：</strong>牡蠣小屋與生海膽活動多偏冬春，Day7 應主攻車海老、刺身、海鮮丼、鮑魚；牡蠣與海膽有貨再加點。'
        : '<strong>別府策略：</strong>海鮮吃りゅうきゅう丼、関あじ有貨再點；麵食優先別府冷麵；豐後牛則放 Day3 或 Day4 晚餐。';

    let html = `<div class="animate-[fadeIn_0.3s_ease-out]">
        <div class="gourmet-warning">${caution}<br>帶小孩同行時，牡蠣、生魚片、牛肉生食一律保守；燒肉由成人烤熟後再分食。</div>
        <div id="gourmet-summary-grid">
            <div class="gourmet-summary-card"><h4>區域</h4><p>${escapeHtml(regionName)}</p></div>
            <div class="gourmet-summary-card"><h4>S 級主菜</h4><p>${escapeHtml(topS || '依當天動線選擇')}</p></div>
            <div class="gourmet-summary-card"><h4>使用規則</h4><p>S＝主動排；A＝順路優先；B＝備案／願望清單；C＝季節或不建議硬追。</p></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">`;

    if (!dataList.length) {
        container.innerHTML = `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">目前沒有美食備案資料。</div>`;
        return;
    }

    dataList.forEach((item) => {
        const rank = escapeHtml(item.rank || 'B');
        const rankClass = `rank-${rank}`;
        const cardRankClass = item.rank === 'S' ? 's-rank' : item.rank === 'A' ? 'a-rank' : '';
        const query = item.mapQuery || item.name;
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || '')}`;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent((query || '') + ' 営業時間 定休日 メニュー')}`;
        const links = (item.links || []).map(link => {
            const url = safeExternalUrl(link.url, mapUrl);
            return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">🔎 ${escapeHtml(link.label || '官方')}</a>`;
        }).join('');
        const warnBlock = item.warning ? `<div class="gourmet-section"><div class="gourmet-label">避雷／注意</div><div class="gourmet-text">${escapeHtml(item.warning)}</div></div>` : '';
        html += `<article class="gourmet-card ${cardRankClass}">
            <div class="gourmet-head">
                <span class="gourmet-rank ${rankClass}">${rank}</span>
                <div class="min-w-0">
                    <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-title">${escapeHtml(item.name)}</a>
                    <div class="gourmet-meta">
                        <span class="gourmet-chip type">${escapeHtml(item.type)}</span>
                        <span class="gourmet-chip day">${escapeHtml(item.bestDay)}</span>
                        <span class="gourmet-chip family">${escapeHtml(item.area)}</span>
                    </div>
                </div>
            </div>
            <div class="gourmet-section"><div class="gourmet-label">必點</div><div class="gourmet-text"><strong>${escapeHtml(item.must)}</strong></div></div>
            <div class="gourmet-section"><div class="gourmet-label">為什麼值得</div><div class="gourmet-text">${escapeHtml(item.why)}</div></div>
            <div class="gourmet-section"><div class="gourmet-label">排法</div><div class="gourmet-text">${escapeHtml(item.strategy)}</div></div>
            <div class="gourmet-section"><div class="gourmet-label">親子判斷</div><div class="gourmet-text">${escapeHtml(item.kid)}</div></div>
            ${warnBlock}
            <div class="gourmet-actions">
                <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-action">📍 導航</a>
                <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">⏱️ 查營業</a>
                ${links}
            </div>
        </article>`;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

function renderBackupList(container, currentBackupRegion, currentBackupCategory) {
    if (!container) return;
    if (currentBackupCategory === 'food') {
        renderGourmetBackupList(container, currentBackupRegion);
        return;
    }
    renderDecisionBackupList(container, currentBackupRegion, currentBackupCategory);
}
