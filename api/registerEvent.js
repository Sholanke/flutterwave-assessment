import axios from "axios";
import { BASE_URL } from "../utils/constants";

export default function registerForEvent({ body, eventID }) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/events/${eventID}/register`;
    axios.post(url, body).then(resolve, reject);
  });
}
