export const getCursos = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/cursos/`;
    const resp = await fetch(url);
    const data = await resp.json();

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
