export function ex8() {
  // Estado dos elementos

  // menu inativo:
  // class="" em nav
  // aria-expanded="false" em button
  // aria-label="Abrir Menu" em button

  // menu ativo:
  // class="active" em nav
  // aria-expanded="true" em button
  // aria-label="Fechar Menu" em button
  const button = document.getElementById('btn-mobile');

  function toggleMenu(e: PointerEvent) {
    const nav = document.querySelector('#nav');
    const btn = e.currentTarget;
    if (btn instanceof HTMLButtonElement && nav) {
      if (nav.classList.contains('active')) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir Menu');
        nav.classList.remove('active');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Fechar Menu');
        nav?.classList.add('active');
      }
    }
  }
  button?.addEventListener('pointerdown', toggleMenu);
}
