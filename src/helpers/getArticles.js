export const getArticles = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/articles/`;
    const resp = await fetch(url);
    const data = await resp.json();

    const articles = data.map((article) => {
        const imageUrl = `${baseUrl}/${article.image}`;
        return {
            id: article.id,
            title: article.title,
            description: article.description,
            imageUrl: imageUrl
        }

    })
    console.log(articles);
    return articles;
}