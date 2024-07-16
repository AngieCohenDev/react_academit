import { useEffect, useState } from "react";
import { getMainArticle } from "../helpers/getMainArticle";

export const useFetchMainArticles = () => {
    
    const [mainArticle, setMainArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMainArticles = async () => {
        const newMainArticle = await getMainArticle();
        setMainArticle(newMainArticle);
        setIsLoading(false)
    }

    useEffect(() => {
        getMainArticles();
    }, []);

    return {
        mainArticle,
        isLoading
    }
}
