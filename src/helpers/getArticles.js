export const getArticles = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/articulos/`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const articles = data.map((article) => {
        const imageUrl = `${baseUrl}/${article.image}`;
        return {
            ...article,
            imageUrl
        }

    })
    console.log(articles);
    articles.reverse()
    return articles;
}