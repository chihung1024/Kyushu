// Day tab routing and tabpanel controller.

function createDayTabsController({ getCurrentDay, setCurrentDay, ensureDayContent }) {
    function initTabs() {
        const container = document.getElementById('tabs-container');
        if (!container) return;
        container.innerHTML = '';
        container.setAttribute('role', 'tablist');
        container.setAttribute('aria-label', '每日行程切換');
        itineraryData.forEach((data) => {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${data.day}`;
            btn.type = 'button';
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-controls', `day-content-${data.day}`);
            btn.textContent = `Day ${data.day}`;
            btn.onclick = () => selectDay(data.day);
            container.appendChild(btn);
        });
        container.addEventListener('keydown', handleTabKeyboard);
        updateTabsUI();
    }

    function updateTabsUI() {
        const currentDay = getCurrentDay();
        itineraryData.forEach((data) => {
            const btn = document.getElementById(`tab-btn-${data.day}`);
            if (!btn) return;
            const isActive = data.day === currentDay;
            btn.className = `flex-shrink-0 px-5 py-3 md:py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isActive ? 'tab-active' : 'tab-inactive hover:bg-kawaii-light-pink hover:text-white hover:border-kawaii-light-pink'}`;
            btn.setAttribute('aria-selected', String(isActive));
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });
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

    function emitDayChange(day) {
        window.dispatchEvent(new CustomEvent('kyushu:daychange', { detail: { day } }));
    }

    function selectDay(day, options = {}) {
        setCurrentDay(day);
        if (!options.fromPopstate) window.history.pushState(null, '', `#day${day}`);
        updateTabsUI();
        switchDayContent(day);
        emitDayChange(day);
        if(options.scroll !== false && window.innerWidth < 768) {
            const content = document.getElementById('itinerary-content');
            if (content) {
                const contentTop = content.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: contentTop - 80, behavior: 'smooth' });
            }
        }
    }

    function handleTabKeyboard(event) {
        const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const days = itineraryData.map(item => item.day);
        const currentIndex = days.indexOf(getCurrentDay());
        let nextIndex = currentIndex;
        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % days.length;
        if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + days.length) % days.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = days.length - 1;
        const nextDay = days[nextIndex];
        selectDay(nextDay, { scroll: false });
        document.getElementById(`tab-btn-${nextDay}`)?.focus();
    }

    function handlePopstate() {
        const hash = window.location.hash;
        let day = 1;
        if (hash && hash.startsWith('#day')) {
            const parsedDay = parseInt(hash.replace('#day', ''));
            if (!isNaN(parsedDay) && itineraryData.some(d => d.day === parsedDay)) day = parsedDay;
        }
        selectDay(day, { fromPopstate: true, scroll: false });
    }

    function init() {
        initTabs();
        window.addEventListener('popstate', handlePopstate);
    }

    return { init, selectDay, switchDayContent, updateTabsUI };
}
