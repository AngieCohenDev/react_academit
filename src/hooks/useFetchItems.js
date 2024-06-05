import { useEffect, useState } from "react";
import { getItems } from "../helpers/getItems";

export const useFetchItems = () => {
    
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getItem = async () => {
        const newItem = await getItems();
        setItems(newItem);
        setIsLoading(false)
    }

    useEffect(() => {
        getItem();
    }, []);

    return {
        items,
        isLoading
    }
}
