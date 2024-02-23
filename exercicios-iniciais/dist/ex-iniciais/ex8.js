export function ex8() {
    const button = document.getElementById('btn-mobile');
    function toggleMenu(e) {
        const nav = document.querySelector('#nav');
        const btn = e.currentTarget;
        if (btn instanceof HTMLButtonElement && nav) {
            if (nav.classList.contains('active')) {
                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('aria-label', 'Abrir Menu');
                nav.classList.remove('active');
            }
            else {
                btn.setAttribute('aria-expanded', 'true');
                btn.setAttribute('aria-label', 'Fechar Menu');
                nav?.classList.add('active');
            }
        }
    }
    button?.addEventListener('pointerdown', toggleMenu);
}
//# sourceMappingURL=ex8.js.map