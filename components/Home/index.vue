<template>
  <TheSectionWrapper>
    <!-- home page -->
    <div class="home">
      <HomeEvents />
    </div>
  </TheSectionWrapper>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    !this.allEvents && this.$store.dispatch("fetchMoreEvents");
  },
  computed: {
    ...mapGetters(["allEvents"])
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 125px;

  @include mobile {
    margin-top: 60px;
  }
}
</style>
