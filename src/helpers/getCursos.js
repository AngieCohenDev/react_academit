export const getCursos = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/cursos`;
    const respAll = await fetch(url);
    const { pagination } = await respAll.json();

    const resp = await fetch(`${url}?limit=${pagination.totalItems}`);
    const { data } = await resp.json();

    const cursos = data.map((curso) => {
        const fotografiaDelCurso = `${baseUrl}/${curso.fotografiaDelCurso}`;  // Construct the full URL for the image
        return {
            ...curso,
            fotografiaDelCurso
        }
    });
    return cursos;
}

// export const getCurso = async (id) => {
//     const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
//     const url = `${baseUrl}/cursos/${id}`;
//     const resp = await fetch(url);

//     const dato = await resp.json();
//     const fotografiaDelCurso = `${baseUrl}/${dato.fotografiaDelCurso}`;


//     const curso = {
//         ...dato,
//         fotografiaDelCurso,
//     }

//     return curso;
// }
