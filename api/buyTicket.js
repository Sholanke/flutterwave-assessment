import { sumUp, ticketTotalPrice } from "../utils/Order";

export default function buyTicket({ body }) {
  return new Promise((resolve, reject) => {
    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount:
        sumUp(body.tickets_bought.map(ticketTotalPrice)) + body.value_added_tax,
      currency: "NGN",
      country: "NG",
      payment_options: "card",
      customer: {
        email: body.email,
        phone_number: body.phone,
        name: body.name
      },
      callback(data) {
        if (data.status === "successful") {
          resolve(data);
        }
      },
      onclose() {},
      customizations: {
        title: body.event.data.name,
        description: `Payment for '${body.event.data.name}' event, at ${body.event.data.venue}.`,
        logo:
          body.event.data.image ||
          "https://miro.medium.com/max/3150/1*Z1GByNW4KCR8HNCUjbgzdA.png"
      }
    });
  });
}
