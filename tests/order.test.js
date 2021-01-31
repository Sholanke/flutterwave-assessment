import { DECREMENTER, INCREMENTER } from "../utils/Order";

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
