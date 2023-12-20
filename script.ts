//Exercício 1
//Conserte a função com TypeScript
// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

//Exercício 2
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
  calcularGanho(Number(input.value));
}
function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}
function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value);
    calcularGanho(Number(input.value));
  }
}
if (input) {
  input.addEventListener('keyup', totalMudou);
}

//Exercício 3
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(item: number | string) {
  if (typeof item === 'number') {
    return item;
  } else if (typeof item === 'string') {
    return +item;
  } else {
    throw 'Value dvee ser um número ou uma string';
  }
}

//Exercício 4
// async function fetchProduct() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data = await response.json();
//   showProduct(data);
// }

// fetchProduct();

// function showProduct(data) {
//   document.body.innerHTML = `
//     <div>
//       <h2>${data.name}</h2>
//     </div>
//   `;
// }
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Product) {
  document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}

//Exercício 5
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   mostrarCursos(data);
// }

// fetchCursos();

// function mostrarCursos(cursos) {}
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}
fetchCursos();

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  nome: string;
  tags: string[];
}
function mostrarCursos(cursos: Curso[]) {
  cursos.map(
    (curso) =>
      (document.body.innerHTML += `
    <div> 
      <h1 style='color: ${curso.nivel === 'iniciante' ? 'blue' : 'red'}'>${
        curso.nome
      }</h1>
      <p>Aulas: ${curso.aulas}</p>
      <p>${curso.gratuito ? 'gratuito' : 'pago'}</p>
      <p>${curso.horas} horas</p>
      <p>Aulas: ${curso.idAulas}</p>
      <p>nivel: ${curso.nivel}</p>
      <p>Tags: ${curso.tags}</p>
    </div
  `)
  );
}

//Exercício 6
// Selecione o link utilizando o método getElementById.
//  Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}

//Exercício 7
// Selecione os elementos com a classe link.
// Crie uma função que deve ser executada para cada elemento.
// Modificar através da função o estilo da color e border.
const links = document.querySelectorAll('.link');
function styles(item: HTMLElement) {
  item.style.color = 'red';
  item.style.border = '2px solid blue';
}
links.forEach((link) => {
  if (link instanceof HTMLElement) {
    styles(link);
  }
});
