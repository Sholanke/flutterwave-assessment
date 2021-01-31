import { DECREMENTER, INCREMENTER, sumUp, ticketTotalPrice } from "../utils/Order";

// incrementer tests
test("Should increment number ", () => {
  const safeNumber = 0;
  const safeNumberPlusOne = INCREMENTER(safeNumber);
  expect(safeNumberPlusOne).toBe(safeNumber + 1);
});

test("Should not increment past max number ", () => {
  const safeNumber = 0;
  const safeNumberPlusOne = INCREMENTER(safeNumber, 0);
  expect(safeNumberPlusOne).toBe(safeNumber);
});

// decrementer tests
test("Should decrement number ", () => {
  const safeNumber = 2;
  const safeNumberPlusOne = DECREMENTER(safeNumber);
  expect(safeNumberPlusOne).toBe(safeNumber - 1);
});

test("Should not decrement past 0 ", () => {
  const safeNumber = 0;
  const safeNumberPlusOne = DECREMENTER(safeNumber);
  expect(safeNumberPlusOne).toBe(safeNumber);
});

//tickets total price
test("Should get ticket total price", () => {
  const safeTicket = {
    numberOfTickets: 1,
    perTicketPrice: 100
  };
  const safeTicketTotalPrice = ticketTotalPrice(safeTicket);
  expect(safeTicketTotalPrice).toBe(
    safeTicket.numberOfTickets * safeTicket.perTicketPrice
  );
});

//sum up array of numbers
test("Should sum up array of numbers", () => {
  const safeArrayOfNumber = [1, 2, 3];
  const safeSumUp = sumUp(safeArrayOfNumber);
  expect(safeSumUp).toBe(6);
});
