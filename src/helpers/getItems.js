export const getItems = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/headers/`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const items = data.map((item) => {
        const logo = `${baseUrl}/${item.logo}`;
        return {
            ...item,
            logo
        }

    })

    items.reverse()

    return items[0];
}