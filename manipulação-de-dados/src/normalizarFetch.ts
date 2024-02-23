import currenceToNumber from "./currenceToNumber.js";

declare global {
  type PagamentoStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

  type PagamentoTipo = 'Boleto' | 'Cartão de Crédito';

  interface PagamentoAPI {
    ['Cliente Novo']: number;
    Data: string;
    Email: string;
    ['Forma de Pagamento']: PagamentoTipo;
    ID: number;
    Nome: string;
    Status: PagamentoStatus;
    ['Valor (R$)']: string;
  }

  interface Pagamento {
    clienteNovo: boolean,
    data: string,
    email: string,
    formaDePagamento: PagamentoTipo,
    id: number,
    nome: string,
    status: PagamentoStatus,
    moeda: string,
    valor: number | null,
  }
}
export default function normalizarFetch(pagamento: PagamentoAPI): Pagamento {
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
