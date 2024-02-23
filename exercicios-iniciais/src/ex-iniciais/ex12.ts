export function ex12() {
  // 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
  // 2 - Defina o tipo/interface de cada venda (tuple)
  // 3 - Some o total das vendas e mostre na tela
  async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    totalVendas(json);
  }
  fetchVendas();

  interface VendaDetalhes {
    marca: string;
    cor: string;
  }
  type Venda = [string, number, string, VendaDetalhes];

  function totalVendas(vendas: Venda[]) {
    vendas.reduce((total, venda) => {
      console.log(total + venda[1]);
      return total + venda[1];
    }, 0);
  }
}
