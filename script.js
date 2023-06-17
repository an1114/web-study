const getDateString = () => {
    const date = new Date();
    return `西暦${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${["日", "月", "火", "水", "木", "金", "土"][date.getDay()]}曜日`;
}
const getNewtContent = (callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://web-study2.cdn.newt.so/v1/diablo/class');
    // https://<spaceUid>.cdn.newt.so/v1/<AppUid>/<ModelUid>
    xhr.setRequestHeader("Authorization", 'Bearer Hv1mUOrJTismKFn7SU7P3g5rGTVpeFfUM2v-FO0hKQI');
    // 'Authorization', 'Bearer <APIToken>
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}`);
        } else {
            callback(xhr.response.items);
        }
    };
    xhr.send();
}
