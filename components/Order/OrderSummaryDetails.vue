<template>
  <div>
    <!-- tickets summary -->
    <Fragment v-for="(ticket, index) in cartTicketTypes" :key="index">
      <OrderSummaryRow
        v-if="ticket.numberOfTickets"
        :rowData="orderSummaryRowData(ticket)"
      />
    </Fragment>

    <!-- charges summary -->
    <div class="summary__charges">
      <OrderSummaryRow :rowData="subTotalRowData" />
      <OrderSummaryRow :rowData="vatTotalRowData" />
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
import { VAT } from "../../utils/constants";
import { NUMERALIZE } from "../../utils/helpers";
import { mapGetters } from "vuex";
import { sumUp, ticketTotalPrice } from "../../utils/Order";

export default {
  components: { Fragment },
  data() {
    return {
      VAT
    };
  },
  computed: {
    ...mapGetters(["singleEvent", "cartTicketTypes"]),
    subTotal() {
      return sumUp(this.cartTicketTypes.map(this.ticketTotalPrice));
    },
    subTotalRowData() {
      return {
        key: `Sub-total`,
        value: `₦${NUMERALIZE(this.subTotal, "0,0")}`
      };
    },
    vatTotalRowData() {
      return { key: `VAT`, value: `₦${NUMERALIZE(VAT, "0,0")}` };
    }
  },
  methods: {
    NUMERALIZE,
    ticketTotalPrice,
    orderSummaryRowData(ticket) {
      return {
        key: ticket.type,
        miniKey: ticket.numberOfTickets,
        value: `₦${NUMERALIZE(ticketTotalPrice(ticket), "0,0")}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.summary__charges {
  margin-top: 60px;
  border-top: 1px solid var(--border-color);

  .summary__row__type {
    font-weight: 600;
  }
}
</style>
