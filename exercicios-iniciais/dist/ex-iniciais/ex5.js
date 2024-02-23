export function ex5() {
    async function fetchCursos() {
        const response = await fetch('https://api.origamid.dev/json/cursos.json');
        const data = await response.json();
        mostrarCursos(data);
    }
    fetchCursos();
    function mostrarCursos(cursos) {
        cursos.forEach((curso) => {
            const color = curso.nivel === 'iniciante' ? 'blue' : 'red';
            console.log(`<h1 style="color: ${color};">${curso.nome}</h1>`);
        });
    }
}
//# sourceMappingURL=ex5.js.map