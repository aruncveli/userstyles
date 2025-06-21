const date = new Date();
const year = date.getFullYear().toString().substring(2);
const month = date.getMonth() + 1;
const day = date.getDate();
export default `${year}.${month.toString()}.${day.toString()}`;
