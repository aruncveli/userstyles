const date = Temporal.Now.plainDateISO();
const year = date.year.toString().slice(2);
const { month, day } = date;

export default `${year}.${month}.${day}`;
