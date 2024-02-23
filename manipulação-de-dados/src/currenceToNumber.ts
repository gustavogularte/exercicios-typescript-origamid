export default function currenceToNumber(valor: string): number | null {
  const valorNumero = +valor.replaceAll('.', '').replace(',', '.');
  return isNaN(valorNumero) ? null : valorNumero;
}
