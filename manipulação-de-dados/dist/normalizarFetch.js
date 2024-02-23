import currenceToNumber from "./currenceToNumber.js";
export default function normalizarFetch(pagamento) {
    return {
        clienteNovo: Boolean(pagamento['Cliente Novo']),
        data: pagamento.Data,
        email: pagamento.Email,
        formaDePagamento: pagamento['Forma de Pagamento'],
        id: pagamento.ID,
        nome: pagamento.Nome,
        status: pagamento.Status,
        moeda: pagamento['Valor (R$)'],
        valor: currenceToNumber(pagamento["Valor (R$)"]),
    };
}
//# sourceMappingURL=normalizarFetch.js.map