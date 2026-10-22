// Fixed time zone keeps the server and client render in sync
const TIME_ZONE = "Europe/Prague";

export function formatDate(isoDate: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: TIME_ZONE,
  }).format(new Date(isoDate));
}
