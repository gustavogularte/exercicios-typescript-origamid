export function ex10() {
    async function fetchCursos() {
        const response = await fetch('https://api.origamid.dev/json/cursos.json');
        const json = await response.json();
        mostrarCursos(json);
    }
    fetchCursos();
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
    function mostrarCursos(data) {
        if (Array.isArray(data)) {
            data.forEach((item) => {
                if (isCurso(item)) {
                    console.log(item.horas);
                }
            });
        }
    }
}
//# sourceMappingURL=ex10.js.map