export function ex2() {
  //Conserte as funções com TypeScript
  // const input = document.querySelector('input');
  // const total = localStorage.getItem('total');
  // input.value = total;
  // calcularGanho(input.value);
  // function calcularGanho(value) {
  //   const p = document.querySelector('p');
  //   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  // }
  // function totalMudou() {
  //   const value = Number(input.value);
  //   localStorage.setItem('total', value);
  //   calcularGanho(value);
  // }
  // input.addEventListener('keyup', totalMudou);
  const input = document.querySelector('input');

  const total = localStorage.getItem('total');
  if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
  }

  function calcularGanho(value: number) {
    const p = document.querySelector('p');
    if (p) {
      p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
  }

  function totalMudou() {
    if (input) {
      const value = Number(input.value);
      localStorage.setItem('total', String(value));
      calcularGanho(value);
    }
  }

  input?.addEventListener('keyup', totalMudou);
}
