// Daily itinerary clipboard controller.

function createDailyItineraryClipboardController({ getCurrentDay }) {
    async function copyDailyItinerary(dayOverride) {
        const requestedDay = Number(dayOverride);
        const targetDay = Number.isInteger(requestedDay) && itineraryData.some(d => d.day === requestedDay)
            ? requestedDay
            : getCurrentDay();
        const data = itineraryData.find(d => d.day === targetDay);
        if(!data) return;

        let textToCopy = `🚗 九州大冒險 - Day ${data.day} (${htmlToPlainText(data.date)})\n📌 主題：${htmlToPlainText(data.title)}\n🗺️ 動線：${htmlToPlainText(data.route)}\n🏨 住宿：${htmlToPlainText(data.hotel)}\n\n`;
        data.sections.forEach(sec => {
            textToCopy += `【${htmlToPlainText(sec.title)}】${sec.time ? ` (${htmlToPlainText(sec.time)})` : ''}\n${htmlToPlainText(sec.content)}\n`;
            if(sec.deepTip) textToCopy += `💡 筆記：${htmlToPlainText(sec.deepTip)}\n`;
            textToCopy += `\n`;
        });
        if(data.tips) textToCopy += `⚠️ 注意事項：${htmlToPlainText(data.tips)}\n\n`;

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
    }

    return { copyDailyItinerary };
}
