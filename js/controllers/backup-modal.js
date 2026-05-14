// Backup modal region/category state controller.

function createBackupModalController() {
    let currentBackupRegion = 'oita';
    let currentBackupCategory = 'sight';

    function render() {
        const container = document.getElementById('backup-list-container');
        renderBackupList(container, currentBackupRegion, currentBackupCategory);
        if (container) container.scrollTop = 0;
    }

    function syncCategoryTabs() {
        const categoryTabs = document.getElementById('backup-category-tabs');
        if (!categoryTabs) return;
        categoryTabs.querySelectorAll('button').forEach(b => {
            const active = b.dataset.cat === currentBackupCategory;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    function setBackupRegion(region) {
        currentBackupRegion = region;
        ['oita', 'kumamoto'].forEach(r => {
            const btn = document.getElementById(`btn-region-${r}`);
            if(btn) {
                const active = r === region;
                btn.classList.toggle('is-active', active);
                btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            }
        });
        syncCategoryTabs();
        render();
    }

    function setBackupCategory(category) {
        currentBackupCategory = category;
        syncCategoryTabs();
        render();
    }

    function bindCategoryTabs() {
        const categoryTabs = document.getElementById('backup-category-tabs');
        if (!categoryTabs) return;
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn || !btn.dataset.cat) return;
            setBackupCategory(btn.dataset.cat);
        });
    }

    function initBackupModal() {
        setBackupRegion(currentBackupRegion || 'oita');
        setBackupCategory(currentBackupCategory || 'sight');
    }

    function init() {
        bindCategoryTabs();
        syncCategoryTabs();
    }

    return { init, initBackupModal, setBackupRegion, setBackupCategory };
}
