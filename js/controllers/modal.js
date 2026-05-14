// Dialog open/close and mobile scroll-lock controller.

function createModalController() {
    const syncAppVh = () => {
        document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
    };

    let savedScrollY = 0;

    function lockPageScroll() {
        if (document.body.classList.contains('modal-open')) return;
        savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
        document.documentElement.classList.add('modal-open');
        document.body.classList.add('modal-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
    }

    function unlockPageScrollIfNeeded() {
        const anyOpen = Array.from(document.querySelectorAll('dialog')).some(d => d.open);
        if (anyOpen) return;
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, savedScrollY || 0);
    }

    function openDialog(dialog) {
        if (!dialog) return;
        syncAppVh();
        lockPageScroll();
        if (!dialog.open) dialog.showModal();
        requestAnimationFrame(() => {
            dialog.scrollTop = 0;
            const firstScrollable = dialog.querySelector('#dayInfoModalBody, #backup-list-container');
            if (firstScrollable) firstScrollable.scrollTop = 0;
        });
    }

    function showModal(id) {
        const dialog = document.getElementById(id);
        openDialog(dialog);
    }

    function closeModal(id) {
        const dialog = document.getElementById(id);
        if (dialog && dialog.open) dialog.close();
    }

    function bindDialogDismissHandlers() {
        document.querySelectorAll('dialog').forEach(dialog => {
            dialog.addEventListener('click', (e) => {
                const rect = dialog.getBoundingClientRect();
                const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right);
                if (!isInDialog) dialog.close();
            });
            dialog.addEventListener('close', unlockPageScrollIfNeeded);
            dialog.addEventListener('cancel', () => setTimeout(unlockPageScrollIfNeeded, 0));
        });
    }

    function init() {
        window.addEventListener('resize', syncAppVh, { passive: true });
        window.addEventListener('orientationchange', () => setTimeout(syncAppVh, 250), { passive: true });
        syncAppVh();
        bindDialogDismissHandlers();
    }

    return { init, openDialog, showModal, closeModal };
}
