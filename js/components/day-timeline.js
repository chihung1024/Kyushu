// Daily itinerary timeline renderer.

function renderDayContent(data, currentDay) {
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
                    const hasChecklist = data.checklist && data.checklist.length > 0;
                    const flexibleCount = (data.sections || []).filter(sec => sec.type === 'rain' || sec.time === '彈性方案').length;
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
                                <button type="button" onclick="copyDailyItinerary(${data.day})" class="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 hover:bg-sky-100 transition hover:scale-105 active:scale-95"><span>📋</span> 複製今日行程</button>
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
                        ${dayToolsHtml}
                        <div class="mt-4 pt-2">${sectionsHtml}${tipsHtml}</div>
                    `;

                    return dayDiv;

            }
