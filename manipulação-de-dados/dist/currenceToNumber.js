export default function currenceToNumber(valor) {
    const valorNumero = +valor.replaceAll('.', '').replace(',', '.');
    return isNaN(valorNumero) ? null : valorNumero;
}
//# sourceMappingURL=currenceToNumber.js.map