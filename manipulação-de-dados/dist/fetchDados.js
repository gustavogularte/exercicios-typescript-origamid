export default async function fetchDados(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Erro ${response.status}`);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.error(error.message);
        return null;
    }
}
//# sourceMappingURL=fetchDados.js.map