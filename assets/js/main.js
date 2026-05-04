import { icons, bgColors, BACKUP_CARD_BASE_CLASS, itineraryData, backupDB } from "./data/app-data.js";

// 全網頁一致性更新：所有具體地名與停車場已補上帶有 rel="noopener noreferrer" 的導航超連結
/* #region ⚙️ 2. 核心邏輯區 (Logic) - Hash Routing 與 DOM Pre-rendering */
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
        container.innerHTML = '';
        itineraryData.forEach((data) => {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${data.day}`;
            btn.innerHTML = `Day ${data.day}`;
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
        });
    }

    function buildAllContent() {
        const container = document.getElementById('itinerary-content');
        container.innerHTML = '';

        itineraryData.forEach((data) => {
            let sectionsHtml = '';
            data.sections.forEach(sec => {
                const iconBg = sec.type === 'rain' ? 'bg-cyan-100 text-cyan-600' : 'bg-white';
                let deepTipHtml = sec.deepTip ? `
                    <div class="mt-4 bg-amber-50/80 border border-amber-200 rounded-xl p-4 shadow-sm relative overflow-hidden text-gray-900">
                        <div class="absolute -right-3 -top-3 text-5xl opacity-10 pointer-events-none">💡</div>
                        <strong class="text-amber-700 flex items-center gap-1.5 mb-2"><span class="text-lg">💡</span> 實戰筆記：</strong>
                        <div class="leading-relaxed z-10 relative text-sm sm:text-base">${sec.deepTip}</div>
                    </div>` : '';

                const titleHtml = sec.mapQuery 
                    ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sec.mapQuery)}" target="_blank" rel="noopener noreferrer" class="text-gray-900 hover:text-blue-600 underline decoration-gray-300 underline-offset-4 transition-colors cursor-pointer p-1 -m-1">${sec.title}</a>`
                    : `<span class="text-gray-900">${sec.title}</span>`;
                
                const timeBadge = sec.time ? `<span class="bg-gray-800 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm inline-block shrink-0">${sec.time}</span>` : '';

                sectionsHtml += `
                    <div class="relative pl-7 pb-8 border-l-2 border-kawaii-blue border-dashed ml-3 last:border-transparent last:pb-0">
                        <div class="timeline-dot flex items-center justify-center text-[10px] ${iconBg}">${icons[sec.type] || '📌'}</div>
                        <div class="${bgColors[sec.type] || 'bg-gray-50 border-gray-200'} border-2 rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-gray-800">
                            <div class="flex flex-wrap items-center gap-2 mb-3">
                                ${timeBadge}
                                <h4 class="font-black text-lg sm:text-xl flex-1 min-w-[200px] flex items-center gap-2">${titleHtml}</h4>
                            </div>
                            <div class="text-sm sm:text-base text-gray-900 leading-relaxed font-medium">${sec.content}</div>
                            ${deepTipHtml}
                        </div>
                    </div>`;
            });

            let tipsHtml = data.tips ? `
                <div class="relative pl-7 pt-6 ml-3">
                    <div class="timeline-warning-dot mt-6">⚠️</div>
                    <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 text-gray-900">
                        <h4 class="font-bold text-red-800 text-sm flex items-center gap-2 mb-1">行程注意事項</h4>
                        <div class="text-sm font-medium text-red-800 leading-relaxed">${data.tips}</div>
                    </div>
                </div>` : '';

            let checklistHtml = (data.checklist && data.checklist.length > 0) ? `
                <div class="bg-white/80 backdrop-blur rounded-2xl p-4 mb-6 border-[3px] border-kawaii-light-pink shadow-sm hover:shadow-md transition-shadow">
                    <h4 class="font-black text-kawaii-pink mb-3 flex items-center gap-2 text-lg"><span>📝</span> 晨間出發防呆清單</h4>
                    <div class="space-y-3">
                        ${data.checklist.map((item) => `
                            <label class="flex items-start sm:items-center gap-3 cursor-pointer group py-1">
                                <input type="checkbox" class="w-6 h-6 sm:w-5 sm:h-5 mt-0.5 sm:mt-0 rounded border-gray-300 text-kawaii-pink focus:ring-kawaii-pink cursor-pointer shrink-0">
                                <span class="text-sm sm:text-base font-bold text-gray-700 group-hover:text-black transition-colors leading-tight">${item}</span>
                            </label>`).join('')}
                    </div>
                </div>` : '';

            const dayDiv = document.createElement('div');
            dayDiv.id = `day-content-${data.day}`;
            dayDiv.className = `fade-in ${data.day === currentDay ? 'block' : 'hidden'}`;
            
            dayDiv.innerHTML = `
                <div class="flex flex-col mb-5">
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="bg-kawaii-yellow text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">${data.date}</span>
                        ${data.weather ? `<span class="bg-white border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">${data.weather}</span>` : ''}
                        ${data.mapLink ? `<a href="${data.mapLink}" target="_blank" rel="noopener noreferrer" class="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 hover:bg-emerald-100 transition hover:scale-105 active:scale-95"><span>📍</span> 本日路線總覽</a>` : ''}
                    </div>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-1 tracking-tight drop-shadow-sm">${data.title}</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div class="flex items-center gap-3 text-sm text-gray-900 bg-gray-50 p-4 rounded-xl border-2 border-gray-200 shadow-sm">
                        <span class="text-2xl shrink-0">🗺️</span>
                        <div><div class="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">今日動線</div><div class="font-bold leading-tight text-base">${data.route}</div></div>
                    </div>
                    <div class="flex items-center gap-3 text-sm text-kawaii-blue bg-kawaii-light-blue/20 p-4 rounded-xl border-2 border-blue-200 shadow-sm">
                        <span class="text-2xl shrink-0">🏨</span>
                        <div><div class="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-0.5">夜宿點</div><div class="font-black text-blue-900 leading-tight text-base">${data.hotel}</div></div>
                    </div>
                </div>
                ${checklistHtml}
                <div class="mt-4 pt-2">${sectionsHtml}${tipsHtml}</div>
            `;

            container.appendChild(dayDiv);
        });
    }

    function switchDayContent(day) {
        itineraryData.forEach(data => {
            const el = document.getElementById(`day-content-${data.day}`);
            if (el) {
                if (data.day === day) {
                    el.classList.remove('hidden');
                    el.classList.add('block', 'fade-in');
                } else {
                    el.classList.add('hidden');
                    el.classList.remove('block', 'fade-in');
                }
            }
        });
    }

    function initPrintView() {
        const container = document.getElementById('print-container');
        let html = `<div class="text-center mb-8 border-b-4 border-gray-800 pb-4 mt-4"><h1 class="text-3xl font-black mb-2">九州親子大冒險 實戰攻略本</h1><p class="text-gray-600 font-bold">雙家庭 (2大2小) ｜ 離線紙本保命用</p></div>`;
        itineraryData.forEach(data => {
            let sectionsHtml = '';
            data.sections.forEach(sec => {
                const cleanContent = sec.content.replace(/<button[^>]*>.*?<\/button>/gi, '').replace(/<\/?a[^>]*>/g, '');
                const cleanTitle = sec.title.replace(/<\/?a[^>]*>/g, '');
                const cleanTip = sec.deepTip ? sec.deepTip.replace(/<\/?a[^>]*>/g, '').replace(/💡 實戰筆記：/g, '') : '';
                const timeBadge = sec.time ? `<span class="border-2 border-gray-600 px-1.5 py-0.5 rounded text-xs mr-2 font-bold inline-block align-middle">${sec.time}</span>` : '';
                sectionsHtml += `<div class="mb-5 pl-4 border-l-2 border-gray-300 break-inside-avoid"><h4 class="font-bold text-lg mb-1.5 flex items-center leading-tight">${timeBadge}${cleanTitle}</h4><div class="text-gray-800 leading-relaxed text-sm mb-2">${cleanContent}</div>${cleanTip ? `<div class="text-sm text-gray-700 bg-gray-50 border border-gray-300 p-2.5 rounded-lg flex items-start gap-2 mt-2"><span class="shrink-0">💡</span> <div>${cleanTip}</div></div>` : ''}</div>`;
            });
            let checklistHtml = (data.checklist && data.checklist.length > 0) ? `<div class="mb-4 text-sm font-bold text-gray-800"><div class="mb-1 flex items-center gap-1"><span class="text-base">📝</span> 出發防呆確認：</div><div class="flex flex-col gap-1.5 pl-6">${data.checklist.map(item => `<div class="flex items-start gap-2"><div class="w-4 h-4 border-2 border-gray-400 rounded-sm shrink-0 mt-0.5"></div><span>${item.replace(/<[^>]*>?/gm, '')}</span></div>`).join('')}</div></div>` : '';
            html += `<div class="mb-10 pt-4"><div class="break-after-avoid"><div class="flex items-baseline gap-3 mb-2 border-b-2 border-gray-800 pb-2"><h2 class="text-2xl font-black">Day ${data.day}</h2><span class="text-lg font-bold text-gray-800">${data.date} - ${data.title}</span></div><div class="flex flex-col gap-1.5 mb-4 text-sm font-bold text-gray-800 bg-gray-100 p-3 rounded-lg border border-gray-300"><div>🚗 動線：${data.route.replace(/<[^>]*>?/gm, '')}</div><div>🏨 住宿：${data.hotel}</div></div>${checklistHtml}</div><div class="mt-4">${sectionsHtml}</div>${data.tips ? `<div class="mt-4 p-3 border-2 border-red-400 bg-red-50 text-red-800 font-bold text-sm rounded-lg break-inside-avoid">⚠️ 注意事項：${data.tips}</div>` : ''}</div>`;
        });
        container.innerHTML = html;
    }

    function renderBackupList() {
        const container = document.getElementById('backup-list-container');
        const dataList = backupDB[currentBackupRegion][currentBackupCategory];
        const styles = { sight: { border: 'border-blue-100' }, food: { border: 'border-orange-100' }, shop: { border: 'border-purple-100' } };
        const s = styles[currentBackupCategory];

        let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 animate-[fadeIn_0.3s_ease-out]">`;
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
        html += `</div>`;
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

    window.showModal = function(id) {
        const dialog = document.getElementById(id);
        if (dialog) dialog.showModal();
    };

    window.closeModal = function(id) {
        const dialog = document.getElementById(id);
        if (dialog) dialog.close();
    };

    window.initBackupModal = function() {
        window.setBackupRegion('oita');
    };

    window.setBackupRegion = function(region) {
        currentBackupRegion = region;
        ['oita', 'fukuoka', 'kumamoto'].forEach(r => {
            const btn = document.getElementById(`btn-region-${r}`);
            if (r === region) {
                btn.classList.remove('region-btn-inactive', 'border-transparent');
                btn.classList.add('region-btn-active');
            } else {
                btn.classList.remove('region-btn-active');
                btn.classList.add('region-btn-inactive', 'border-transparent');
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
    });

    initTabs();
    buildAllContent();
    initPrintView();
