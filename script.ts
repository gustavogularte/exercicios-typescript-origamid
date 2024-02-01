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
