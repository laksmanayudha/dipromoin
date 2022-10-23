const getToday = () => {
    let today = new Date();
    today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return today;
}

export default getToday;