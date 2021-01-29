<template>
  <form class="order-summary__form" @submit="submit">
    <BaseInput
      class="order-summary__form__input"
      label-text="Full Name"
      placeholder="eg. Sholanke Olamide"
      name="name"
      :modelObject="cartFormData"
      required
    />
    <BaseInput
      class="order-summary__form__input"
      label-text="Email Address"
      placeholder="e.g you@example.com"
      name="email"
      required
      :modelObject="cartFormData"
    />
    <BaseInput
      class="order-summary__form__input"
      label-text="Phone number"
      type="number"
      placeholder="e.g +234**********"
      name="phone"
      :modelObject="cartFormData"
      required
    />
    <input type="submit" v-show="false" />
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import BaseInput from "../Others/Inputs/BaseInput.vue";

export default {
  components: { BaseInput },
  methods: {
    submit(ev) {
      ev.preventDefault();
      this.$emit("submit");
    }
  },
  computed: {
    ...mapGetters(["cartFormData"])
  }
};
</script>

<style lang="scss" scoped>
.order-summary__form {
  margin-top: 20px;
  margin-bottom: 20px;

  &__input {
    margin-bottom: 30px;
  }
}
</style>
