export function ex9() {
    function arredondarCima(valor) {
        if (typeof valor === 'number') {
            return Math.ceil(valor);
        }
        else {
            return `${Math.ceil(+valor)}`;
        }
    }
}
//# sourceMappingURL=ex9.js.map