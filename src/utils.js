export const cityFilter = (data) => {
    const cities = [...new Set(data.map(item => {
        return item.company;
    }))]
    return cities;
}

export const sortData = (data, direction) => {
    console.log(direction);
    let sortedData = data.sort((a, b) => {

        if (a.status < b.status) {
            return direction === 'ascending' ? -1 : 1;
        }
        if (a.status > b.status) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
    return sortedData;
} 