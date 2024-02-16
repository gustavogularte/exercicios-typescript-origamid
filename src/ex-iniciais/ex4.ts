export function ex4() {
  async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
  }
  fetchProduct();

  interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
  }

  interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
  }

  function showProduct(data: Produto) {
    console.log(data.nome);
    console.log(data.preco);
    console.log(data.empresaFabricante.pais);
  }
}
