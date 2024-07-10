export const getVideos = async (idCurso) => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/videos?idcurso=${idCurso}`;
    const resp = await fetch(url);

    const videos = await resp.json();

    videos.map((video) => {
        const pathDelVideo = `${baseUrl}/${video.pathDelVideo}`;
        const miniatura = `${baseUrl}/${video.miniatura}`;
        video.pathDelVideo = pathDelVideo
        video.miniatura = miniatura
    })

    console.log(videos);

    return videos;
}