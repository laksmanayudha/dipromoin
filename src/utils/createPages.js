const createPages = (maxPage) => {
    let pages = [];
    for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
    }
    return pages;
}

export default createPages;