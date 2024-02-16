export function ex9() {
  // Crie uma função que arredonda um valor passado para cima.
  // A função pode receber string ou number.
  // A função deve retornar o mesmo tipo que ela receber.
  function arredondarCima(valor: number): number;
  function arredondarCima(valor: string): string;
  function arredondarCima(valor: number | string): number | string {
    if (typeof valor === 'number') {
      return Math.ceil(valor);
    } else {
      return `${Math.ceil(+valor)}`;
    }
  }
}
