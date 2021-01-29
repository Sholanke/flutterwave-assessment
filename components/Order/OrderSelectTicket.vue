<template>
  <div class="order__select-ticket">
    <!-- close button -->
    <button class="close-button _flex a_center" @click="closeOrderModal">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="icon">
        <use href="/assets/svg/close.svg#close" />
      </svg>
      Close
    </button>

    <!-- heading -->
    <h1 class="__heading">
      {{ singleEvent.name }}
    </h1>
    <time :datetime="singleEvent.start_time">
      {{ singleEventStartDate }}
    </time>

    <!-- ticket items list-->
    <div class="__ticket_items">
      <!-- ticket item -->
      <OrderTicketItem
        v-for="(ticketType, index) in cartTicketTypes"
        :key="index"
        :ticket="ticketType"
      />
      <p class="_nothing" v-if="noTicketTypes">
        This event has no Ticket types available
      </p>
    </div>
    <time class="__end_date">
      Ticket sales ends on
      {{ singleEventSalesEndDate }}
    </time>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["singleEvent", "cartTicketTypes"]),
    noTicketTypes() {
      return !this.cartTicketTypes.length;
    },
    singleEventSalesEndDate() {
      return this.formatTime(this.singleEvent.tickets_sale_end_date);
    },
    singleEventStartDate() {
      return this.formatTime(this.singleEvent.start_time);
    }
  },
  methods: {
    closeOrderModal() {
      this.$emit("closeOrderModal");
    },
    formatTime(time) {
      return this.$moment(time).format("Do MMMM YYYY - h:mmA");
    }
  }
};
</script>

<style lang="scss" scoped>
.order__select-ticket {
  flex: 1;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 70px 40px;

  @include mobile {
    padding: 20px 15px;
  }

  .close-button {
    padding: 12px 28px;
    background: #fff;
    box-shadow: 0 0 40px 10px var(--button-shadow);
    border-radius: 100vh;
    margin-bottom: 20px;
    font-size: 16px;

    .icon {
      margin-right: 6px;
    }
  }
  .__ticket_items {
    margin-top: 50px;
    border-top: 1px solid var(--border-color--ticket);
  }
  .__heading {
    font-size: 36px;
    margin-top: 60px;
    margin-bottom: 17px;
  }
  .__end_date {
    padding-top: 30px;
    font-style: italic;
    opacity: 0.6;
    letter-spacing: 0.5px;
    font-size: 14px;
    display: block;
    padding-bottom: 20px;

    @include mobile {
      padding-top: 10px;
    }
  }
  ._nothing {
    margin-top: 30px;
  }
}
</style>
