"use strict";
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(value) {
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
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'value deve ser um número ou uma string';
    }
}
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
}
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        const color = curso.nivel === 'iniciante' ? 'blue' : 'red';
    });
}
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'https://');
}
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        mudarLink(link);
    }
});
function mudarLink(element) {
    element.style.color = 'red';
    element.style.border = '2px solid red';
}
const button = document.getElementById('btn-mobile');
function toggleMenu(e) {
    const nav = document.querySelector('#nav');
    const btn = e.currentTarget;
    if (btn instanceof HTMLButtonElement && nav) {
        if (nav.classList.contains('active')) {
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Abrir Menu');
            nav.classList.remove('active');
        }
        else {
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('aria-label', 'Fechar Menu');
            nav?.classList.add('active');
        }
    }
}
button?.addEventListener('pointerdown', toggleMenu);
function arredondarCima(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return `${Math.ceil(+valor)}`;
    }
}
async function fetchCursos2() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    mostrarCursos2(json);
}
fetchCursos2();
function isCurso(item) {
    if (item &&
        typeof item === 'object' &&
        'nome' in item &&
        'horas' in item &&
        'tags' in item) {
        return true;
    }
    else {
        return false;
    }
}
function mostrarCursos2(data) {
    if (Array.isArray(data)) {
        data.forEach((item) => {
            if (isCurso(item)) {
            }
        });
    }
}
function validJSON(value) {
    try {
        JSON.parse(value);
        return true;
    }
    catch {
        return false;
    }
}
function isUserData(value) {
    if (value &&
        typeof value === 'object' &&
        ('nome' in value || 'email' in value || 'cpf' in value)) {
        return true;
    }
    else {
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
function handleKeyup({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData = { ...window.UserData, [target.id]: target.value };
        console.log(window.UserData);
        window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
const form = document.querySelector('#form');
form?.addEventListener('keyup', handleKeyup);
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    totalVendas(json);
}
fetchVendas();
function totalVendas(vendas) {
    vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
}
//# sourceMappingURL=script.js.map