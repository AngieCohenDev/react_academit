import { useEffect, useState } from "react";
import { getCursos } from "../helpers/getCursos";
import { getVideos } from "../helpers/getVideos";

export const useFetchCursos = () => {
    
    const [cursos, setCursos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllCursos = async () => {
        const cursos = await getCursos();
        setCursos(cursos);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllCursos();
    }, []);

    return {
        cursos,
        isLoading
    }
}

export const useFetchVideos = (idCurso) => {
    
    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getOneCurso = async () => {
        const videoDelCurso = await getVideos(idCurso);
        setVideos(videoDelCurso);
        setIsLoading(false)
    }

    useEffect(() => {
        getOneCurso();
    }, []);

    return {
        videos,
        isLoading
    }
}
