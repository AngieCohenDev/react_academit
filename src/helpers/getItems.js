export const getItems = async () => {
    const baseUrl = 'http://localhost:8080';  // Define the base URL of your server
    const url = `${baseUrl}/headers?limit=${1}`;
    const respAll = await fetch(url);
    const { pagination } = await respAll.json();

    const resp = await fetch(`${url}&page=${pagination.pageCount}`);
    const { data } = await resp.json();

    const items = data.map((item) => {
        const rutaLogo = `${baseUrl}/${item.rutaLogo}`;
        return {
            ...item,
            rutaLogo
        }

    })

    return items[0];
}