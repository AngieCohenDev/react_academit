export const getItems = async () => {
    const url = `http://localhost:8080/headers`
    const resp = await fetch( url );

    const data = await resp.json();
    const items = data.map( item => ({
        item1: item.item1,
        item2: item.item2,
        item3: item.item3,
        item4: item.item4
    }))

    return items[0];
}