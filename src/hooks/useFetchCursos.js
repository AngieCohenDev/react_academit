import { useEffect, useState } from "react";
import { getCursos } from "../helpers/getCursos";

export const useFetchCursos = () => {
    
    const [cursos, setCursos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCurso = async () => {
        const cursos = await getCursos();
        setCursos(cursos);
        setIsLoading(false)
    }

    useEffect(() => {
        getCurso();
    }, []);

    return {
        cursos,
        isLoading
    }
}
