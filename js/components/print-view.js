// Print-friendly itinerary renderer.

function renderPrintViewHtml() {
    const normalizePrintText = (value) => String(value || '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([，。；：、])\s*/g, '$1')
        .trim();

    const removePrintActionBlocks = (html) => String(html || '')
        .replace(/<button[\s\S]*?<\/button>/gi, '')
        .replace(/<div\s+class=["'][^"']*(?:flex|gap-2|mt-3)[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '')
        .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1');

    const plainText = (value) => normalizePrintText(htmlToPlainText(removePrintActionBlocks(value)));
    const plain = (value) => escapeHtml(plainText(value));
    const inline = (value) => plain(value).replace(/\n+/g, ' / ');
    const stripTitlePrefix = (value) => plainText(value).replace(/^Day\s*\d+\s*[｜|]\s*/i, '').trim();

    const compactRows = (items) => items
        .map(item => `<div class="print-check-row"><span class="print-box">□</span><span>${escapeHtml(normalizePrintText(item))}</span></div>`)
        .join('');

    const globalEssentials = [
        'VJW 入境審查＋海關 QR：每位旅客截圖並列印，紙本放護照夾。',
        '證件包：護照、駕照正本、日文譯本、租車單、信用卡集中管理。',
        '禁帶品：肉乾、香腸、含肉泡麵、水果、生鮮蔬菜不要入境。',
        '藥品：常備藥保留原包裝；處方藥帶處方箋或診斷證明。',
        '兩車 SOP：前導/壓車、LINE 群組、迷路集合點、每日下一站導航。',
        '取車拍照：車身、輪框、油量、ETC、行李箱、兒童座椅。',
        '醫療：非急症先聯絡保險；急症先打 119；收據診斷書留存。',
        '返程日：15:30 後加油、還車、機場優先，不再臨時加點。'
    ];

    const dayIndex = itineraryData.map(data => `
        <div class="print-index-item">
            <strong>Day ${escapeHtml(data.day)}</strong>
            <span>${escapeHtml(data.date)}｜${escapeHtml(stripTitlePrefix(data.title))}</span>
        </div>`).join('');

    let html = `
        <section class="print-cover">
            <div class="print-cover-title">
                <h1>九州親子大冒險｜紙本攻略</h1>
                <p>雙家庭自駕・離線備援・Day 1–8</p>
            </div>
            <div class="print-cover-grid">
                <section class="print-card print-card-primary">
                    <h2>全程鐵則</h2>
                    <div class="print-check-grid">${compactRows(globalEssentials)}</div>
                </section>
                <section class="print-card">
                    <h2>每日索引</h2>
                    <div class="print-index-grid">${dayIndex}</div>
                </section>
            </div>
            <p class="print-cover-note">閱讀方式：每天從新頁開始；先看「今天只要守住什麼」，再看防呆清單與時間軸。導航與官網連結已從紙本版移除，避免正文干擾。</p>
        </section>`;

    itineraryData.forEach(data => {
        const focus = dayFocusDB[data.day] || null;
        const regularSections = (data.sections || []).filter(sec => sec.type !== 'rain' && sec.time !== '彈性方案');
        const flexSections = (data.sections || []).filter(sec => sec.type === 'rain' || sec.time === '彈性方案');

        const focusHtml = focus ? `<section class="print-focus-grid">
            <div class="print-focus-card primary"><span>今天只要守住</span><strong>${plain(focus.mission)}</strong></div>
            <div class="print-focus-card"><span>成功標準</span><strong>${plain(focus.win)}</strong></div>
            <div class="print-focus-card"><span>硬切時間</span><strong>${plain(focus.hardCut)}</strong></div>
            <div class="print-focus-card"><span>最大風險</span><strong>${plain(focus.risk)}</strong></div>
        </section>` : '';

        const checklistHtml = (data.checklist || []).length ? `
            <section class="print-block print-checklist-block">
                <h3>出發前防呆清單</h3>
                <div class="print-check-grid">${compactRows(data.checklist || [])}</div>
            </section>` : '';

        const sectionHtml = regularSections.map(sec => {
            const cleanContent = plain(sec.content);
            const cleanTip = sec.deepTip ? plain(sec.deepTip) : '';
            const time = sec.time ? escapeHtml(normalizePrintText(sec.time)) : '彈性';
            return `<section class="print-step">
                <div class="print-step-time">${time}</div>
                <div class="print-step-main">
                    <h4>${inline(sec.title)}</h4>
                    <p>${cleanContent}</p>
                    ${cleanTip ? `<div class="print-tip"><span>補充</span>${cleanTip}</div>` : ''}
                </div>
            </section>`;
        }).join('');

        const flexHtml = flexSections.length ? `<section class="print-block print-flex-block">
            <h3>彈性／備案</h3>
            ${flexSections.map(sec => `<div class="print-flex-item"><strong>${inline(sec.title)}</strong><span>${plain(sec.content)}</span></div>`).join('')}
        </section>` : '';

        html += `<article class="print-day">
            <header class="print-day-header">
                <div class="print-day-kicker">${escapeHtml(data.date)}・${inline(data.weather || '')}</div>
                <div class="print-day-title-row">
                    <h2>Day ${escapeHtml(data.day)}</h2>
                    <strong>${escapeHtml(stripTitlePrefix(data.title))}</strong>
                </div>
                <div class="print-meta-grid">
                    <div><span>動線</span>${inline(data.route)}</div>
                    <div><span>住宿</span>${inline(data.hotel)}</div>
                </div>
                ${focusHtml}
            </header>
            ${checklistHtml}
            <section class="print-block print-timeline">
                <h3>當日時間軸</h3>
                ${sectionHtml}
            </section>
            ${flexHtml}
            ${data.tips ? `<section class="print-warning"><strong>注意事項</strong>${inline(data.tips)}</section>` : ''}
        </article>`;
    });

    return html;
}
