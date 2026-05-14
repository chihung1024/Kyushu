// Dialog open/close and mobile scroll-lock controller.

function createModalController() {
    const syncAppVh = () => {
        document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
    };

    let savedScrollY = 0;
    let lastFocusedElement = null;

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

    function getFocusableElements(dialog) {
        return Array.from(dialog.querySelectorAll([
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(','))).filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
    }

    function focusDialog(dialog) {
        const labelledBy = dialog.getAttribute('aria-labelledby');
        const title = labelledBy ? document.getElementById(labelledBy) : dialog.querySelector('h2, [data-dialog-title]');
        if (title && !title.hasAttribute('tabindex')) title.setAttribute('tabindex', '-1');
        const focusTarget = title || getFocusableElements(dialog)[0] || dialog;
        focusTarget.focus({ preventScroll: true });
    }

    function trapFocus(dialog, event) {
        if (event.key !== 'Tab' || !dialog.open) return;
        const focusable = getFocusableElements(dialog);
        if (!focusable.length) {
            event.preventDefault();
            dialog.focus();
            return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function openDialog(dialog) {
        if (!dialog) return;
        syncAppVh();
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        lockPageScroll();
        if (!dialog.open) dialog.showModal();
        requestAnimationFrame(() => {
            dialog.scrollTop = 0;
            const firstScrollable = dialog.querySelector('#dayInfoModalBody, #backup-list-container');
            if (firstScrollable) firstScrollable.scrollTop = 0;
            focusDialog(dialog);
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
            dialog.addEventListener('keydown', event => trapFocus(dialog, event));
            dialog.addEventListener('close', () => {
                unlockPageScrollIfNeeded();
                if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    requestAnimationFrame(() => lastFocusedElement.focus({ preventScroll: true }));
                }
            });
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
