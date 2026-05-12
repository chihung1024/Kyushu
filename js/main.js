// 九州親子大冒險 - app initialization, routing, modals, printing, and interactions

/* #region ⚙️ 2. 核心邏輯區 (Logic) - Hash Routing 與 DOM Pre-rendering */
        (() => {
            let currentDay = 1;
            let currentBackupRegion = 'oita';
            let currentBackupCategory = 'sight';

            const hash = window.location.hash;
            if (hash && hash.startsWith('#day')) {
                const parsedDay = parseInt(hash.replace('#day', ''));
                if (!isNaN(parsedDay) && itineraryData.some(d => d.day === parsedDay)) {
                    currentDay = parsedDay;
                }
            }

            function initTabs() {
                const container = document.getElementById('tabs-container');
                if (!container) return;
                container.innerHTML = '';
                container.setAttribute('role', 'tablist');
                container.setAttribute('aria-label', '每日行程切換');
                itineraryData.forEach((data) => {
                    const btn = document.createElement('button');
                    btn.id = `tab-btn-${data.day}`;
                    btn.type = 'button';
                    btn.setAttribute('role', 'tab');
                    btn.setAttribute('aria-controls', `day-content-${data.day}`);
                    btn.textContent = `Day ${data.day}`;
                    btn.onclick = () => window.selectDay(data.day);
                    container.appendChild(btn);
                });
                updateTabsUI();
            }

            function updateTabsUI() {
                itineraryData.forEach((data) => {
                    const btn = document.getElementById(`tab-btn-${data.day}`);
                    if (!btn) return;
                    const isActive = data.day === currentDay;
                    btn.className = `flex-shrink-0 px-5 py-3 md:py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isActive ? 'tab-active' : 'tab-inactive hover:bg-kawaii-light-pink hover:text-white hover:border-kawaii-light-pink'}`;
                    btn.setAttribute('aria-selected', String(isActive));
                    btn.setAttribute('tabindex', isActive ? '0' : '-1');
                });
            }

            function getDayDiagnostics(data) {
                const sections = data.sections || [];
                const mainStops = sections.filter(sec => sec.type !== 'rain' && sec.time !== '彈性方案').length;
                const flexibleStops = sections.filter(sec => sec.type === 'rain' || sec.time === '彈性方案').length;
                const checklistItems = (data.checklist || []).length;
                const mapLinks = sections.filter(sec => sec.mapQuery || sec.parkingQuery).length + (data.mapLink ? 1 : 0);

                return {
                    mainStops,
                    flexibleStops,
                    checklistItems,
                    mapLinks,
                };
            }

            function renderDayDiagnostics(data, focus) {
                const diagnostics = getDayDiagnostics(data);
                const hardCut = focus && focus.hardCut ? String(focus.hardCut).trim() : '';
                const chips = [
                    { cls: 'must', label: '主要停靠', value: diagnostics.mainStops },
                    { cls: 'flex', label: '彈性方案', value: diagnostics.flexibleStops },
                    { cls: 'check', label: '防呆清單', value: diagnostics.checklistItems },
                    { cls: 'map', label: '導航連結', value: diagnostics.mapLinks },
                ];

                return `
                    <div class="day-diagnostics-panel" aria-label="Day ${data.day} 行程概覽">
                        <div class="day-diagnostic-title"><span>🔎</span> 今日快速檢查</div>
                        <div class="day-diagnostic-chips">
                            ${chips.map(chip => `
                                <div class="day-diagnostic-chip ${chip.cls}">
                                    <span>${chip.label}</span>
                                    <strong>${chip.value}</strong>
                                </div>`).join('')}
                        </div>
                        ${hardCut ? `<div class="day-diagnostic-cut"><span>時間窗提醒</span><strong>${hardCut}</strong></div>` : ''}
                    </div>`;
            }

            function buildDayContent(data) {
                    let sectionsHtml = '';
                    data.sections.forEach(sec => {
                        if (sec.type === 'rain' || sec.time === '彈性方案') return;
                        const iconBg = sec.type === 'rain' ? 'bg-cyan-100 text-cyan-600' : 'bg-white';
                        const deepTipText = String(sec.deepTip || '').replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
                        let deepTipHtml = deepTipText ? `
                            <details class="detail-note mt-3 bg-amber-50/70 border border-amber-200 rounded-xl shadow-sm text-gray-900 overflow-hidden">
                                <summary class="cursor-pointer select-none px-4 py-3 text-amber-800 font-black flex items-center gap-2"><span>💡</span> 補充資訊</summary>
                                <div class="px-4 pb-4 pt-1 leading-relaxed text-sm sm:text-base">${sec.deepTip}</div>
                            </details>` : '';

                        const titleHtml = sec.mapQuery 
                            ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sec.mapQuery)}" target="_blank" rel="noopener noreferrer" class="text-gray-900 hover:text-blue-600 underline decoration-gray-300 underline-offset-4 transition-colors cursor-pointer p-1 -m-1">${sec.title}</a>`
                            : `<span class="text-gray-900">${sec.title}</span>`;
                        
                        const timeBadge = sec.time ? `<span class="time-badge bg-gray-800 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm inline-block shrink-0">${sec.time}</span>` : '';
                        const parkingQuery = sec.parkingQuery || parkingLookup[sec.mapQuery] || null;
                        const parkingLinkHtml = parkingQuery ? `<div class="mt-3 flex flex-wrap gap-2">${renderParkingButtons(parkingQuery)}</div>` : '';

                        sectionsHtml += `
                            <div class="timeline-item relative pl-7 pb-8 border-l-2 border-kawaii-blue border-dashed ml-3 last:border-transparent last:pb-0">
                                <div class="timeline-dot flex items-center justify-center text-[10px] ${iconBg}">${icons[sec.type] || '📌'}</div>
                                <div class="${bgColors[sec.type] || 'bg-gray-50 border-gray-200'} timeline-section-card timeline-card border-2 rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-gray-800">
                                    <div class="flex flex-wrap items-center gap-2 mb-3">
                                        ${timeBadge}
                                        <h4 class="timeline-section-title flex-1 min-w-[200px] flex items-center gap-2">${titleHtml}</h4>
                                    </div>
                                    <div class="timeline-section-content">${sec.content}</div>
                                    ${parkingLinkHtml}
                                    ${deepTipHtml}
                                </div>
                            </div>`;
                    });

                    let tipsHtml = data.tips ? `
                        <div class="relative pl-7 pt-6 ml-3">
                            <div class="timeline-warning-dot mt-6">⚠️</div>
                            <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 text-gray-900">
                                <h4 class="font-bold text-red-800 text-sm flex items-center gap-2 mb-1">行程提醒</h4>
                                <div class="text-sm font-medium text-red-800 leading-relaxed">${data.tips}</div>
                            </div>
                        </div>` : '';

                    const focus = dayFocusDB[data.day] || null;
                    let focusHtml = '';
                    if (focus) {
                        focusHtml = `
                        <div class="mb-6 daily-focus-panel rounded-[2rem] p-4 sm:p-5 relative overflow-hidden">
                            <div class="absolute -right-4 -top-4 text-7xl opacity-10 pointer-events-none">🧭</div>
                            <div class="flex flex-col gap-3 relative z-10">
                                <div class="flex flex-wrap items-center gap-2">
                                    <span class="focus-chip bg-gray-900 text-white px-3 py-1.5 rounded-full shadow-sm">今日行程重點</span>
                                    <span class="focus-chip bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-full shadow-sm">時間窗與備選</span>
                                </div>
                                <div class="focus-mission">${focus.mission}</div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-1">
                                    <div class="focus-info-card bg-green-50 border-2 border-green-200 rounded-2xl p-3">
                                        <div class="focus-info-title text-green-700">✅ 今天怎樣算成功</div>
                                        <div class="focus-info-body text-green-900">${focus.win}</div>
                                    </div>
                                    <div class="focus-info-card bg-red-50 border-2 border-red-200 rounded-2xl p-3">
                                        <div class="focus-info-title text-red-700">⏱️ 彈性時間窗</div>
                                        <div class="focus-info-body text-red-900">${focus.hardCut}</div>
                                    </div>
                                    <div class="focus-info-card bg-blue-50 border-2 border-blue-200 rounded-2xl p-3">
                                        <div class="focus-info-title text-blue-700">🧩 現場判斷</div>
                                        <div class="focus-info-body text-blue-900">${focus.decision}</div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
                                    <div class="bg-white border-2 border-amber-200 rounded-2xl p-3">
                                        <div class="text-[11px] font-black text-amber-700 mb-2">🎯 現場優先序</div>
                                        <div class="flex flex-wrap gap-2">
                                            ${(focus.priority || []).map(item => `<span class="priority-pill text-amber-900 border px-2.5 py-1 rounded-lg">${item}</span>`).join('')}
                                        </div>
                                    </div>
                                    <div class="bg-white border-2 border-gray-300 rounded-2xl p-3">
                                        <div class="text-[11px] font-black text-gray-700 mb-1">⚠️ 主要風險</div>
                                        <div class="focus-info-body text-gray-900">${focus.risk}</div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }

                    let checklistAndHighlightsHtml = '';
                    const hasChecklist = data.checklist && data.checklist.length > 0;

                    if (hasChecklist) {
                        checklistAndHighlightsHtml = `
                        <div class="mb-6">
                            <div class="departure-checklist-card bg-white/90 backdrop-blur rounded-[2rem] p-4 sm:p-5 border-[3px] border-kawaii-light-pink shadow-sm">
                                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <h4 class="font-black flex items-center gap-2"><span>📝</span> 出發前 5 分鐘防呆清單</h4>
                                    <span class="bg-pink-50 text-pink-700 border border-pink-200 text-[11px] font-black px-3 py-1 rounded-full">勾完再上車</span>
                                </div>
                                <div class="grid grid-cols-1 gap-2 mt-3">
                                    ${data.checklist.map((item) => `
                                        <label class="departure-checklist-item flex items-start gap-3 cursor-pointer group rounded-xl border transition-colors">
                                            <input type="checkbox" class="w-6 h-6 mt-0.5 rounded border-gray-300 text-kawaii-pink focus:ring-kawaii-pink cursor-pointer shrink-0">
                                            <span class="group-hover:text-black transition-colors">${item.replace(/<[^>]*>?/gm, '')}</span>
                                        </label>`).join('')}
                                </div>
                            </div>
                        </div>`;
                    }

                    const flexibleCount = getDayDiagnostics(data).flexibleStops;
                    const dayDiagnosticsHtml = renderDayDiagnostics(data, focus);
                    const dayToolsHtml = `
                        <div class="day-tools-panel mb-5 bg-white/85 border-2 border-gray-200 rounded-2xl p-3 shadow-sm">
                            <div class="day-tools-heading text-[11px] font-black text-gray-500 tracking-wider mb-2">每日輔助資訊</div>
                            <div class="day-tools-grid flex flex-wrap gap-2">
                                ${focus ? `<button onclick="openDayInfo(${data.day}, 'focus')" class="day-tool-btn day-tool-focus inline-flex items-center gap-2 bg-gray-900 text-white text-xs md:text-sm font-black px-4 py-2.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition"><span>🧭</span> 今日行程重點</button>` : ''}
                                ${hasChecklist ? `<button onclick="openDayInfo(${data.day}, 'checklist')" class="day-tool-btn day-tool-check inline-flex items-center gap-2 bg-pink-50 text-pink-700 border-2 border-pink-200 text-xs md:text-sm font-black px-4 py-2.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition"><span>📝</span> 防呆清單</button>` : ''}
                                ${flexibleCount ? `<button onclick="openDayInfo(${data.day}, 'flex')" class="day-tool-btn day-tool-flex inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-black px-4 py-2.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition"><span>🔀</span> 彈性方案</button>` : ''}
                                ${dayGourmetDB[data.day] ? `<button onclick="openDayInfo(${data.day}, 'gourmet')" class="day-tool-btn day-tool-food inline-flex items-center gap-2 bg-orange-50 text-orange-700 border-2 border-orange-200 text-xs md:text-sm font-black px-4 py-2.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition"><span>🍽️</span> 今日美食候選</button>` : ''}
                            </div>
                        </div>`;
                    const dayDiv = document.createElement('div');
                    dayDiv.id = `day-content-${data.day}`;
                    dayDiv.className = `fade-in ${data.day === currentDay ? 'block' : 'hidden'}`;
                    dayDiv.setAttribute('role', 'tabpanel');
                    dayDiv.setAttribute('aria-labelledby', `tab-btn-${data.day}`);
                    dayDiv.setAttribute('aria-hidden', String(data.day !== currentDay));
                    
                    dayDiv.innerHTML = `
                        <div class="day-header flex flex-col mb-5">
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span class="bg-kawaii-yellow text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">${data.date}</span>
                                ${data.weather ? `<span class="bg-white border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">${data.weather}</span>` : ''}
                                ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" rel="noopener noreferrer" class="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 hover:bg-emerald-100 transition hover:scale-105 active:scale-95"><span>📍</span> 本日路線總覽</a>` : ''}
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-black text-gray-900 mt-1 tracking-tight">${data.title}</h2>
                        </div>
                        <div class="day-summary-grid grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            <div class="day-summary-card flex items-center gap-3 text-sm text-gray-900 p-4 rounded-xl border-2 shadow-sm">
                                <span class="text-2xl shrink-0">🗺️</span>
                                <div><div class="day-summary-label text-gray-500 font-bold uppercase tracking-wider mb-0.5">今日動線</div><div class="day-summary-value leading-tight">${data.route}</div></div>
                            </div>
                            <div class="day-summary-card flex items-center gap-3 text-sm text-kawaii-blue p-4 rounded-xl border-2 shadow-sm">
                                <span class="text-2xl shrink-0">🏨</span>
                                <div><div class="day-summary-label text-blue-500 font-bold uppercase tracking-wider mb-0.5">夜宿點</div><div class="day-summary-value text-blue-900 leading-tight">${data.hotel}</div></div>
                            </div>
                        </div>
                        ${dayDiagnosticsHtml}
                        ${dayToolsHtml}
                        <div class="mt-4 pt-2">${sectionsHtml}${tipsHtml}</div>
                    `;

                    return dayDiv;

            }

            function ensureDayContent(day) {
                const container = document.getElementById('itinerary-content');
                let el = document.getElementById(`day-content-${day}`);
                if (!el) {
                    const data = itineraryData.find(d => d.day === day);
                    if (!data || !container) return null;
                    el = buildDayContent(data);
                    container.appendChild(el);
                }
                return el;
            }

            function buildAllContent() {
                const container = document.getElementById('itinerary-content');
                if (!container) return;
                container.innerHTML = '';
                ensureDayContent(currentDay);
            }

            function switchDayContent(day) {
                ensureDayContent(day);
                itineraryData.forEach(data => {
                    const el = document.getElementById(`day-content-${data.day}`);
                    if (el) {
                        if (data.day === day) {
                            el.classList.remove('hidden');
                            el.classList.add('block', 'fade-in');
                            el.setAttribute('aria-hidden', 'false');
                        } else {
                            el.classList.add('hidden');
                            el.classList.remove('block', 'fade-in');
                            el.setAttribute('aria-hidden', 'true');
                        }
                    }
                });
            }

            function initPrintView() {
                const container = document.getElementById('print-container');
                let html = `<div class="text-center mb-8 border-b-4 border-gray-800 pb-4 mt-4"><h1 class="text-3xl font-black mb-2">九州親子大冒險 實戰攻略本</h1><p class="text-gray-600 font-bold">雙家庭 (2大2小) ｜ 離線紙本保命用</p></div>`;
                html += `<div class="mb-8 p-4 border-2 border-gray-800 rounded-lg break-inside-avoid"><h2 class="text-xl font-black mb-3">🧳 行前準備中心：VJW＋TOKIO 保險</h2><div class="grid grid-cols-1 gap-2 text-sm font-bold leading-relaxed"><div>□ Visit Japan Web：每位旅客都已完成入境審查＋海關申報，並各自截圖 QR code。</div><div>□ VJW 紙本備份：每位旅客 QR code 已列印，放入護照夾。</div><div>□ 日文欄位對照：若看到「本人の情報、旅券番号、入国・帰国の予定、入国審査及び税関申告、携帯品・別送品申告」等日文，回首頁行前準備中心查表。</div><div>□ 第一晚飯店：地址、電話、訂房確認信已存手機離線備份。</div><div>□ 台灣旅平險/旅遊不便險：已涵蓋 5/29 出發到 6/5 回台全程。</div><div>□ TOKIO OMOTENASHI POLICY：抵達日本後若要加買，到第一晚飯店連 Wi-Fi 後逐人投保；每完成一人就截圖完成頁與確認 Email。</div><div>□ TOKIO 欄位對照：重點核對 Schedule、Subscriber/Policyholder、Insured、Important Matters、Credit Card、Application Completion。</div><div>□ 手機相簿：護照、VJW QR、保險、租車、飯店、緊急聯絡已分資料夾備份。</div></div><p class="mt-3 text-xs text-gray-600">提醒：VJW 是入境/海關申報工具；TOKIO 是日本境內醫療補強，不是 VJW 必填，也不是完整旅平險替代品；若畫面變日文/英文，不要猜，先用欄位對照表核對。</p></div>`;
                html += `<div class="mb-8 p-4 border-2 border-gray-800 rounded-lg break-inside-avoid"><h2 class="text-xl font-black mb-3">📋 出發前總檢查：文件・租車・訂位・禁帶品</h2><div class="grid grid-cols-1 gap-2 text-sm font-bold leading-relaxed"><div>□ S級文件：護照、VJW QR、回程機票、第一晚住宿、旅平險、租車訂單已備份。</div><div>□ 自駕文件：每位駕駛都有台灣駕照正本＋日文譯本＋護照；主約人信用卡在身上。</div><div>□ 取車：車身四面、輪框、後照鏡、行李箱、油量、里程、ETC、兒童座椅拍照。</div><div>□ 兒童座椅：6歲以下必備；兩台車各自確認數量、固定方式與座位配置。</div><div>□ 禁帶品：不帶肉鬆、肉乾、香腸、火腿、含肉泡麵、肉包、水果、生鮮蔬菜；機上餐不要帶入境。</div><div>□ 藥品：常備藥原包裝少量；處方藥帶處方箋或診斷證明；管制/大量藥品出發前查日本規定。</div><div>□ 訂位追蹤：Harmonyland、韓國苑、African Safari、B-SPEAK、Sea Donut體驗、天草午餐已確認或標為放棄。</div><div>□ 飯店：兒童同住、停車、早餐、取消期限、Check-in/out、入浴稅已核對。</div><div>□ 兩車SOP：前導/壓車、LINE群組、迷路集合、加油半桶原則、每日下一站導航已說好。</div><div>□ 醫療：非急症先聯絡保險協助；急症先打119；就醫保留收據、診斷書與藥袋。</div></div></div>`;
                itineraryData.forEach(data => {
                    let sectionsHtml = '';
                    data.sections.forEach(sec => {
                        const cleanContent = sec.content.replace(/<button[^>]*>.*?<\/button>/gi, '').replace(/<\/?a[^>]*>/g, '');
                        const cleanTitle = sec.title.replace(/<\/?a[^>]*>/g, '');
                        const cleanTip = sec.deepTip ? sec.deepTip.replace(/<\/?a[^>]*>/g, '').replace(/💡 補充資訊：/g, '') : '';
                        const timeBadge = sec.time ? `<span class="border-2 border-gray-600 px-1.5 py-0.5 rounded text-xs mr-2 font-bold inline-block align-middle">${sec.time}</span>` : '';
                        sectionsHtml += `<div class="mb-5 pl-4 border-l-2 border-gray-300 break-inside-avoid"><h4 class="font-bold text-lg mb-1.5 flex items-center leading-tight">${timeBadge}${cleanTitle}</h4><div class="text-gray-800 leading-relaxed text-sm mb-2">${cleanContent}</div>${cleanTip ? `<div class="text-sm text-gray-700 bg-gray-50 border border-gray-300 p-2.5 rounded-lg flex items-start gap-2 mt-2"><span class="shrink-0">💡</span> <div>${cleanTip}</div></div>` : ''}</div>`;
                    });
                    
                    let printChecklistHighlights = '';
                    const hasChecklist = data.checklist && data.checklist.length > 0;

                    if (hasChecklist) {
                        printChecklistHighlights = `
                        <div class="mb-4 text-sm font-bold text-gray-800 border-2 border-gray-300 rounded-lg p-3 break-inside-avoid">
                            <div class="mb-2 flex items-center gap-1"><span class="text-base">📝</span> 出發前防呆清單：</div>
                            <div class="flex flex-col gap-1.5 pl-1">
                                ${data.checklist.map(item => `<div class="flex items-start gap-2"><div class="w-4 h-4 border-2 border-gray-400 rounded-sm shrink-0 mt-0.5"></div><span>${item.replace(/<[^>]*>?/gm, '')}</span></div>`).join('')}
                            </div>
                        </div>`;
                    }
                    
                    html += `<div class="mb-10 pt-4"><div class="break-after-avoid"><div class="flex items-baseline gap-3 mb-2 border-b-2 border-gray-800 pb-2"><h2 class="text-2xl font-black">Day ${data.day}</h2><span class="text-lg font-bold text-gray-800">${data.date} - ${data.title}</span></div><div class="flex flex-col gap-1.5 mb-4 text-sm font-bold text-gray-800 bg-gray-100 p-3 rounded-lg border border-gray-300"><div>🚗 動線：${data.route.replace(/<[^>]*>?/gm, '')}</div><div>🏨 住宿：${data.hotel}</div></div>${printChecklistHighlights}</div><div class="mt-4">${sectionsHtml}</div>${data.tips ? `<div class="mt-4 p-3 border-2 border-red-400 bg-red-50 text-red-800 font-bold text-sm rounded-lg break-inside-avoid">⚠️ 注意事項：${data.tips}</div>` : ''}</div>`;
                });
                container.innerHTML = html;
            }

            function renderBackupList() {
                const container = document.getElementById('backup-list-container');
                if (currentBackupCategory === 'food') {
                    renderGourmetBackupList(container);
                    return;
                }
                const dataList = backupDB[currentBackupRegion][currentBackupCategory];
                const styles = { sight: { border: 'border-blue-100' }, food: { border: 'border-orange-100' }, shop: { border: 'border-purple-100' } };
                const s = styles[currentBackupCategory];

                let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 animate-[fadeIn_0.3s_ease-out]">`;
                if(dataList) {
                    dataList.forEach((item, index) => {
                        const [title, desc] = item.split('|');
                        const isStarred = title.includes('⭐');
                        const cleanTitle = title.replace('⭐', '').trim();
                        const cardHighlightClass = isStarred ? 'border-yellow-400 bg-yellow-50/50 ring-2 ring-yellow-400/50' : s.border;
                        const starIcon = isStarred ? '<span class="text-yellow-500 mr-1 animate-pulse">⭐</span>' : '';
                        
                        let badgeClass = 'rank-other';
                        if (index === 0) badgeClass = 'rank-1';
                        else if (index === 1) badgeClass = 'rank-2';
                        else if (index === 2) badgeClass = 'rank-3';

                        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanTitle)}`;
                        html += `<div class="${BACKUP_CARD_BASE_CLASS} ${cardHighlightClass}"><span class="rank-badge ${badgeClass} text-[10px] w-6 h-6 flex-shrink-0">${index + 1}</span><div><h5 class="font-bold text-sm md:text-base leading-tight">${starIcon}<a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-cyan-600 underline decoration-gray-400/50 underline-offset-2 transition-colors cursor-pointer py-1 block sm:inline">${cleanTitle}</a></h5><p class="text-[11px] md:text-xs text-gray-600 mt-1.5 leading-relaxed">${desc}</p></div></div>`;
                    });
                }
                html += `</div>`;
                container.innerHTML = html;
            }

            function escapeHtmlForAttr(value) {
                return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            function renderGourmetBackupList(container) {
                const dataList = gourmetBackupDB[currentBackupRegion] || [];
                const regionName = currentBackupRegion === 'oita' ? '大分・別府・由布院' : '熊本・阿蘇・上天草';
                const topS = dataList.filter(item => item.rank === 'S').slice(0, 4).map(item => item.name.replace(/／.*/, '')).join('、');
                const caution = currentBackupRegion === 'kumamoto'
                    ? '<strong>6 月上天草策略：</strong>牡蠣小屋與生海膽活動多偏冬春，Day7 應主攻車海老、刺身、海鮮丼、鮑魚；牡蠣與海膽有貨再加點。'
                    : '<strong>別府策略：</strong>海鮮吃りゅうきゅう丼、関あじ有貨再點；麵食優先別府冷麵；豐後牛則放 Day3 或 Day4 晚餐。';

                let html = `<div class="animate-[fadeIn_0.3s_ease-out]">
                    <div class="gourmet-warning">${caution}<br>帶小孩同行時，牡蠣、生魚片、牛肉生食一律保守；燒肉由成人烤熟後再分食。</div>
                    <div id="gourmet-summary-grid">
                        <div class="gourmet-summary-card"><h4>區域</h4><p>${regionName}</p></div>
                        <div class="gourmet-summary-card"><h4>S 級主菜</h4><p>${topS || '依當天動線選擇'}</p></div>
                        <div class="gourmet-summary-card"><h4>使用規則</h4><p>S＝主動排；A＝順路優先；B＝備案／願望清單；C＝季節或不建議硬追。</p></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">`;

                dataList.forEach((item) => {
                    const rankClass = `rank-${item.rank}`;
                    const cardRankClass = item.rank === 'S' ? 's-rank' : item.rank === 'A' ? 'a-rank' : '';
                    const query = item.mapQuery || item.name;
                    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' 営業時間 定休日 メニュー')}`;
                    const links = (item.links || []).map(link => `<a href="${escapeHtmlForAttr(link.url)}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">🔎 ${link.label}</a>`).join('');
                    const warnBlock = item.warning ? `<div class="gourmet-section"><div class="gourmet-label">避雷／注意</div><div class="gourmet-text">${item.warning}</div></div>` : '';
                    html += `<article class="gourmet-card ${cardRankClass}">
                        <div class="gourmet-head">
                            <span class="gourmet-rank ${rankClass}">${item.rank}</span>
                            <div class="min-w-0">
                                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="gourmet-title">${item.name}</a>
                                <div class="gourmet-meta">
                                    <span class="gourmet-chip type">${item.type}</span>
                                    <span class="gourmet-chip day">${item.bestDay}</span>
                                    <span class="gourmet-chip family">${item.area}</span>
                                </div>
                            </div>
                        </div>
                        <div class="gourmet-section"><div class="gourmet-label">必點</div><div class="gourmet-text"><strong>${item.must}</strong></div></div>
                        <div class="gourmet-section"><div class="gourmet-label">為什麼值得</div><div class="gourmet-text">${item.why}</div></div>
                        <div class="gourmet-section"><div class="gourmet-label">排法</div><div class="gourmet-text">${item.strategy}</div></div>
                        <div class="gourmet-section"><div class="gourmet-label">親子判斷</div><div class="gourmet-text">${item.kid}</div></div>
                        ${warnBlock}
                        <div class="gourmet-actions">
                            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="gourmet-action">📍 導航</a>
                            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="gourmet-action secondary">⏱️ 查營業</a>
                            ${links}
                        </div>
                    </article>`;
                });

                html += `</div></div>`;
                container.innerHTML = html;
            }

            /* --- 綁定全域函數 (供 HTML 標籤使用) --- */
            window.selectDay = function(day) {
                currentDay = day;
                updateTabsUI();
                switchDayContent(day);
                
                history.pushState(null, '', '#day' + day);

                if(window.innerWidth < 768) {
                    const contentTop = document.getElementById('itinerary-content').offsetTop;
                    window.scrollTo({ top: contentTop - 80, behavior: 'smooth' });
                }
            };

            window.addEventListener('popstate', () => {
                const hash = window.location.hash;
                let day = 1;
                if (hash && hash.startsWith('#day')) {
                    const parsedDay = parseInt(hash.replace('#day', ''));
                    if (!isNaN(parsedDay) && itineraryData.some(d => d.day === parsedDay)) {
                        day = parsedDay;
                    }
                }
                currentDay = day;
                updateTabsUI();
                switchDayContent(day);
            });


            function stripTags(html) {
                return String(html || '').replace(/<[^>]*>?/gm, '');
            }

            window.openDayInfo = function(day, mode) {
                const data = itineraryData.find(d => d.day === day);
                if (!data) return;
                const modal = document.getElementById('dayInfoModal');
                const titleEl = document.getElementById('dayInfoModalTitle');
                const subEl = document.getElementById('dayInfoModalSubtitle');
                const bodyEl = document.getElementById('dayInfoModalBody');
                const focus = dayFocusDB[day] || null;
                const flexibleSections = (data.sections || []).filter(sec => sec.type === 'rain' || sec.time === '彈性方案');

                const card = (label, content, cls = 'border-gray-200 bg-gray-50') => `
                    <div class="${cls} border-2 rounded-2xl p-4">
                        <div class="text-[11px] font-black uppercase tracking-wider text-gray-500 mb-1.5">${label}</div>
                        <div class="text-sm md:text-base font-bold leading-relaxed text-gray-900">${content || ''}</div>
                    </div>`;

                let body = '';
                if (mode === 'focus') {
                    titleEl.innerHTML = `<span>🧭</span> Day ${day} 今日行程重點`;
                    subEl.textContent = `${data.date}｜${stripTags(data.title)}`;
                    if (focus) {
                        body = `
                            <div class="bg-gray-900 text-white rounded-2xl p-4 md:p-5 font-black text-lg md:text-xl leading-relaxed">${focus.mission}</div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                ${card('今天怎樣算成功', focus.win, 'border-green-200 bg-green-50')}
                                ${card('彈性時間窗', focus.hardCut, 'border-amber-200 bg-amber-50')}
                                ${card('現場判斷', focus.decision, 'border-blue-200 bg-blue-50')}
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="border-2 border-amber-200 bg-white rounded-2xl p-4">
                                    <div class="text-[11px] font-black text-amber-700 mb-2">🎯 現場優先序</div>
                                    <div class="flex flex-wrap gap-2">${(focus.priority || []).map(item => `<span class="priority-pill text-amber-900 border px-2.5 py-1 rounded-lg">${item}</span>`).join('')}</div>
                                </div>
                                ${card('主要風險', focus.risk, 'border-gray-300 bg-gray-50')}
                            </div>
                            ${data.tips ? card('行程提醒', data.tips, 'border-red-200 bg-red-50') : ''}`;
                    }
                } else if (mode === 'checklist') {
                    titleEl.innerHTML = `<span>📝</span> Day ${day} 防呆清單`;
                    subEl.textContent = `${data.date}｜出發前快速確認`;
                    body = `<div class="grid grid-cols-1 gap-2">
                        ${(data.checklist || []).map(item => `
                            <label class="flex items-start gap-3 cursor-pointer rounded-xl border border-pink-100 bg-white p-3 hover:bg-pink-50 transition">
                                <input type="checkbox" class="w-6 h-6 mt-0.5 rounded border-gray-300 text-kawaii-pink focus:ring-kawaii-pink cursor-pointer shrink-0">
                                <span class="font-bold text-gray-800 leading-relaxed">${stripTags(item)}</span>
                            </label>`).join('')}
                    </div>`;
                } else if (mode === 'gourmet') {
                    titleEl.innerHTML = `<span>🍽️</span> Day ${day} 今日美食候選`;
                    subEl.textContent = `${data.date}｜依當天動線分類；各類別預設收合，點開再挑`;
                    body = renderDailyGourmet(day) || `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">本日沒有美食候選資料。</div>`;
                } else {
                    titleEl.innerHTML = `<span>🔀</span> Day ${day} 彈性方案`;
                    subEl.textContent = `${data.date}｜依時間、天氣與體力選擇路線`;
                    body = flexibleSections.length ? flexibleSections.map(sec => {
                        const parkingQuery = sec.parkingQuery || parkingLookup[sec.mapQuery] || null;
                        return `<div class="border-2 border-cyan-200 bg-cyan-50 rounded-2xl p-4 md:p-5 shadow-sm">
                            <div class="flex flex-wrap items-center gap-2 mb-3">
                                ${sec.time ? `<span class="bg-cyan-700 text-white text-[11px] font-black px-2.5 py-1 rounded-full">${sec.time}</span>` : ''}
                                <div class="font-black text-cyan-900 text-lg">${sec.title}</div>
                            </div>
                            <div class="text-sm md:text-base font-bold text-gray-800 leading-relaxed">${sec.content}</div>
                            ${parkingQuery ? `<div class="mt-3 flex flex-wrap gap-2">${renderParkingButtons(parkingQuery)}</div>` : ''}
                            ${sec.deepTip ? `<details class="mt-3 bg-white/80 border border-cyan-200 rounded-xl overflow-hidden"><summary class="cursor-pointer select-none px-3 py-2 font-black text-cyan-800">💡 補充資訊</summary><div class="px-3 pb-3 pt-1 text-sm font-bold text-gray-700 leading-relaxed">${sec.deepTip}</div></details>` : ''}
                        </div>`;
                    }).join('') : `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">本日沒有額外彈性方案。</div>`;
                }

                bodyEl.innerHTML = body;
                openDialog(modal);
            };

            const syncAppVh = () => {
                document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
            };

            let savedScrollY = 0;
            function lockPageScroll() {
                if (document.body.classList.contains('modal-open')) return;
                savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
                document.documentElement.classList.add('modal-open');
                document.body.classList.add('modal-open');
                document.body.style.position = 'fixed';
                document.body.style.top = `-${savedScrollY}px`;
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.width = '100%';
            }

            function unlockPageScrollIfNeeded() {
                const anyOpen = Array.from(document.querySelectorAll('dialog')).some(d => d.open);
                if (anyOpen) return;
                document.documentElement.classList.remove('modal-open');
                document.body.classList.remove('modal-open');
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.width = '';
                window.scrollTo(0, savedScrollY || 0);
            }

            function openDialog(dialog) {
                if (!dialog) return;
                syncAppVh();
                lockPageScroll();
                if (!dialog.open) dialog.showModal();
                requestAnimationFrame(() => {
                    dialog.scrollTop = 0;
                    const firstScrollable = dialog.querySelector('#dayInfoModalBody, #backup-list-container');
                    if (firstScrollable) firstScrollable.scrollTop = 0;
                });
            }

            window.showModal = function(id) {
                const dialog = document.getElementById(id);
                openDialog(dialog);
            };

            window.closeModal = function(id) {
                const dialog = document.getElementById(id);
                if (dialog && dialog.open) dialog.close();
            };

            window.addEventListener('resize', syncAppVh, { passive: true });
            window.addEventListener('orientationchange', () => setTimeout(syncAppVh, 250), { passive: true });
            syncAppVh();

            window.initBackupModal = function() {
                window.setBackupRegion('oita');
            };

            window.setBackupRegion = function(region) {
                currentBackupRegion = region;
                ['oita', 'kumamoto'].forEach(r => {
                    const btn = document.getElementById(`btn-region-${r}`);
                    if(btn) {
                        if (r === region) {
                            btn.classList.remove('region-btn-inactive', 'border-transparent');
                            btn.classList.add('region-btn-active');
                        } else {
                            btn.classList.remove('region-btn-active');
                            btn.classList.add('region-btn-inactive', 'border-transparent');
                        }
                    }
                });
                renderBackupList();
            };

            const categoryTabs = document.getElementById('backup-category-tabs');
            if (categoryTabs) {
                categoryTabs.addEventListener('click', (e) => {
                    const btn = e.target.closest('button');
                    if (!btn || !btn.dataset.cat) return;
                    
                    const category = btn.dataset.cat;
                    currentBackupCategory = category;
                    
                    categoryTabs.querySelectorAll('button').forEach(b => {
                        if (b.dataset.cat === category) {
                            b.classList.remove('category-btn-inactive');
                            b.classList.add('category-btn-active', 'text-cyan-600');
                        } else {
                            b.classList.remove('category-btn-active', 'text-cyan-600');
                            b.classList.add('category-btn-inactive');
                        }
                    });
                    renderBackupList();
                });
            }

            window.copyDailyItinerary = async function() {
                const data = itineraryData.find(d => d.day === currentDay);
                if(!data) return;

                let textToCopy = `🚗 九州大冒險 - Day ${data.day} (${data.date})\n📌 主題：${data.title}\n🗺️ 動線：${data.route.replace(/<[^>]*>?/gm, '')}\n🏨 住宿：${data.hotel}\n\n`;
                data.sections.forEach(sec => {
                    textToCopy += `【${sec.title.replace(/<[^>]*>?/gm, '')}】${sec.time ? ` (${sec.time})` : ''}\n${sec.content.replace(/<[^>]*>?/gm, '').replace(/<br>/g, '\n')}\n`;
                    if(sec.deepTip) textToCopy += `💡 筆記：${sec.deepTip.replace(/<[^>]*>?/gm, '').replace(/<br>/g, ' / ')}\n`;
                    textToCopy += `\n`;
                });
                if(data.tips) textToCopy += `⚠️ 注意事項：${data.tips}\n\n`;

                try {
                    if (navigator.clipboard && window.isSecureContext) {
                        await navigator.clipboard.writeText(textToCopy);
                        alert(`✅ Day ${data.day} 行程與實戰攻略已複製！`);
                    } else throw new Error('Clipboard API restricted');
                } catch (err) {
                    const textArea = document.createElement("textarea");
                    textArea.value = textToCopy;
                    textArea.style.position = "fixed"; textArea.style.top = "0"; textArea.style.left = "0";
                    document.body.appendChild(textArea);
                    textArea.focus(); textArea.select();
                    try { document.execCommand('copy'); alert(`✅ Day ${data.day} 行程與實戰攻略已複製！`); } 
                    catch (fallbackErr) { alert('❌ 複製失敗，請手動選取複製。'); }
                    document.body.removeChild(textArea);
                }
            };

            document.querySelectorAll('dialog').forEach(dialog => {
                dialog.addEventListener('click', (e) => {
                    const rect = dialog.getBoundingClientRect();
                    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right);
                    if (!isInDialog) dialog.close();
                });
                dialog.addEventListener('close', unlockPageScrollIfNeeded);
                dialog.addEventListener('cancel', () => setTimeout(unlockPageScrollIfNeeded, 0));
            });

            initTabs();
            buildAllContent();
            window.preparePrintView = function() {
                const container = document.getElementById('print-container');
                if (!container || container.dataset.printReady === 'true') return;
                initPrintView();
                container.dataset.printReady = 'true';
            };
            window.addEventListener('beforeprint', window.preparePrintView);
        })();
        /* #endregion */
