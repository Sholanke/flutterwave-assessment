import axios from "axios";
import { BASE_URL } from "../utils/constants";

export default function getSingleEvent(id) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/events/${id}`;
    axios.get(url).then(resolve, reject);
  });
}
