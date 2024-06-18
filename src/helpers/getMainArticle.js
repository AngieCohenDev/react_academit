export const getMainArticle = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/main-article/`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const articles = data.map((article) => {
        const imageUrl = `${baseUrl}/${article.image}`;  // Construct the full URL for the image
        return {
            ...article,
            imageUrl
        }
    });

    console.log(articles);
    return articles;
}
