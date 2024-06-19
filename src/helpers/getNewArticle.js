export const getNewArticle = async () => {
    const url = `http://localhost:8080/new-article`
    const resp = await fetch( url );

    const {data} = await resp.json();
    // const newArticles = data.map( newArticle => ({
    //     ...newArticle
    // }))

    console.log(data);
    data.reverse()
    const limitedData = data.slice(0, 3);  // Limitar la cantidad de datos a 3
    return limitedData;
}