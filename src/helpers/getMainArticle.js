export const getMainArticle = async () => {
    const url = `http://localhost:8080/main-article`
    const resp = await fetch( url );

    const data = await resp.json();
    const articles = data.map( article => ({
        title: article.title,
        description: article.description,
        textButton: article.textButton
    }))
    console.log(articles);
    return articles;
}