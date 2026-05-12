// Print-friendly itinerary renderer.

function renderPrintViewHtml() {
    const plain = (value) => escapeHtml(htmlToPlainText(value));
    const cleanInline = (value) => escapeHtml(htmlToPlainText(value)).replace(/\n+/g, ' / ');
    const introRows = [
        'Visit Japan Web：每位旅客都已完成入境審查＋海關申報，並各自截圖 QR code。',
        'VJW 紙本備份：每位旅客 QR code 已列印，放入護照夾。',
        '日文欄位對照：若看到「本人の情報、旅券番号、入国・帰国の予定、入国審査及び税関申告、携帯品・別送品申告」等日文，回首頁行前準備中心查表。',
        '第一晚飯店：地址、電話、訂房確認信已存手機離線備份。',
        '台灣旅平險/旅遊不便險：已涵蓋 5/29 出發到 6/5 回台全程。',
        'TOKIO OMOTENASHI POLICY：抵達日本後若要加買，到第一晚飯店連 Wi-Fi 後逐人投保；每完成一人就截圖完成頁與確認 Email。',
        'TOKIO 欄位對照：重點核對 Schedule、Subscriber/Policyholder、Insured、Important Matters、Credit Card、Application Completion。',
        '手機相簿：護照、VJW QR、保險、租車、飯店、緊急聯絡已分資料夾備份。',
    ];
    const departureRows = [
        'S級文件：護照、VJW QR、回程機票、第一晚住宿、旅平險、租車訂單已備份。',
        '自駕文件：每位駕駛都有台灣駕照正本＋日文譯本＋護照；主約人信用卡在身上。',
        '取車：車身四面、輪框、後照鏡、行李箱、油量、里程、ETC、兒童座椅拍照。',
        '兒童座椅：6歲以下必備；兩台車各自確認數量、固定方式與座位配置。',
        '禁帶品：不帶肉鬆、肉乾、香腸、火腿、含肉泡麵、肉包、水果、生鮮蔬菜；機上餐不要帶入境。',
        '藥品：常備藥原包裝少量；處方藥帶處方箋或診斷證明；管制/大量藥品出發前查日本規定。',
        '訂位追蹤：Harmonyland、韓國苑、African Safari、B-SPEAK、Sea Donut體驗、天草午餐已確認或標為放棄。',
        '飯店：兒童同住、停車、早餐、取消期限、Check-in/out、入浴稅已核對。',
        '兩車SOP：前導/壓車、LINE群組、迷路集合、加油半桶原則、每日下一站導航已說好。',
        '醫療：非急症先聯絡保險協助；急症先打119；就醫保留收據、診斷書與藥袋。'
    ];
    const checkRows = (items) => items.map(item => `<div class="print-check-row">□ ${escapeHtml(item)}</div>`).join('');

    let html = `
        <div class="print-cover-title text-center">
            <h1>九州親子大冒險 實戰攻略本</h1>
            <p>雙家庭（2大2小）｜離線紙本保命用｜Day 1 - Day 8 完整版</p>
        </div>
        <div class="print-preview-note">列印預覽提示：這是第 1 頁總檢查；後續頁面包含 Day 1 - Day 8 每日攻略。Chrome / Edge 預覽左側需向下捲動才會看到後續頁面。</div>
        <div class="print-intro-grid">
            <section class="print-card">
                <h2>🧳 行前準備中心：VJW＋TOKIO 保險</h2>
                ${checkRows(introRows)}
                <p class="mt-2">提醒：VJW 是入境/海關申報工具；TOKIO 是日本境內醫療補強，不是 VJW 必填，也不是完整旅平險替代品。</p>
            </section>
            <section class="print-card">
                <h2>📋 出發前總檢查：文件・租車・訂位・禁帶品</h2>
                ${checkRows(departureRows)}
            </section>
        </div>`;

    itineraryData.forEach(data => {
        const sectionsHtml = (data.sections || []).map(sec => {
            const cleanContent = plain(sec.content).replace(/\n+/g, '<br>');
            const cleanTitle = cleanInline(sec.title);
            const cleanTip = sec.deepTip ? plain(sec.deepTip).replace(/\n+/g, '<br>') : '';
            const timeBadge = sec.time ? `<span class="print-time">${escapeHtml(sec.time)}</span>` : '';
            return `<section class="print-section">
                <h4>${timeBadge}${cleanTitle}</h4>
                <div class="print-section-body">${cleanContent}</div>
                ${cleanTip ? `<div class="print-tip">💡 ${cleanTip}</div>` : ''}
            </section>`;
        }).join('');

        const checklistHtml = (data.checklist || []).length ? `
            <div class="print-checklist">
                <div class="print-checklist-heading">📝 出發前防呆清單</div>
                ${(data.checklist || []).map(item => `<div class="print-check-item"><span class="print-checkbox"></span><span>${cleanInline(item)}</span></div>`).join('')}
            </div>` : '';

        html += `<article class="print-day">
            <div class="print-day-header">
                <div class="print-day-title-row">
                    <h2>Day ${escapeHtml(data.day)}</h2>
                    <span>${escapeHtml(data.date)} - ${cleanInline(data.title)}</span>
                </div>
                <div class="print-summary">
                    <div>🚗 動線：${cleanInline(data.route)}</div>
                    <div>🏨 住宿：${cleanInline(data.hotel)}</div>
                </div>
                ${checklistHtml}
            </div>
            ${sectionsHtml}
            ${data.tips ? `<div class="print-warning">⚠️ 注意事項：${cleanInline(data.tips)}</div>` : ''}
        </article>`;
    });

    return html;
}
