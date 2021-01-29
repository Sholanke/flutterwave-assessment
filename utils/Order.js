// ----- function to update ticket type ------
export const cartTicketTypeState = function(type) {
  return {
    ...type,
    type: type.name,
    perTicketPrice: type.price,
    numberOfTickets: 0
  };
};

export const ticketTotalPrice = ticket =>
  ticket.numberOfTickets * ticket.perTicketPrice;

// ------ function to decrement a number only when the number is greater than 0 --------.
export const DECREMENTER = n => (n > 0 ? n - 1 : 0);

// ----- function to INCREMENTER a number. ------
export const INCREMENTER = (n, max = Infinity) => (n < max ? n + 1 : n);

export const sumUp = arrayOfNumbers =>
  arrayOfNumbers.reduce((acc, current) => acc + current, 0);
