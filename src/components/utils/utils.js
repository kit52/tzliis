export function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
}
export function validatePassword(password) {
    const regExp = /^.[a-zA-Z0-9]+[^\s]{8,}$/;
    return regExp.test(password);
}
export function dateTransform(date) {
    const arr = ['января', "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const a = date.split("-");
    const mount = arr[a[1]];
    return `${a[2]} ${mount} ${a[0]}`;
}
export function sortDataStars(a, b) {
    if (a.stars < b.stars) return -1;
    else if (a.stars > b.stars) return 1;
    return 0;
}
export function sortDataPrice(a, b) {
    if (a.priceAvg < b.priceAvg) return -1;
    else if (a.priceAvg > b.priceAvg) return 1;
    return 0;
}
export function getDate(date) {
    const years = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate()
    if (mounth < 10) {
        mounth = `0 ${mounth}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    return `${years}-${mounth}-${day}`;
}