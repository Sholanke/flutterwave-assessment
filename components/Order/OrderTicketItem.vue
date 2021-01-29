<template>
  <div class="order__ticket-item">
    <p class="__title">{{ ticket.type }}</p>
    <p class="__price">₦{{ pricePerTicket }} <small>per ticket</small></p>
    <div class="__controls _flex a_center">
      <button class="control" @click="decrementNumberOfTickets">-</button>
      <span class="number-of-tickets">{{ ticket.numberOfTickets }}</span>
      <button class="control" @click="incrementNumberOfTickets">+</button>
    </div>
  </div>
</template>

<script>
import { NUMERALIZE } from "../../utils/helpers";
import { DECREMENTER, INCREMENTER } from "../../utils/Order";

export default {
  props: {
    ticket: {
      required: true
    }
  },
  computed: {
    pricePerTicket() {
      return NUMERALIZE(this.ticket.perTicketPrice, "0,0");
    }
  },
  methods: {
    decrementNumberOfTickets() {
      this.updateNumberOfTikets(DECREMENTER);
    },
    incrementNumberOfTickets() {
      this.updateNumberOfTikets(n => INCREMENTER(n, this.ticket.qty_available));
    },
    updateNumberOfTikets(updateFunction) {
      const id = this.ticket.id;
      this.$store.dispatch("updateCartTicket", {
        ticketID: id,
        updateFunction
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  &__ticket-item {
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid var(--border-color--ticket);
    border-radius: 4px;
    align-items: center;

    @include mediaMaxWidth(1130px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
      background: var(--border-color--ticket);
      margin: 20px 0;
      border-bottom: none;
    }

    &:nth-child(even) {
      background: var(--border-color--ticket);
      border-bottom: 0;
    }
    .__title {
      font-weight: 500;
      font-size: 18px;

      @include mediaMaxWidth(1130px) {
        font-size: 20px;
      }
    }
    .__price {
      font-size: 19px;
      font-weight: 500;
      small {
        opacity: 0.8;
      }
    }
    .__controls {
      justify-content: flex-end;

      @include mediaMaxWidth(1130px) {
        padding: 10px 0;
      }
      input {
        width: fit-content;
      }
      .number-of-tickets {
        margin: 0 20px;
      }
      .control {
        font-size: 24px;
        background: #fff;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100vh;
        box-shadow: 0 0 100px 10px var(--border-color--ticket);
        line-height: 1;
      }
    }
  }
}
</style>
