export const getVideos = async (idCurso) => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/videos?idcurso=${idCurso}`;
    const resp = await fetch(url);

    const videos = await resp.json();

    videos.map((video) => {
        const rutaVideo = `${baseUrl}/${video.rutaVideo}`;
        const rutaMiniatura = `${baseUrl}/${video.rutaMiniatura}`;
        video.rutaVideo = rutaVideo
        video.rutaMiniatura = rutaMiniatura
    })

    return videos;
}