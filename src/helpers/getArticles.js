export const getArticles = async () => {
    const url = `http://localhost:8080/articles`
    const resp = await fetch( url );

    const data = await resp.json();
    const articles = data.map( article => ({
        title: article.title,
        description: article.description
    }))
    console.log(articles);
    return articles;
}