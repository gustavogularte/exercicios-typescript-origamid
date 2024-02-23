export function ex7() {
  // 1 - Selecione os elementos com a classe link.
  // 2 - Crie uma função que deve ser executada para cada elemento.
  // 3 - Modificar através da função o estilo da color e border.
  const links = document.querySelectorAll('.link');
  links.forEach((link) => {
    if (link instanceof HTMLElement) {
      mudarLink(link);
    }
  });
  function mudarLink(element: HTMLElement) {
    element.style.color = 'red';
    element.style.border = '2px solid red';
  }
}
