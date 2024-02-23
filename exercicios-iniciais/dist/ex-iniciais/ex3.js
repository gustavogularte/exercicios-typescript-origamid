export function ex3() {
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
}
//# sourceMappingURL=ex3.js.map