export function ex2() {
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
}
//# sourceMappingURL=ex2.js.map