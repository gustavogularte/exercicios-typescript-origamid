//Conserte a função com TypeScript
// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

//Conserte as funções com TypeScript
// const input = document.querySelector('input');
// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);
// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }
// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }
// input.addEventListener('keyup', totalMudou);
const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
  input.value = total;
  calcularGanho(+input.value);
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem('total', String(value));
    calcularGanho(value);
  }
}

input?.addEventListener('keyup', totalMudou);

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'value deve ser um número ou uma string';
  }
}

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
  //console.log(data.nome);
  // console.log(data.preco);
  // console.log(data.empresaFabricante.pais);
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}
fetchCursos();

interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  tags: string[];
}

function mostrarCursos(cursos: Cursos[]) {
  cursos.forEach((curso) => {
    const color = curso.nivel === 'iniciante' ? 'blue' : 'red';
    //   document.body.innerHTML += `
    //    <h1 style="color: ${color};">${curso.nome}</h1>
    // `;
  });
}

//1 - Selecione o link utilizando o método getElementById.
//2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}

// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll('.link');
links.forEach((link) => {
  if (link instanceof HTMLElement) {
    mudarLink(link);
  }
});
function mudarLink(element: HTMLElement) {
  element.style.color = 'red';
  element.style.border = '2px solid red';
}

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const button = document.getElementById('btn-mobile');

function toggleMenu(e: PointerEvent) {
  const nav = document.querySelector('#nav');
  const btn = e.currentTarget;
  if (btn instanceof HTMLButtonElement && nav) {
    if (nav.classList.contains('active')) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir Menu');
      nav.classList.remove('active');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Fechar Menu');
      nav?.classList.add('active');
    }
  }
}
button?.addEventListener('pointerdown', toggleMenu);

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

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchCursos2() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  mostrarCursos2(json);
}
fetchCursos2();

interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCurso(item: unknown): item is Curso {
  if (
    item &&
    typeof item === 'object' &&
    'nome' in item &&
    'horas' in item &&
    'tags' in item
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrarCursos2(data: any) {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (isCurso(item)) {
        //console.log(item.horas);
      }
    });
  }
}

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}
interface Window {
  UserData: object;
}

function validJSON(value: string) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

function isUserData(value: unknown): value is UserData {
  if (
    value &&
    typeof value === 'object' &&
    ('nome' in value || 'email' in value || 'cpf' in value)
  ) {
    return true;
  } else {
    return false;
  }
}

function loadLocalStorage() {
  let UserDataLocal = window.localStorage.getItem('UserData');
  if (UserDataLocal && validJSON(UserDataLocal)) {
    UserDataLocal = JSON.parse(UserDataLocal);
    if (isUserData(UserDataLocal)) {
      window.UserData = UserDataLocal;
      Object.entries(UserDataLocal).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
        }
      });
    }
  }
}
loadLocalStorage();

function handleKeyup({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData = { ...window.UserData, [target.id]: target.value };
    console.log(window.UserData);
    window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleKeyup);

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
    //console.log(total + venda[1]);
    return total + venda[1];
  }, 0);
}
