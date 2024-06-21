export const getMainArticle = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/main-article?limit=${1}`;
    const respAll = await fetch(url);
    const { pagination } = await respAll.json();

    const resp = await fetch(`${url}&page=${pagination.pageCount}`);
    const { data } = await resp.json();

    const mainArticles = data.map((article) => {
        const imageUrl = `${baseUrl}/${article.image}`;  // Construct the full URL for the image
        return {
            ...article,
            imageUrl
        }
    });

    return mainArticles[0];
}
