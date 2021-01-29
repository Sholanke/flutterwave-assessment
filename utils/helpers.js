import Vue from "vue";
import numeral from "numeral";

Vue.use(numeral);

// ---- return number with k or m -----
export const NUMERALIZE = (rawNumber, format = "") => {
  const rawNumberLength = `${rawNumber}`.length;

  //---- prevent formats like 1000k -----
  if (!format) {
    if (rawNumberLength >= 7) {
      format = "0.0a";
    } else if (rawNumberLength >= 4) {
      format = "0a";
    }
  }
  return numeral(rawNumber).format(format);
};

// ---- event class ----
export const sortTicketsByPrice = ticketsArray => {
  const sortedTickets = [...ticketsArray].sort(
    (previousTicket, currentTicket) =>
      previousTicket.price - currentTicket.price
  );
  return sortedTickets;
};

// --- throttle function---
export const debouncer = (fn, debounceTimeOut) => {
  let timeOut;
  const caller = args => {
    const callFn = () => fn(args);
    timeOut && clearTimeout(timeOut);
    timeOut = setTimeout(callFn, debounceTimeOut);
  };
  return caller;
};

// --- check if user is at bottom of the page ---
const isAtBottom = () => {
  return (
    document.documentElement.scrollHeight - window.scrollY ===
    window.innerHeight
  );
};

export const onScrollToBottom = callback => {
  const scrollListener = e => {
    isAtBottom() && callback(e);
  };
  const debouncedScrollListener = debouncer(scrollListener, 750);
  window.addEventListener("scroll", debouncedScrollListener);
};
