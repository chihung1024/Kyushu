// Print-friendly itinerary renderer.

function renderPrintViewHtml() {
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
                return html;
            }
