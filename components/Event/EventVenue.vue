<template>
  <div class="event-venue">
    <p class="event-venue__title">Venue</p>
    <p class="event-venue__description">
      {{ singleEvent.venue }}
    </p>
    <a href="#" class="event-venue__view-link _flex a_center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        class="event-venue__view-link__icon"
      >
        <use href="/assets/svg/map.svg#map" />
      </svg>
      View map for directions
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["singleEvent"])
  }
};
</script>

<style lang="scss" scoped>
.event-venue {
  &__title {
    text-transform: uppercase;
    font-size: 16px;
  }
  &__description {
    font-size: 24px;
    line-height: 1.4;
    max-width: 446px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 32px;
  }
  &__view-link {
    color: var(--primary-color);
    font-weight: 500;
    &__icon {
      margin-right: 10px;
    }
  }
}
</style>
