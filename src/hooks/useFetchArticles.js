import { useEffect, useState } from "react";
import { getArticles } from "../helpers/getArticles";

export const useFetchArticles = () => {

    const [articles, setArticle] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getArticle = async () => {
        try {
            const newArticle = await getArticles();
            setArticle(newArticle);
            setIsLoading(false)
        } catch (error) {
            setError(true)
            throw Error(error)
        }
    }

    useEffect(() => {
        getArticle();
    }, []);

    return {
        articles,
        error,
        isLoading
    }
}
