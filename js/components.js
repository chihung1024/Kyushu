// 九州親子大冒險 - reusable render helpers and UI components

function getParkingButtonLabel(query) {
            if (!query) return '停車場導航';
            const key = String(query).trim();
            if (parkingLabelLookup[key]) return parkingLabelLookup[key];
            const cleaned = key
                .replace(/熊本市中央区新市街8-7/g, '')
                .replace(/\s*(駐車場|停車場)\s*$/g, '')
                .replace(/\s+/g, ' ')
                .trim();
            return `${cleaned || '目的地'}停車場導航`;
        }

        function parkingButtonHtml(query, label = null) {
            if (!query) return '';
            const buttonLabel = label || getParkingButtonLabel(query);
            return `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer" class="nav-pill parking-nav-pill inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"><span>🅿️</span> ${buttonLabel}</a>`;
        }

        function renderParkingButtons(parkingInfo) {
            if (!parkingInfo) return '';
            const items = Array.isArray(parkingInfo) ? parkingInfo : [parkingInfo];
            return items.map(item => {
                if (!item) return '';
                if (typeof item === 'string') return parkingButtonHtml(item);
                return parkingButtonHtml(item.query, item.label);
            }).join('');
        }

function escapeDailyGourmetHtml(value) {
            return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

        function renderDailyGourmet(day) {
            const data = dayGourmetDB[day];
            if (!data || !data.categories || !data.categories.length) return '';
            const rules = (data.rules || []).map(rule => `<span class="daily-gourmet-rule">${escapeDailyGourmetHtml(rule)}</span>`).join('');
            const categories = data.categories.map((category) => {
                const items = category.items || [];
                const cards = items.map(item => {
                    const rank = item.rank || 'B';
                    const query = item.mapQuery || item.name;
                    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' 営業時間 定休日 メニュー 予約')}`;
                    const caution = item.caution ? `<div class="daily-gourmet-card-section"><div class="daily-gourmet-label">注意</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.caution)}</div></div>` : '';
                    return `<article class="daily-gourmet-card gourmet-${String(rank).toLowerCase()}">
                        <div class="daily-gourmet-card-head">
                            <span class="daily-gourmet-rank rank-${escapeDailyGourmetHtml(rank)}">${escapeDailyGourmetHtml(rank)}</span>
                            <div class="min-w-0">
                                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-name">${escapeDailyGourmetHtml(item.name)}</a>
                                <div class="daily-gourmet-meta">
                                    <span class="daily-gourmet-chip meal">${escapeDailyGourmetHtml(item.meal)}</span>
                                    <span class="daily-gourmet-chip area">${escapeDailyGourmetHtml(item.area)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="daily-gourmet-card-section"><div class="daily-gourmet-label">必點／主軸</div><div class="daily-gourmet-text"><strong>${escapeDailyGourmetHtml(item.order)}</strong></div></div>
                        <div class="daily-gourmet-card-section"><div class="daily-gourmet-label">為什麼放今天</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.note)}</div></div>
                        <div class="daily-gourmet-card-section"><div class="daily-gourmet-label">現場判斷</div><div class="daily-gourmet-text">${escapeDailyGourmetHtml(item.fit)}</div></div>
                        ${caution}
                        <div class="daily-gourmet-actions">
                            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-action">📍 導航</a>
                            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="daily-gourmet-action secondary">🔎 查營業／訂位</a>
                        </div>
                    </article>`;
                }).join('');
                return `<details class="daily-gourmet-category">
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
                    <div class="daily-gourmet-title"><span>🍽️</span><span>今日美食候選｜按類別展開挑選</span></div>
                    <div class="daily-gourmet-brief">${escapeDailyGourmetHtml(data.headline)}</div>
                    <div class="daily-gourmet-rules">${rules}</div>
                </div>
                <div class="daily-gourmet-alert">S＝主動排；A＝順路優先；B＝備案／願望清單；C＝當天不建議硬追。帶小孩同行時，生牡蠣、生魚片、牛肉生食都採保守原則；燒肉由成人烤熟後再分食。</div>
                <div class="daily-gourmet-body">${categories}</div>
                <div class="daily-gourmet-footer">使用方式：各類別預設收合；先依當天想吃的類型展開，再用 S／A／B／C 判斷優先順序。若排隊、天氣、孩子狀態不對，就收合目前類別並切換其他類別。導航按鈕會直接用店名開 Google Maps 搜尋。</div>
            </section>`;
        }
