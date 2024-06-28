export const getArticles = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/articulos`;
    const respAll = await fetch(url);
    const { pagination } = await respAll.json();

    const resp = await fetch(`${url}?limit=${pagination.totalItems}`);
    const { data } = await resp.json();

    const articles = data.map((article) => {
        const imageUrl = `${baseUrl}/${article.image}`;
        return {
            ...article,
            imageUrl
        }

    })
    
    articles.reverse()
    return articles;
}