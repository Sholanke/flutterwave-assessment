<template>
  <router-link
    :to="{ path: 'event', query: { id: eventData.id } }"
    class="home-event"
  >
    <div class="home-event__image-holder">
      <p class="event__tag _flex a_center" v-if="eventData.is_free">Free</p>
      <img
        v-if="eventData.image"
        :src="eventData.image"
        class="event__image"
        alt="event-image"
      />
    </div>
    <div class="home-event__text-holder">
      <div class="_flex a_center j_between">
        <time :datetime="eventData.start_time" class="event__date">
          {{ eventStartTime }}
        </time>

        <p class="event__tag">{{ eventData.tags }}</p>
      </div>

      <p class="event__title">
        {{ eventData.name }}
      </p>
      <div class="_flex a_center j_between">
        <p class="event__description">
          {{ eventData.description }}
        </p>
        <p class="_flex a_center event__icon-text">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use href="/assets/svg/ticket.svg#ticket" />
          </svg>
          {{ numberOfTickets }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { NUMERALIZE } from "../../utils/helpers";

export default {
  props: {
    eventData: { required: true }
  },
  computed: {
    numberOfTickets() {
      const rawNumberOfTickets = this.eventData.num_of_tickets;
      return NUMERALIZE(rawNumberOfTickets);
    },
    eventStartTime() {
      return this.$moment(this.eventData.start_time).format(
        "Do MMMM YYYY, h:mma"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.home-event {
  box-shadow: 0 0 40px 10px rgba(126, 150, 160, 0.158);
  display: inline-block;
  width: 100%;
  animation-name: fadeUp;
  animation-duration: 0.5s;

  &:hover {
    .home-event__image-holder {
      filter: brightness(0.7);
      .event__image {
        transform: scale(3);
        transition-duration: 50s;
      }
    }
  }

  .home-event__image-holder {
    height: 200px;
    background: #fff;
    background-image: url("https://d35z3p2poghz10.cloudfront.net/apps/thirdparty/rave-payments/rave%20header.png");
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition-duration: 3s;

    .event {
      &__image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition-duration: inherit;
      }
      &__tag {
        padding: 4px 10px;
        background: var(--primary-color);
        color: #fff;
        height: 60px;
        width: 60px;
        right: 15px;
        position: absolute;
        z-index: 1;
        font-weight: 600;
        justify-content: center;
        clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
      }
    }
  }
  .home-event__text-holder {
    padding: 20px;
    padding-bottom: 40px;

    .event {
      &__tag {
        padding: 5px 10px;
        color: var(--primary-color);
        background: var(--primary-color--transparenter);
        font-weight: 500;
        font-size: 15px;
      }
      &__date {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
      }
      &__title {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 600;
      }
      &__description {
        margin-right: 20px;
        line-height: 1.6;
      }
      &__icon-text {
        font-weight: 600;
        color: rgb(0, 197, 82);
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
