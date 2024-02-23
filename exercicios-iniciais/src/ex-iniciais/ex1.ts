export function ex1() {
  //Conserte a função com TypeScript
  // function normalizarTexto(texto) {
  //   return texto.trims().toLowercase();
  // }
  function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
  }
  console.log('teste');
}
