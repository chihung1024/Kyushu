// Day information modal renderer and presenter.

function stripTags(html) {
                return String(html || '').replace(/<[^>]*>?/gm, '');
            }

function openDayInfoModal(day, mode, openDialog) {
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
