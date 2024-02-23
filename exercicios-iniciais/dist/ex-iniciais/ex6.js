export function ex6() {
    const link = document.getElementById('origamid');
    if (link instanceof HTMLAnchorElement) {
        link.href = link.href.replace('http://', 'https://');
    }
}
//# sourceMappingURL=ex6.js.map