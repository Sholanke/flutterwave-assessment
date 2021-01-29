<template>
  <TheSectionWrapper>
    <Fragment v-if="singleEvent">
      <div class="event">
        <EventDetails @makePayment="buyTicket" />
        <EventLocation />
      </div>
      <Order v-if="orderModalIsOpen" @closeOrderModal="closeOrderModal" />
      <RegisterForFreeEvent
        v-if="registrationModalIsOpen"
        @closeRegistrationModal="closeRegistrationModal"
      />
    </Fragment>
    <BaseLoader class="loader" v-else />
  </TheSectionWrapper>
</template>

<script>
import { mapGetters } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment
  },
  head: {
    script: [{ src: "https://checkout.flutterwave.com/v3.js" }]
  },
  data() {
    return {
      orderModalIsOpen: false,
      registrationModalIsOpen: false
    };
  },
  mounted() {
    this.$store.dispatch("fetchSingleEvent", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["singleEvent"])
  },
  methods: {
    buyTicket(typeIsFree) {
      typeIsFree ? this.openRegisterModal() : this.openOrderModal();
    },
    openOrderModal() {
      // SAFE : both modals should not be open at the same time
      this.closeRegistrationModal();
      this.orderModalIsOpen = true;
    },
    openRegisterModal() {
      // SAFE : both modals should not be open at the same time
      this.closeOrderModal();
      this.registrationModalIsOpen = true;
    },
    closeOrderModal() {
      this.orderModalIsOpen = false;
    },
    closeRegistrationModal() {
      this.registrationModalIsOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.event {
  margin-top: 80px;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
  animation-name: fadeUp;
  animation-duration: 0.5s;
}
.loader {
  margin-top: 200px;
}
</style>
