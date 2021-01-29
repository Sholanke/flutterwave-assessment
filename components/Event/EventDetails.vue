<template>
  <EventGrid>
    <div class="event-details__text_holder">
      <!-- event date -->
      <time :datetime="singleEvent.start_time" class="event-details__date">
        {{ eventStartTime }}
      </time>
      <!-- event title -->
      <p class="event-details__title">{{ singleEvent.name }}</p>
      <!-- event description  -->
      <div class="event-details__description">
        {{ singleEvent.description }}
      </div>

      <!-- event price range -->
      <p class="event-details__price_range">
        ₦{{ MIN_TICKET_PRICE }}
        {{ !minEqualsMax ? `– ₦${MAX_TICKET_PRICE}` : "" }}
      </p>

      <!-- buy ticket button -->

      <BaseButton class="event-details__buy_button" @click="makePayment">
        {{ buyTicketButtonText }}
      </BaseButton>
    </div>
    <div class="event-details__image_holder">
      <img
        v-if="singleEvent.image"
        :src="singleEvent.image"
        alt="event-image"
        srcset=""
      />
    </div>
  </EventGrid>
</template>

<script>
import { mapGetters } from "vuex";
import { NUMERALIZE } from "../../utils/helpers";

export default {
  methods: {
    makePayment() {
      this.$emit("makePayment", this.singleEvent.is_free);
    }
  },
  computed: {
    ...mapGetters(["singleEvent", "cartTicketTypes", "ticketTypes"]),
    MAX_TICKET_PRICE() {
      return NUMERALIZE([...this.ticketTypes].pop()?.price || 0, "0,0");
    },
    MIN_TICKET_PRICE() {
      return NUMERALIZE([...this.ticketTypes].shift()?.price || 0, "0,0");
    },
    minEqualsMax() {
      return this.MIN_TICKET_PRICE === this.MAX_TICKET_PRICE;
    },
    buyTicketButtonText() {
      return this.singleEvent.is_free ? "Register for event" : "Buy ticket";
    },
    eventStartTime() {
      return this.$moment(this.singleEvent.start_time).format("Do MMMM YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.event-details {
  &__text_holder {
    .event-details {
      &__date {
        font-size: 18px;
      }
      &__title {
        font-size: 36px;
        padding: 23px 0 20px 0;
        font-weight: 700;
      }
      &__description {
        padding-bottom: 70px;
        line-height: 1.8;
        font-style: italic;
        font-size: 18px;

        @include mobile {
          padding-bottom: 35px;
        }
      }
      &__price_range {
        padding-bottom: 25px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1;
      }
      &__buy_button {
        width: 100%;
        padding: 18px 20px;
        font-size: 16px;
        max-width: 348px;
      }
    }
  }
  &__image_holder {
    background-image: url("https://miro.medium.com/max/3150/1*Z1GByNW4KCR8HNCUjbgzdA.png");
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    min-height: 200px;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
