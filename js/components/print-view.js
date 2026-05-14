// Print-friendly paper travel manual renderer.
// The browser app remains interactive; this renderer builds a dedicated A4 guide
// for print/PDF export when window.print() is invoked.

function renderPrintViewHtml() {
    const normalizePrintText = (value) => String(value || '')
        .replace(/[\x00-\x1f\x7f]/g, ' ')
        .replace(/[\uFE0E\uFE0F]/g, '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([，。；：、！？])\s*/g, '$1')
        .trim();

    const removePrintActionBlocks = (html) => String(html || '')
        .replace(/<button[\s\S]*?<\/button>/gi, '')
        .replace(/<div\s+class=["'][^"']*(?:flex|gap-2|mt-3)[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '')
        .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1');

    const plainText = (value) => normalizePrintText(htmlToPlainText(removePrintActionBlocks(value)));
    const plain = (value) => escapeHtml(plainText(value));
    const inline = (value) => plain(value).replace(/\n+/g, ' / ');
    const stripTitlePrefix = (value) => plainText(value).replace(/^Day\s*\d+\s*[｜|]\s*/i, '').trim();
    const splitText = (value) => String(value || '')
        .split(/[｜|]/)
        .map(part => normalizePrintText(part))
        .filter(Boolean);

    const compactRows = (items) => (items || [])
        .map(item => `<div class="print-check-row"><span class="print-box">□</span><span>${escapeHtml(normalizePrintText(item))}</span></div>`)
        .join('');

    const simpleList = (items) => `<ul class="print-simple-list">${(items || [])
        .map(item => `<li>${escapeHtml(normalizePrintText(item))}</li>`)
        .join('')}</ul>`;

    const miniStat = (label, value) => `<div class="print-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;

    const getParkingQueries = (mapQuery) => {
        const raw = parkingLookup && parkingLookup[mapQuery];
        if (!raw) return [];
        return Array.isArray(raw) ? raw : [raw];
    };

    const getParkingLabel = (query) => normalizePrintText((parkingLabelLookup && parkingLabelLookup[query]) || query);

    const allRegularSections = itineraryData.flatMap(day => (day.sections || [])
        .filter(sec => sec.type !== 'rain' && sec.time !== '彈性方案')
        .map(sec => ({ day: day.day, date: day.date, ...sec })));

    const uniqueParkingRows = [];
    const seenParking = new Set();
    itineraryData.forEach(day => {
        (day.sections || []).forEach(sec => {
            const queries = getParkingQueries(sec.mapQuery);
            queries.forEach(query => {
                const key = `${day.day}|${query}`;
                if (seenParking.has(key)) return;
                seenParking.add(key);
                uniqueParkingRows.push({
                    day: day.day,
                    scene: stripTitlePrefix(sec.title || sec.mapQuery || ''),
                    query: normalizePrintText(query),
                    label: getParkingLabel(query)
                });
            });
        });
    });

    const getTopDailyGourmetItems = (day, limit = 5) => {
        const source = dayGourmetDB && dayGourmetDB[String(day)];
        if (!source || !Array.isArray(source.categories)) return [];
        const items = [];
        source.categories.forEach(category => {
            (category.items || []).forEach(item => {
                items.push({
                    category: normalizePrintText(category.title),
                    name: normalizePrintText(item.name),
                    rank: normalizePrintText(item.rank || ''),
                    meal: normalizePrintText(item.meal || ''),
                    area: normalizePrintText(item.area || ''),
                    order: normalizePrintText(item.order || item.must || ''),
                    note: normalizePrintText(item.note || item.fit || ''),
                    caution: normalizePrintText(item.caution || '')
                });
            });
        });
        const score = { S: 5, 'S-': 4, A: 3, B: 2, C: 1, X: 0 };
        return items
            .sort((a, b) => ((b.paperPriority || score[b.rank] || 0) - (a.paperPriority || score[a.rank] || 0)))
            .slice(0, limit);
    };

    const backupRankScore = { S: 90, 'S-': 85, A: 70, 'B+': 62, B: 55, 'B-': 48, C: 35, X: 5 };

    const parseBackupEntry = (entry) => {
        if (entry && typeof entry === 'object') {
            const name = normalizePrintText(entry.title || entry.name || '');
            const descParts = [entry.desc, entry.condition ? `條件：${entry.condition}` : '', entry.decision ? `決策：${entry.decision}` : ''];
            return {
                name,
                rank: normalizePrintText(entry.rank || 'B'),
                desc: normalizePrintText(descParts.filter(Boolean).join('；')),
                includeInPaper: entry.includeInPaper !== false,
                score: backupRankScore[entry.rank] || 0
            };
        }
        const parts = splitText(entry);
        const name = normalizePrintText((parts[0] || '').replace(/^⭐\s*/, ''));
        const starred = /^⭐/.test(String(entry || ''));
        return { name, rank: starred ? 'S' : 'B', desc: normalizePrintText(parts.slice(1).join('｜')), includeInPaper: true, score: starred ? 90 : 55 };
    };

    const topBackupItems = (region, category, limit = 8) => {
        const list = backupDB && backupDB[region] && backupDB[region][category];
        return (list || [])
            .map(parseBackupEntry)
            .filter(item => item.name && item.includeInPaper)
            .sort((a, b) => (b.score || 0) - (a.score || 0))
            .slice(0, limit);
    };

    const topGourmetBackupItems = (region, limit = 12) => {
        const source = (gourmetBackupDB && gourmetBackupDB[region]) || [];
        const score = { S: 5, 'S-': 4, A: 3, B: 2, C: 1, X: 0 };
        return source
            .filter(item => item.includeInPaper !== false && item.rank !== 'X' && item.rank !== 'C')
            .slice()
            .sort((a, b) => ((b.paperPriority || score[b.rank] || 0) - (a.paperPriority || score[a.rank] || 0)))
            .slice(0, limit)
            .map(item => ({
                name: normalizePrintText(item.name),
                rank: normalizePrintText(item.rank),
                category: normalizePrintText(item.category),
                type: normalizePrintText(item.type),
                bestDay: normalizePrintText(item.bestDay),
                must: normalizePrintText(item.must),
                strategy: normalizePrintText(item.strategy || item.why)
            }));
    };

    const dailyTOC = itineraryData.map(data => `
        <tr>
            <td>Day ${escapeHtml(data.day)}</td>
            <td>${escapeHtml(data.date)}</td>
            <td>${escapeHtml(stripTitlePrefix(data.title))}</td>
            <td>${inline(data.hotel)}</td>
        </tr>`).join('');

    const globalEssentials = [
        'VJW：每位旅客完成入境審查與海關申報；QR code 截圖＋列印，紙本放護照夾。',
        '證件：護照、台灣駕照正本、日文譯本、租車單、信用卡、保險資料集中管理並分車備份。',
        '禁帶：肉乾、香腸、含肉泡麵、水果、生鮮蔬菜、未吃完機上餐不要入境。',
        '藥品：常備藥保留原包裝；處方藥留處方箋或診斷證明影本。',
        '兩車：每日出發前同步下一站導航、前導/壓車、LINE 群組、迷路集合點。',
        '取車：車身、輪框、油量、ETC、兒童座椅、保險文件全部拍照。',
        '醫療：非急症先聯絡保險或 JNTO；急症優先 119；收據與診斷書完整留存。',
        '返程：15:30 後進入機場優先模式；加油、還車、托運、伴手禮，不再臨時加點。'
    ];

    const preDepartureChecks = [
        '護照效期與全員機票資料確認。',
        'Visit Japan Web 每人 QR code：手機截圖、雲端備份、紙本列印。',
        '第一晚飯店名稱、地址、電話已可離線查閱。',
        '台灣駕照正本＋日文譯本＋租車訂單＋信用卡。',
        '旅平險、旅遊不便險、海外醫療聯絡方式截圖。',
        'eSIM / 漫遊方案完成，兩台車至少各一支手機可上網導航。',
        '兒童常備藥、退燒藥、暈車藥、OK 繃、體溫計。',
        '車內垃圾袋、濕紙巾、水、點心、薄外套、雨具。',
        '每日飯店、停車場、主要景點已建立 Google Maps 清單。',
        '所有預約、門票、訂位、餐廳營業時間已在出發前最後一次確認。'
    ];

    const emergencyCards = [
        ['消防／救護', '119', '急病、受傷、火災。先確保位置資訊；需要救護車時直接撥打。'],
        ['警察', '110', '事故、竊盜、糾紛、危險狀況。交通事故要留下報案紀錄。'],
        ['海上事件', '118', '海邊、船舶、落海、海上事故。天草海邊行程可記。'],
        ['JNTO Japan Visitor Hotline', '050-3816-2787', '24 小時，支援英文／中文／韓文；事故、疾病、災害、旅遊協助。'],
        ['海外撥打 JNTO', '+81-50-3816-2787', '用台灣門號或網路電話從海外撥打時使用。'],
        ['保險公司海外急難救助', '出發前填寫', '把保單號碼、理賠電話、家屬聯絡人寫在紙本空白處。']
    ];

    const manualUseRules = [
        '紙本只放「決策與備援」：導航按手機，紙本用來防呆、分工、斷網備查。',
        '每天先看一頁首頁四格：今天只要守住、成功標準、硬切時間、最大風險。',
        '行程不追求全收集；任何加點都不得犧牲還車、入住、孩子睡眠與駕駛安全。',
        '兩車一旦失聯，不路邊臨停；先進便利商店、道之驛、停車場後再重整。'
    ];

    const coverStats = [
        miniStat('天數', '8 天'),
        miniStat('每日時間軸', `${allRegularSections.length} 段`),
        miniStat('防呆清單', `${itineraryData.reduce((sum, day) => sum + (day.checklist || []).length, 0)} 項`),
        miniStat('停車索引', `${uniqueParkingRows.length} 筆`)
    ].join('');

    const sectionDivider = (title, subtitle) => `
        <section class="print-section-divider print-page">
            <span>SECTION</span>
            <h2>${escapeHtml(title)}</h2>
            ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ''}
        </section>`;

    let html = `
        <div class="print-page-footer">九州親子自駕紙本旅遊手冊｜Day 1-8｜列印前請確認最新營業時間、天候與道路管制</div>
        <section class="print-cover print-page">
            <div class="print-cover-title">
                <p class="print-eyebrow">OFFLINE FAMILY ROAD TRIP MANUAL</p>
                <h1>九州親子大冒險｜紙本攻略<br>正式紙本旅遊手冊</h1>
                <p>雙家庭自駕・熊本 / 阿蘇 / 別府 / 由布院 / 上天草・Day 1-8</p>
            </div>
            <div class="print-cover-stats">${coverStats}</div>
            <div class="print-cover-grid">
                <section class="print-card print-card-primary">
                    <h2>全程鐵則</h2>
                    <div class="print-check-grid one-col">${compactRows(globalEssentials)}</div>
                </section>
                <section class="print-card">
                    <h2>手冊使用方式</h2>
                    ${simpleList(manualUseRules)}
                    <div class="print-fill-box">
                        <strong>保險公司 / 保單號碼 / 緊急聯絡人</strong>
                        <div></div><div></div><div></div>
                    </div>
                </section>
            </div>
        </section>

        ${sectionDivider('目錄與行前準備', '先完成文件、保險、通訊、租車與兩車 SOP，再看每日行程。')}

        <section class="print-manual-page print-page">
            <h2>旅程總覽</h2>
            <table class="print-table print-toc-table">
                <thead><tr><th>日</th><th>日期</th><th>主題</th><th>住宿</th></tr></thead>
                <tbody>${dailyTOC}</tbody>
            </table>
            <div class="print-two-col">
                <section class="print-card">
                    <h3>出發前總檢查</h3>
                    <div class="print-check-grid one-col">${compactRows(preDepartureChecks)}</div>
                </section>
                <section class="print-card print-card-warning">
                    <h3>緊急資訊</h3>
                    <div class="print-emergency-grid">
                        ${emergencyCards.map(([label, number, note]) => `
                            <div class="print-emergency-card">
                                <span>${escapeHtml(label)}</span>
                                <strong>${escapeHtml(number)}</strong>
                                <p>${escapeHtml(note)}</p>
                            </div>`).join('')}
                    </div>
                </section>
            </div>
            <section class="print-card print-vjw-card">
                <h3>入境 / 保險 / 醫療紙本備援</h3>
                <div class="print-compact-grid">
                    <div><strong>VJW</strong><p>官方服務用於日本抵達程序的入境審查、海關申報與免稅購物服務。紙本手冊只作備援，實際畫面以官方系統為準。</p></div>
                    <div><strong>TOKIO OMOTENASHI / 台灣保險</strong><p>日本落地後若加保當地方案，逐人投保並截圖完成頁；台灣端保單仍保留醫療與不便險主體。</p></div>
                    <div><strong>醫療理賠</strong><p>非急症先聯絡保險或 JNTO；就醫後保留收據、診斷書、藥單、刷卡紀錄與醫院名片。</p></div>
                </div>
            </section>
        </section>

        ${sectionDivider('每日攻略', '每一天從新頁開始：先看重點四格，再看清單、時間軸、用餐與彈性方案。')}`;

    itineraryData.forEach(data => {
        const focus = dayFocusDB[data.day] || null;
        const regularSections = (data.sections || []).filter(sec => sec.type !== 'rain' && sec.time !== '彈性方案');
        const flexSections = (data.sections || []).filter(sec => sec.type === 'rain' || sec.time === '彈性方案');
        const dailyMeals = getTopDailyGourmetItems(data.day, 5);

        const focusHtml = focus ? `<section class="print-focus-grid">
            <div class="print-focus-card primary"><span>今天只要守住</span><strong>${plain(focus.mission)}</strong></div>
            <div class="print-focus-card"><span>成功標準</span><strong>${plain(focus.win)}</strong></div>
            <div class="print-focus-card"><span>硬切時間</span><strong>${plain(focus.hardCut)}</strong></div>
            <div class="print-focus-card"><span>最大風險</span><strong>${plain(focus.risk)}</strong></div>
        </section>` : '';

        const priorityHtml = focus && Array.isArray(focus.priority) ? `
            <section class="print-block print-priority-block">
                <h3>優先順序 / 現場決策</h3>
                <div class="print-compact-grid">
                    <div>${simpleList(focus.priority)}</div>
                    <div><strong>決策原則</strong><p>${plain(focus.decision)}</p></div>
                </div>
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
            const parkingQueries = getParkingQueries(sec.mapQuery);
            const parkingText = parkingQueries.length
                ? `<div class="print-mini-note"><span>停車/導航搜尋</span>${parkingQueries.map(q => `${getParkingLabel(q)}：${normalizePrintText(q)}`).map(escapeHtml).join('；')}</div>`
                : '';
            return `<section class="print-step">
                <div class="print-step-time">${time}</div>
                <div class="print-step-main">
                    <h4>${inline(sec.title)}</h4>
                    <p>${cleanContent}</p>
                    ${parkingText}
                    ${cleanTip ? `<div class="print-tip"><span>補充</span>${cleanTip}</div>` : ''}
                </div>
            </section>`;
        }).join('');

        const mealHtml = dailyMeals.length ? `<section class="print-block print-meal-block">
            <h3>今日用餐候選</h3>
            <table class="print-table print-meal-table">
                <thead><tr><th>級</th><th>店名</th><th>區域/餐別</th><th>點餐與策略</th></tr></thead>
                <tbody>${dailyMeals.map(item => `
                    <tr>
                        <td>${escapeHtml(item.rank || '-')}</td>
                        <td><strong>${escapeHtml(item.name)}</strong><br><span>${escapeHtml(item.category)}</span></td>
                        <td>${escapeHtml([item.area, item.meal].filter(Boolean).join(' / '))}</td>
                        <td>${escapeHtml([item.order, item.note, item.caution].filter(Boolean).join('；'))}</td>
                    </tr>`).join('')}</tbody>
            </table>
        </section>` : '';

        const flexHtml = flexSections.length ? `<section class="print-block print-flex-block">
            <h3>彈性 / 備案</h3>
            ${flexSections.map(sec => `<div class="print-flex-item"><strong>${inline(sec.title)}</strong><span>${plain(sec.content)}</span></div>`).join('')}
        </section>` : '';

        html += `<article class="print-day print-page">
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
            ${priorityHtml}
            ${checklistHtml}
            <section class="print-block print-timeline">
                <h3>當日時間軸</h3>
                ${sectionHtml}
            </section>
            ${mealHtml}
            ${flexHtml}
            ${data.tips ? `<section class="print-warning"><strong>注意事項</strong>${inline(data.tips)}</section>` : ''}
        </article>`;
    });

    const parkingRows = uniqueParkingRows.map(row => `
        <tr>
            <td>Day ${escapeHtml(row.day)}</td>
            <td>${escapeHtml(row.scene)}</td>
            <td>${escapeHtml(row.label)}</td>
            <td>${escapeHtml(row.query)}</td>
        </tr>`).join('');

    const backupListBlock = (region, category, label, limit) => `
        <section class="print-card">
            <h3>${escapeHtml(label)}</h3>
            ${topBackupItems(region, category, limit).map(item => `
                <div class="print-backup-line"><strong>${escapeHtml(item.rank)}｜${escapeHtml(item.name)}</strong><p>${escapeHtml(item.desc)}</p></div>`).join('')}
        </section>`;

    const backupSection = (region, title) => `
        <section class="print-manual-page print-page">
            <h2>${escapeHtml(title)}決策型備案索引</h2>
            <p class="print-section-lead">紙本只列可用於現場決策的備案；完整資料請看網頁彈藥庫。景點 S=主線/條件主線；美食 S=主線餐，A=高優先，B=保底救場，C/X 不主動排。</p>
            <div class="print-two-col">
                ${backupListBlock(region, 'sight', '景點決策', 10)}
                ${backupListBlock(region, 'shop', '採買 / 補給決策', 8)}
            </div>
            <section class="print-card print-gourmet-index">
                <h3>${escapeHtml(title)}吃什麼決策精選</h3>
                <div class="print-two-col">
                    ${topGourmetBackupItems(region, 4).map(item => `
                        <div class="print-backup-line"><strong>${escapeHtml(item.rank)}｜${escapeHtml(item.name)}</strong><p>${escapeHtml([item.category, item.type, item.bestDay, item.must, item.strategy].filter(Boolean).join('；'))}</p></div>`).join('')}
                </div>
            </section>
        </section>`;

    html += `
        ${sectionDivider('停車、導航與備案', '手機負責導航，紙本負責斷網、分車、臨時改行程時快速查詢。')}

        <section class="print-manual-page print-page">
            <h2>每日停車 / 導航搜尋索引</h2>
            <p class="print-section-lead">下表不是導航連結，而是紙本備援用的 Google Maps 搜尋字。兩車可分別輸入同一組文字，避免只靠前導車。</p>
            <table class="print-table print-parking-table">
                <thead><tr><th>日</th><th>場景</th><th>紙本標籤</th><th>Google Maps 搜尋字</th></tr></thead>
                <tbody>${parkingRows}</tbody>
            </table>
        </section>

        ${backupSection('oita', '大分 / 別府 / 由布院')}
        ${backupSection('kumamoto', '熊本 / 阿蘇 / 上天草')}

        <section class="print-manual-page print-page print-final-page">
            <h2>最後一頁：出門前 10 分鐘檢查</h2>
            <div class="print-two-col">
                <section class="print-card print-card-primary">
                    <h3>今天出門前</h3>
                    <div class="print-check-grid one-col">${compactRows([
                        '護照、駕照、譯本、信用卡、現金、飯店鑰匙。',
                        '兩台車都已輸入下一站與停車場，不只輸入景點名稱。',
                        '小孩上廁所、水壺補滿、車上點心與濕紙巾在前座可拿。',
                        '手機電量、行動電源、eSIM/漫遊、LINE 群組正常。',
                        '今日硬切時間已講給兩位駕駛與另一位大人知道。',
                        '晚餐 Plan A / Plan B 已決定，避免傍晚臨時搜尋。'
                    ])}</div>
                </section>
                <section class="print-card print-card-warning">
                    <h3>當天失控時的縮減規則</h3>
                    ${simpleList([
                        '先砍購物，再砍非主菜景點，不砍吃飯與睡眠。',
                        '下雨時優先改室內、商場、飯店休息，不硬跑山路與海邊。',
                        '孩子累、駕駛累、天色晚，任何一項成立就不加點。',
                        '返程日 15:30 後不新增景點；只處理加油、還車、機場。'
                    ])}
                    <div class="print-fill-box large">
                        <strong>臨時記錄</strong>
                        <div></div><div></div><div></div><div></div><div></div>
                    </div>
                </section>
            </div>
        </section>`;

    return html;
}
