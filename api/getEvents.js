import axios from "axios";
import { BASE_URL } from "../utils/constants";

export default function getEvents(page = 1) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/events?page=${page}`;
    axios.get(url).then(resolve, reject);
  });
}
