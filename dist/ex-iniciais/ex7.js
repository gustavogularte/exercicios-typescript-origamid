export function ex7() {
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
}
//# sourceMappingURL=ex7.js.map