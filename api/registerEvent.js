import API from "./API";

export default function registerForEvent({ body, eventID }) {
  const url = `events/${eventID}/register`;
  return API.post(url, body).then(resolve, reject);
}
