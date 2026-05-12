// 九州親子大冒險 - app bootstrap and controller wiring.

(() => {
    let currentDay = getInitialDayFromHash();

    function getInitialDayFromHash() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#day')) {
            const parsedDay = parseInt(hash.replace('#day', ''));
            if (!isNaN(parsedDay) && itineraryData.some(d => d.day === parsedDay)) {
                return parsedDay;
            }
        }
        return 1;
    }

    function getCurrentDay() {
        return currentDay;
    }

    function setCurrentDay(day) {
        currentDay = day;
    }

    function ensureDayContent(day) {
        const container = document.getElementById('itinerary-content');
        let el = document.getElementById(`day-content-${day}`);
        if (!el) {
            const data = itineraryData.find(d => d.day === day);
            if (!data || !container) return null;
            el = renderDayContent(data, currentDay);
            container.appendChild(el);
        }
        return el;
    }

    function buildInitialDayContent() {
        const container = document.getElementById('itinerary-content');
        if (!container) return;
        container.innerHTML = '';
        ensureDayContent(currentDay);
    }

    const dialogsRoot = document.getElementById('dialogs-root');
    if (dialogsRoot && !dialogsRoot.innerHTML) {
        dialogsRoot.innerHTML = renderStaticModals();
    }

    const modalController = createModalController();
    const tabsController = createDayTabsController({ getCurrentDay, setCurrentDay, ensureDayContent });
    const backupModalController = createBackupModalController();
    const clipboardController = createDailyItineraryClipboardController({ getCurrentDay });

    window.showModal = modalController.showModal;
    window.closeModal = modalController.closeModal;
    window.selectDay = tabsController.selectDay;
    window.initBackupModal = backupModalController.initBackupModal;
    window.setBackupRegion = backupModalController.setBackupRegion;
    window.copyDailyItinerary = clipboardController.copyDailyItinerary;
    window.openDayInfo = (day, mode) => openDayInfoModal(day, mode, modalController.openDialog);
    window.preparePrintView = function() {
        const container = document.getElementById('print-container');
        if (!container || container.dataset.printReady === 'true') return;
        container.innerHTML = renderPrintViewHtml();
        container.dataset.printReady = 'true';
    };

    modalController.init();
    backupModalController.init();
    tabsController.init();
    buildInitialDayContent();
    window.addEventListener('beforeprint', window.preparePrintView);
})();
