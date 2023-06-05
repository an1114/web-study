const getDateString = () => {
    const date = new Date();
    return `西暦${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${["日", "月", "火", "水", "木", "金", "土"][date.getDay()]}曜日`;
}