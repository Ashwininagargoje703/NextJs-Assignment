export function formatDateFromUnixTimestamp(unixTimestamp) {
  const date = new Date(unixTimestamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const year = date.getFullYear() % 100;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${convertUnixTimestampToMonthName(
    unixTimestamp
  )}/${year}`;

  return formattedDate;
}

export function convertUnixTimestampToMonthName(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = date.getMonth();

  const abbreviatedMonthName = monthNames[monthIndex];

  return abbreviatedMonthName;
}
