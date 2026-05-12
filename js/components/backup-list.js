// Backup spot and gourmet list renderers.

function escapeHtmlForAttr(value) {
                return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

function renderGourmetBackupList(container, currentBackupRegion) {
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

function renderBackupList(container, currentBackupRegion, currentBackupCategory) {
                if (currentBackupCategory === 'food') {
                    renderGourmetBackupList(container, currentBackupRegion);
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
