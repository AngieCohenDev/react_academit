export const getItems = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/headers/`;
    const resp = await fetch(url);
    const data = await resp.json();

    const items = data.map((item) => {
        const imageUrl = `${baseUrl}/${item.logo}`;
        return {
            id: item.id,
            item1: item.item1,
            item2: item.item2,
            item3: item.item3,
            item4: item.item4,
            logo: imageUrl
        }

    })

    return items[0];
}