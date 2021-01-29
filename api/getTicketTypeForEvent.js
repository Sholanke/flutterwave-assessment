import axios from "axios";
import { BASE_URL } from "../utils/constants";

export default function getTicketTypeForEvent(eventID) {
  const url = `${BASE_URL}/ticket-types/events/${eventID}`;
  return new Promise((resolve, reject) => {
    axios.get(url).then(resolve, reject);
  });
}
