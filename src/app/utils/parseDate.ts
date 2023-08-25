export const parseDate = (value: number) => {
  const date = new Date(value * 1000);
  const year = date.getFullYear(),
    month = leadingZero(date.getMonth() + 1), // подсчет начинается с 0, поэтому увеличим на 1
    day = leadingZero(date.getDate()),
    hours = leadingZero(date.getHours()),
    minutes = leadingZero(date.getMinutes()),
    seconds = leadingZero(date.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

function leadingZero(token: number) {
  return ("0" + token).slice(-2);
}
