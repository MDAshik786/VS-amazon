export function addDaysToDate(inputDate, daysToAdd) {
  const date = new Date(inputDate);
  date.setDate(date.getDate() + daysToAdd);
  return date;
}