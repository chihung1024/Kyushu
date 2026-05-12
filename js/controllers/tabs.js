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
    }

    return { init, selectDay, switchDayContent, updateTabsUI };
}
