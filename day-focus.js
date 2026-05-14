// Backup modal region/category state controller.

function createBackupModalController() {
    let currentBackupRegion = 'oita';
    let currentBackupCategory = 'sight';

    function render() {
        const container = document.getElementById('backup-list-container');
        renderBackupList(container, currentBackupRegion, currentBackupCategory);
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
        render();
    }

    function bindCategoryTabs() {
        const categoryTabs = document.getElementById('backup-category-tabs');
        if (!categoryTabs) return;
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn || !btn.dataset.cat) return;

            const category = btn.dataset.cat;
            currentBackupCategory = category;

            categoryTabs.querySelectorAll('button').forEach(b => {
                if (b.dataset.cat === category) {
                    b.classList.remove('category-btn-inactive');
                    b.classList.add('category-btn-active', 'text-cyan-600');
                } else {
                    b.classList.remove('category-btn-active', 'text-cyan-600');
                    b.classList.add('category-btn-inactive');
                }
            });
            render();
        });
    }

    function initBackupModal() {
        setBackupRegion('oita');
    }

    function init() {
        bindCategoryTabs();
    }

    return { init, initBackupModal, setBackupRegion };
}
