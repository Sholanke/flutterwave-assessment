import API from "./API";

export default function getTicketTypeForEvent(eventID) {
  const url = `ticket-types/events/${eventID}`;
  return API.get(url).then(resolve, reject);
}
