export function ex12() {
    async function fetchVendas() {
        const response = await fetch('https://api.origamid.dev/json/vendas.json');
        const json = await response.json();
        totalVendas(json);
    }
    fetchVendas();
    function totalVendas(vendas) {
        vendas.reduce((total, venda) => {
            console.log(total + venda[1]);
            return total + venda[1];
        }, 0);
    }
}
//# sourceMappingURL=ex12.js.map