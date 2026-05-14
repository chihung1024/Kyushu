// Daily food, sweets and snack decision section render helpers.

function escapeDailyGourmetHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeDailyFoodRankClass(rank) {
    return String(rank || 'B').replace(/[^A-Za-z0-9_-]/g, '').replace(/-/g, 'minus').toLowerCase();
}

function dailyFoodChip(label, value, cssClass = '') {
    if (!value) return '';
    return `<span class="daily-food-chip ${escapeDailyGourmetHtml(cssClass)}"><b>${escapeDailyGourmetHtml(label)}</b>${escapeDailyGourmetHtml(value)}</span>`;
}

function renderDailyGourmet(day) {
    const data = dayGourmetDB[day];
    if (!data || !data.categories || !data.categories.length) return '';

    const rules = (data.rules || []).map(rule => `<span class="daily-gourmet-rule">${escapeDailyGourmetHtml(rule)}</span>`).join('');
    const rankCopy = {
        S: '主線餐',
        'S-': '條件主線',
        A: '高優先',
        B: '保底/救場',
        C: '收藏',
        X: '不建議'
    };

    const categories = data.categories.map((category) => {
        const items = category.items || [];
        const cards = items.map(item => {
            const rank = item.rank || 'B';
            const rankKey = normalizeDailyFoodRankClass(rank);
            const query = item.mapQuery || item.name;
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' 営業時間 定休日 メニュー 予約 テイクアウト')}`;
            const caution = item.caution ? `<div class="daily-gourmet-card-section warn"><div class="daily-gourmet-label">注意</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.caution)}</div></div>` : '';
            return `<article class="daily-gourmet-card gourmet-${escapeDailyGourmetHtml(rankKey)}">
                <div class="daily-gourmet-card-head">
                    <span class="daily-gourmet-rank rank-${escapeDailyGourmetHtml(rankKey)}">${escapeDailyGourmetHtml(rank)}</span>
                    <div class="min-w-0">
                        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-name">${escapeDailyGourmetHtml(item.name)}</a>
                        <div class="daily-gourmet-meta">
                            <span class="daily-gourmet-chip meal">${escapeDailyGourmetHtml(rankCopy[rank] || '決策')}</span>
                            <span class="daily-gourmet-chip meal">${escapeDailyGourmetHtml(item.meal)}</span>
                            <span class="daily-gourmet-chip area">${escapeDailyGourmetHtml(item.area)}</span>
                        </div>
                    </div>
                </div>
                <div class="daily-food-chip-row">
                    ${dailyFoodChip('用途', item.purpose)}
                    ${dailyFoodChip('時機', item.timing)}
                    ${dailyFoodChip('排隊', item.queueRisk)}
                    ${dailyFoodChip('親子', item.kidFit)}
                    ${dailyFoodChip('外帶', item.takeout)}
                </div>
                <div class="daily-gourmet-card-section"><div class="daily-gourmet-label">點什麼 / 買什麼</div><div class="daily-gourmet-text"><strong>${escapeDailyGourmetHtml(item.order)}</strong></div></div>
                <div class="daily-gourmet-card-section"><div class="daily-gourmet-label">為什麼放今天</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.note)}</div></div>
                <div class="daily-gourmet-card-section decision"><div class="daily-gourmet-label">現場判斷</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.fit)}</div></div>
                ${caution}
                <div class="daily-gourmet-actions">
                    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-action">📍 導航</a>
                    <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-action secondary">🔎 查營業/外帶</a>
                </div>
            </article>`;
        }).join('');
        const openAttr = category.open ? ' open' : '';
        return `<details class="daily-gourmet-category"${openAttr}>
            <summary>
                <span class="daily-gourmet-category-icon">${escapeDailyGourmetHtml(category.icon)}</span>
                <span class="flex-1 min-w-0">
                    <span class="daily-gourmet-category-title">${escapeDailyGourmetHtml(category.title)}</span>
                    <span class="daily-gourmet-category-note block">${escapeDailyGourmetHtml(category.note)}</span>
                </span>
                <span class="daily-gourmet-count">${items.length} 選</span>
            </summary>
            <div class="daily-gourmet-grid">${cards}</div>
        </details>`;
    }).join('');

    return `<section class="daily-gourmet-panel" id="day-gourmet-${day}">
        <div class="daily-gourmet-header">
            <div class="daily-gourmet-title"><span>🍽️</span><span>今日吃什麼決策｜正餐・甜點・零食</span></div>
            <div class="daily-gourmet-brief">${escapeDailyGourmetHtml(data.headline)}</div>
            <div class="daily-gourmet-rules">${rules}</div>
        </div>
        <div class="daily-gourmet-alert">S＝今日最穩/主線餐；A＝高優先；B＝保底救場；C＝收藏不主動排；X＝本趟不建議。甜點零食只服務行程，不反過來支配行程。</div>
        <div class="daily-gourmet-body">${categories}</div>
        <div class="daily-gourmet-footer">使用方式：先展開「今日最穩」，再看高優先與甜點。若排隊、孩子狀態、天候或硬切時間不對，就直接切到保底餐或商場補給。</div>
    </section>`;
}
