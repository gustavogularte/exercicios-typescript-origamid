import fetchDados from './fetchDados.js';
import normalizarFetch from './normalizarFetch.js';
import preencherDados from './preencherDados.js';
async function handleFetch() {
    const dados = await fetchDados('https://api.origamid.dev/json/transacoes.json');
    if (!dados)
        return;
    const pagamentos = dados.map(normalizarFetch);
    preencherDados(pagamentos);
}
handleFetch();
//# sourceMappingURL=main.js.map