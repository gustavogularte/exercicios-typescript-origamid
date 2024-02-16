export function ex10() {
  // 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
  // 2 - Defina a interface da API
  // 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
  // 4 - Use Type Guards para garantir a Type Safety do código
  // 5 - Preencha os dados da API na tela.
  async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    mostrarCursos(json);
  }
  fetchCursos();

  interface Curso {
    nome: string;
    horas: number;
    tags: string[];
  }

  function isCurso(item: unknown): item is Curso {
    if (
      item &&
      typeof item === 'object' &&
      'nome' in item &&
      'horas' in item &&
      'tags' in item
    ) {
      return true;
    } else {
      return false;
    }
  }

  function mostrarCursos(data: any) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (isCurso(item)) {
          console.log(item.horas);
        }
      });
    }
  }
}
