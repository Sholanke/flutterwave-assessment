import API from "./API";

export default function getSingleEvent(id) {
  const url = `events/${id}`;
  return API.get(url);
}
