<template>
  <fragment>
    <div v-if="allEvents">
      <h1 class="home__heading">The Best Events Happening Now.</h1>
      <div class="home__events">
        <HomeEvent
          v-for="(event, index) in allEvents"
          :event-data="event"
          :key="index"
        />
      </div>

      <img
        v-if="!loadedAllEvents"
        src="/assets/img/loading.gif"
        class="loader--medium"
        alt=""
        srcset=""
      />
    </div>
    <BaseLoader class="loader" v-else />
  </fragment>
</template>

<script>
import { mapGetters } from "vuex";
import { Fragment } from "vue-fragment";
import { onScrollToBottom } from "../../utils/helpers";

export default {
  components: { Fragment },
  computed: {
    ...mapGetters(["allEvents", "loadedAllEvents"])
  },
  methods: {
    loadMoreEvents() {
      this.$store.dispatch("fetchMoreEvents");
    }
  },
  mounted() {
    onScrollToBottom(() => {
      this.loadMoreEvents();
    });
  }
};
</script>

<style lang="scss" scoped>
.home__heading {
  font-size: 36px;
  font-weight: 600;
}
.home__events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-row-gap: 30px;
  margin-top: 40px;
  margin-bottom: 100px;

  @include mediaMaxWidth(939px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mobile {
    grid-template-columns: 1fr;
  }
}
.loader--medium {
  height: 100px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  opacity: 0.8;
  margin-bottom: 100px;
}
.loader {
  margin-top: 200px;
}
</style>
