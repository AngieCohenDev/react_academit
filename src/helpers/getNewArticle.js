export const getNewArticle = async () => {
    const url = `http://localhost:8080/new-article`
    const resp = await fetch( url );

    const {data} = await resp.json();
    const newArticles = data.map( newArticle => ({
        ...newArticle
    }))
    console.log(newArticles);
    newArticles.reverse()
    return newArticles;
}