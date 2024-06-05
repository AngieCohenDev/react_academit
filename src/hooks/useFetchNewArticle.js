import { useEffect, useState } from "react";
import { getNewArticle } from "../helpers/getNewArticle";

export const useFetchNewArticles = () => {
    
    const [newArticles, setNewArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getArticle = async () => {
        const newArticle = await getNewArticle();
        setNewArticles(newArticle);
        setIsLoading(false)
    }

    useEffect(() => {
        getArticle();
    }, []);

    return {
        newArticles,
        isLoading
    }
}
