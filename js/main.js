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
        document.documentElement.dataset.currentDay = String(day);
    }

    function getCurrentDayData() {
        return itineraryData.find(d => d.day === currentDay) || itineraryData[0];
    }

    function showAppStatus(message) {
        const status = document.getElementById('app-status');
        if (status) status.textContent = message;
        const button = document.querySelector('.trip-status-button');
        if (button) {
            button.classList.add('is-confirmed');
            setTimeout(() => button.classList.remove('is-confirmed'), 900);
        }
    }

    function getFirstParkingQueryForDay(dayData) {
        const section = (dayData.sections || []).find(sec => sec.parkingQuery || parkingLookup[sec.mapQuery]);
        if (!section) return '';
        const parking = section.parkingQuery || parkingLookup[section.mapQuery];
        return Array.isArray(parking) ? parking[0] : parking;
    }

    function openExternalUrl(url) {
        if (!url) return false;
        const opened = window.open(url, '_blank', 'noopener,noreferrer');
        if (!opened) window.location.href = url;
        return false;
    }

    function openCurrentDayInfo(mode) {
        window.openDayInfo(currentDay, mode || 'focus');
    }

    function openCurrentDayMap() {
        const data = getCurrentDayData();
        const firstMapQuery = (data.sections || []).find(sec => sec.mapQuery)?.mapQuery;
        const url = data.mapLink || (firstMapQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firstMapQuery)}` : '');
        return openExternalUrl(url);
    }

    function openCurrentDayParking() {
        const data = getCurrentDayData();
        const query = getFirstParkingQueryForDay(data);
        if (!query) {
            showAppStatus(`Day ${currentDay} 目前沒有停車導航資料`);
            return false;
        }
        return openExternalUrl(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`);
    }

    function openBackupDecision() {
        window.showModal('backupModal');
        window.initBackupModal();
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
    window.getCurrentTripDay = getCurrentDay;
    window.showAppStatus = showAppStatus;
    window.openCurrentDayInfo = openCurrentDayInfo;
    window.openCurrentDayMap = openCurrentDayMap;
    window.openCurrentDayParking = openCurrentDayParking;
    window.openBackupDecision = openBackupDecision;
    window.selectDay = tabsController.selectDay;
    window.initBackupModal = backupModalController.initBackupModal;
    window.setBackupRegion = backupModalController.setBackupRegion;
    window.copyDailyItinerary = clipboardController.copyDailyItinerary;
    window.openDayInfo = (day, mode) => openDayInfoModal(day, mode, modalController.openDialog);
    window.preparePrintView = function() {
        const container = document.getElementById('print-container');
        if (!container) return false;
        container.innerHTML = renderPrintViewHtml();
        container.dataset.printReady = 'true';
        return true;
    };

    // The printed paper manual is a fixed, already-typeset A4 PDF.
    // Do not route the toolbar button through the browser's HTML print layout: that
    // can reflow the interactive web cards and produce a different paper experience.
    window.getPaperGuidePdfUrl = function(anchorHref) {
        if (anchorHref) return anchorHref;

        const currentPath = window.location.pathname || '';
        const fileName = 'kyushu-travel-manual.pdf';

        // Works for the root index.html / kyushu-trip-final-day6-day8.html because
        // a root copy of the PDF is committed. It also works for dist/kyushu-trip-final.html
        // because dist already contains the same PDF beside the single-file build.
        if (/\/dist\//.test(currentPath)) {
            return new URL(fileName, window.location.href).href;
        }

        return new URL(fileName, window.location.href).href;
    };

    window.openPaperGuidePdf = function(event) {
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }

        const anchor = event && event.currentTarget ? event.currentTarget : null;
        const pdfUrl = window.getPaperGuidePdfUrl(anchor && anchor.href);
        const opened = window.open(pdfUrl, '_blank', 'noopener,noreferrer');

        if (!opened) {
            window.location.href = pdfUrl;
        }

        return false;
    };

    // Backward-compatible name for any existing inline handlers.
    // It intentionally opens the official PDF instead of printing the HTML app.
    window.printPaperGuide = function() {
        const pdfUrl = window.getPaperGuidePdfUrl();
        const opened = window.open(pdfUrl, '_blank', 'noopener,noreferrer');

        if (!opened) {
            window.location.href = pdfUrl;
        }
    };

    // Developer-only fallback: generate the HTML manual and call window.print().
    // Keep this separate so the user-facing toolbar never triggers the reflowed web layout.
    window.printGeneratedPaperGuide = async function() {
        if (!window.preparePrintView()) return;
        if (document.fonts && document.fonts.ready) {
            try {
                await document.fonts.ready;
            } catch (error) {
                // Font readiness is an enhancement only; print should still proceed.
            }
        }
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        window.print();
    };
    window.printPaperGuideFallback = window.printGeneratedPaperGuide;

    modalController.init();
    backupModalController.init();
    tabsController.init();
    buildInitialDayContent();
    setCurrentDay(currentDay);
    window.addEventListener('beforeprint', window.preparePrintView);
})();
