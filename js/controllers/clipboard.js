// Daily itinerary clipboard controller.

function createDailyItineraryClipboardController({ getCurrentDay }) {
    async function copyDailyItinerary() {
        const data = itineraryData.find(d => d.day === getCurrentDay());
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
    }

    return { copyDailyItinerary };
}
