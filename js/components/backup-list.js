// Backup spot and gourmet list renderers.

function normalizeBackupEntry(item) {
                if (!item) return { title: '', desc: '', starred: false };
                if (typeof item === 'object') {
                    const title = String(item.title || item.name || '').trim();
                    return {
                        title,
                        desc: String(item.desc || item.description || '').trim(),
                        starred: Boolean(item.starred || item.rank === 'S' || /^⭐/.test(title)),
                        mapQuery: item.mapQuery || title,
                    };
                }
                const raw = String(item);
                const separatorIndex = raw.indexOf('|');
                const rawTitle = separatorIndex >= 0 ? raw.slice(0, separatorIndex) : raw;
                const desc = separatorIndex >= 0 ? raw.slice(separatorIndex + 1) : '';
                const starred = rawTitle.includes('⭐');
                const title = rawTitle.replace('⭐', '').trim();
                return { title, desc: desc.trim(), starred, mapQuery: title };
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
                const dataList = backupDB[currentBackupRegion]?.[currentBackupCategory] || [];
                const styles = { sight: { border: 'border-blue-100' }, food: { border: 'border-orange-100' }, shop: { border: 'border-purple-100' } };
                const s = styles[currentBackupCategory] || { border: 'border-gray-100' };

                if (!dataList.length) {
                    container.innerHTML = `<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 font-bold text-gray-700">目前沒有符合的備案資料。</div>`;
                    return;
                }

                let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 animate-[fadeIn_0.3s_ease-out]">`;
                dataList.forEach((item, index) => {
                    const entry = normalizeBackupEntry(item);
                    const cleanTitle = entry.title || '未命名備案';
                    const desc = entry.desc || '尚未填寫說明。';
                    const cardHighlightClass = entry.starred ? 'border-yellow-400 bg-yellow-50/50 ring-2 ring-yellow-400/50' : s.border;
                    const starIcon = entry.starred ? '<span class="text-yellow-500 mr-1 animate-pulse">⭐</span>' : '';
                    
                    let badgeClass = 'rank-other';
                    if (index === 0) badgeClass = 'rank-1';
                    else if (index === 1) badgeClass = 'rank-2';
                    else if (index === 2) badgeClass = 'rank-3';

                    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.mapQuery || cleanTitle)}`;
                    html += `<div class="${BACKUP_CARD_BASE_CLASS} ${cardHighlightClass}"><span class="rank-badge ${badgeClass} text-[10px] w-6 h-6 flex-shrink-0">${index + 1}</span><div><h5 class="font-bold text-sm md:text-base leading-tight">${starIcon}<a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-cyan-600 underline decoration-gray-400/50 underline-offset-2 transition-colors cursor-pointer py-1 block sm:inline">${escapeHtml(cleanTitle)}</a></h5><p class="text-[11px] md:text-xs text-gray-600 mt-1.5 leading-relaxed">${escapeHtml(desc)}</p></div></div>`;
                });
                html += `</div>`;
                container.innerHTML = html;
            }
