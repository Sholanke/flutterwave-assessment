<template>
  <div class="event-date">
    <p class="event-date__title">Date</p>
    <time :datetime="singleEvent.start_time" class="_description">
      {{ eventStart }}
    </time>

    <p class="event-date__title">Social Links</p>
    <a class="event-date__social_link" href="http://www.nathanielcole.com">nathaniel.com</a>
    <a class="event-date__social_link" href="https://twitter.com/nathanielcole">
      twitter.com/nathanielcole
    </a>
    <a class="event-date__social_link" href="https://instagram.com/nathanielcole/">
      instagram.com/nathanielcole
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["singleEvent"]),
    eventStart() {
      return this.$moment(this.singleEvent.start_time).format(
        "dddd, MMMM Do YYYY, h:mma"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.event-date {
  &__title {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 15px;
  }
  ._description {
    font-size: 24px;
    line-height: 1.4;
    max-width: 446px;
    font-weight: 600;
    margin-bottom: 32px;
    display: block;
  }
  .event-date__social_link {
    display: block;
    margin-bottom: 10px;
    font-size: 17px;
    text-decoration: underline;
    font-weight: 500;
    color: var(--primary-color);
  }
}
</style>
