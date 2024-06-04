import { useEffect, useState } from "react";
import { getArticles } from "../helpers/getArticles";

export const useFetchMainArticles = () => {
    
    const [articles, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getArticle = async () => {
        const newArticle = await getArticles();
        setArticle(newArticle);
        setIsLoading(false)
    }

    useEffect(() => {
        getArticle();
    }, []);

    return {
        articles,
        isLoading
    }
}
