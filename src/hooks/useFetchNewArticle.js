import { useEffect, useState } from "react";
import { getNewArticle } from "../helpers/getNewArticle";

export const useFetchArticles = () => {
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getArticle = async () => {
        const newArticle = await getNewArticle();
        setArticles(newArticle);
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
