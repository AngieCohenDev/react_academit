export const getCursos = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/cursos`;
    const respAll = await fetch(url);
    const { pagination } = await respAll.json();

    const resp = await fetch(`${url}?limit=${pagination.totalItems}`);
    const { data } = await resp.json();

    const cursos = data.map((curso) => {
        const video = `${baseUrl}/${curso.video}`;  // Construct the full URL for the image
        return {
            ...curso,
            video
        }
    });

    console.log(cursos);
    return cursos;
}
