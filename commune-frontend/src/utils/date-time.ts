export function formatTime(timestamp: string) {
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
}

export function getCurrentDateTime(): string {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  let month: number | string = now.getMonth() + 1;
  let day: number | string = now.getDate();
  let hours: number | string = now.getHours();
  let minutes: number | string = now.getMinutes();
  let seconds: number | string = now.getSeconds();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const formattedDateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}
