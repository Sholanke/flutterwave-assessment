import API from "./API";

export default function getEvents(page = 1) {
  const url = `events?page=${page}`;
  return API.get(url);
}
