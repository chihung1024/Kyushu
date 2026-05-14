// Day tab routing and tabpanel controller.

function createDayTabsController({ getCurrentDay, setCurrentDay, ensureDayContent }) {
    const DAYS_PER_MOBILE_PAGE = 4;

    function getPageIndexForDay(day) {
        return Math.max(0, Math.ceil(day / DAYS_PER_MOBILE_PAGE) - 1);
    }

    function getMobilePageCount() {
        return Math.max(1, Math.ceil(itineraryData.length / DAYS_PER_MOBILE_PAGE));
    }

    function initTabs() {
        const container = document.getElementById('tabs-container');
        if (!container) return;
        container.innerHTML = '';
        container.setAttribute('role', 'tablist');
        container.setAttribute('aria-label', '每日行程切換');

        const pageCount = getMobilePageCount();
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
            const page = document.createElement('div');
            page.className = 'day-tabs-page';
            page.dataset.dayPage = String(pageIndex);
            page.setAttribute('aria-label', `Day ${pageIndex * DAYS_PER_MOBILE_PAGE + 1} 到 Day ${Math.min((pageIndex + 1) * DAYS_PER_MOBILE_PAGE, itineraryData.length)}`);
            itineraryData
                .slice(pageIndex * DAYS_PER_MOBILE_PAGE, (pageIndex + 1) * DAYS_PER_MOBILE_PAGE)
                .forEach((data) => {
                    const btn = document.createElement('button');
                    btn.id = `tab-btn-${data.day}`;
                    btn.type = 'button';
                    btn.setAttribute('role', 'tab');
                    btn.setAttribute('aria-controls', `day-content-${data.day}`);
                    btn.textContent = `Day ${data.day}`;
                    btn.onclick = () => selectDay(data.day);
                    page.appendChild(btn);
                });
            container.appendChild(page);
        }

        container.addEventListener('scroll', () => {
            if (window.innerWidth < 768) updateMobileDotsFromScroll();
        }, { passive: true });

        updateTabsUI({ instantScroll: true });
    }

    function updateMobileDots(activePage = getPageIndexForDay(getCurrentDay())) {
        const dots = document.querySelectorAll('#day-tabs-dots .day-tabs-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activePage);
        });
    }

    function updateMobileDotsFromScroll() {
        const container = document.getElementById('tabs-container');
        if (!container) return;
        const width = container.clientWidth || 1;
        const activePage = Math.round(container.scrollLeft / width);
        updateMobileDots(activePage);
    }

    function scrollActiveMobilePage({ instant = false } = {}) {
        const container = document.getElementById('tabs-container');
        if (!container || window.innerWidth >= 768) return;
        const pageIndex = getPageIndexForDay(getCurrentDay());
        const left = pageIndex * container.clientWidth;
        if (typeof container.scrollTo === 'function') {
            container.scrollTo({ left, behavior: instant ? 'auto' : 'smooth' });
        } else {
            container.scrollLeft = left;
        }
        updateMobileDots(pageIndex);
    }

    function updateTabsUI(options = {}) {
        const currentDay = getCurrentDay();
        itineraryData.forEach((data) => {
            const btn = document.getElementById(`tab-btn-${data.day}`);
            if (!btn) return;
            const isActive = data.day === currentDay;
            btn.className = `flex-shrink-0 px-5 py-3 md:py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isActive ? 'tab-active' : 'tab-inactive hover:bg-kawaii-light-pink hover:text-white hover:border-kawaii-light-pink'}`;
            btn.setAttribute('aria-selected', String(isActive));
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });
        requestAnimationFrame(() => scrollActiveMobilePage({ instant: Boolean(options.instantScroll) }));
    }

    function switchDayContent(day) {
        ensureDayContent(day);
        itineraryData.forEach(data => {
            const el = document.getElementById(`day-content-${data.day}`);
            if (el) {
                if (data.day === day) {
                    el.classList.remove('hidden');
                    el.classList.add('block', 'fade-in');
                    el.setAttribute('aria-hidden', 'false');
                } else {
                    el.classList.add('hidden');
                    el.classList.remove('block', 'fade-in');
                    el.setAttribute('aria-hidden', 'true');
                }
            }
        });
    }

    function selectDay(day) {
        setCurrentDay(day);
        window.history.pushState(null, '', `#day${day}`);
        updateTabsUI();
        switchDayContent(day);
        if(window.innerWidth < 768) {
            const content = document.getElementById('itinerary-content');
            if (content) {
                const contentTop = content.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: contentTop - 80, behavior: 'smooth' });
            }
        }
    }

    function handlePopstate() {
        const hash = window.location.hash;
        let day = 1;
        if (hash && hash.startsWith('#day')) {
            const parsedDay = parseInt(hash.replace('#day', ''));
            if (!isNaN(parsedDay) && itineraryData.some(d => d.day === parsedDay)) day = parsedDay;
        }
        setCurrentDay(day);
        updateTabsUI();
        switchDayContent(day);
    }

    function init() {
        initTabs();
        window.addEventListener('popstate', handlePopstate);
        window.addEventListener('resize', () => scrollActiveMobilePage({ instant: true }), { passive: true });
    }

    return { init, selectDay, switchDayContent, updateTabsUI };
}
