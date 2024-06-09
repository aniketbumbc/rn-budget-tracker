export function getFormatDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinus(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
