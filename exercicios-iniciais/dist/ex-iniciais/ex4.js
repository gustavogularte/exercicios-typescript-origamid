export function ex4() {
    async function fetchProduct() {
        const response = await fetch('https://api.origamid.dev/json/notebook.json');
        const data = await response.json();
        showProduct(data);
    }
    fetchProduct();
    function showProduct(data) {
        console.log(data.nome);
        console.log(data.preco);
        console.log(data.empresaFabricante.pais);
    }
}
//# sourceMappingURL=ex4.js.map