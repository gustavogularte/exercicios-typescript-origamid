export default function preencherDados(pagamentos) {
    function tabela() {
        const tabela = document.querySelector('#pagamentos tbody');
        if (tabela) {
            pagamentos.forEach((pagamento) => {
                tabela.innerHTML += `
        <tr>
          <td>${pagamento.nome}</td>
          <td>${pagamento.email}</td>
          <td>R$ ${pagamento.moeda}</td>
          <td>${pagamento.formaDePagamento}</td>
          <td>${pagamento.status}</td>
        </th>
        `;
            });
        }
    }
    function statsTotal() {
        const total = document.querySelector('#total span');
        let ct = 0;
        pagamentos.forEach((pagamento) => {
            if (pagamento.valor && total) {
                total.innerHTML = (ct += pagamento.valor).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                });
            }
        });
    }
    function preencherStatsDados(lista, id) {
        const listaContainer = document.querySelector(id);
        if (listaContainer) {
            Object.keys(lista).forEach((key) => {
                listaContainer.innerHTML += `<li>${key}: ${lista[key]}</li>`;
            });
        }
    }
    function statsDados() {
        const listaPagamentos = countList(pagamentos.map(({ formaDePagamento }) => formaDePagamento));
        const listaStatus = countList(pagamentos.map(({ status }) => status));
        preencherStatsDados(listaPagamentos, '#listaPagamentos');
        preencherStatsDados(listaStatus, '#listaStatus');
    }
    function countList(lista) {
        return lista.reduce((acc, tipo) => {
            if (acc[tipo]) {
                acc[tipo] += 1;
            }
            else {
                acc[tipo] = 1;
            }
            return acc;
        }, {});
    }
    tabela();
    statsTotal();
    statsDados();
}
//# sourceMappingURL=preencherDados.js.map