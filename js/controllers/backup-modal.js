// Backup modal region/category state controller.

function createBackupModalController() {
    let currentBackupRegion = 'oita';
    let currentBackupCategory = 'sight';

    function render() {
        const container = document.getElementById('backup-list-container');
        renderBackupList(container, currentBackupRegion, currentBackupCategory);
    }

    function syncCategoryTabs() {
        const categoryTabs = document.getElementById('backup-category-tabs');
        if (!categoryTabs) return;
        categoryTabs.querySelectorAll('button').forEach(b => {
            if (b.dataset.cat === currentBackupCategory) {
                b.classList.remove('category-btn-inactive');
                b.classList.add('category-btn-active', 'text-cyan-600');
            } else {
                b.classList.remove('category-btn-active', 'text-cyan-600');
                b.classList.add('category-btn-inactive');
            }
        });
    }

    function setBackupRegion(region) {
        currentBackupRegion = region;
        ['oita', 'kumamoto'].forEach(r => {
            const btn = document.getElementById(`btn-region-${r}`);
            if(btn) {
                if (r === region) {
                    btn.classList.remove('region-btn-inactive', 'border-transparent');
                    btn.classList.add('region-btn-active');
                } else {
                    btn.classList.remove('region-btn-active');
                    btn.classList.add('region-btn-inactive', 'border-transparent');
                }
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
