export const getNewArticle = async () => {
    const url = `http://localhost:8080/new-article`
    const respAll = await fetch( url );
    const { pagination } = await respAll.json();

    const resp = await fetch( `${url}?limit=${pagination.totalItems}` );
    const { data } = await resp.json();

    console.log(data);
    data.reverse()
    const limitedData = data.slice(0, 3);  // Limitar la cantidad de datos a 3
    return limitedData;
}