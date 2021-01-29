<template>
  <div class="register-modal">
    <div class="register-modal__header _flex a_center j_between">
      <p class="__heading">REGISTER FOR FREE</p>
      <button class="_button _flex" @click="closeRegistrationModal">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="icon"
        >
          <use href="/assets/svg/close.svg#close" />
        </svg>
      </button>
    </div>
    <form class="register-form" @submit="submit">
      <BaseInput
        class="register-form__input"
        label-text="Full name"
        placeholder="e.g Sholanke Olamide"
        :modelObject="registrationFormData"
        name="name"
        required
      />
      <BaseInput
        class="register-form__input"
        label-text="Email Address"
        placeholder="e.g sholankedaniel@gmail.com"
        name="email"
        required
        :modelObject="registrationFormData"
      />
      <BaseInput
        class="register-form__input"
        label-text="Phone Number"
        placeholder="e.g +234**********"
        name="phone"
        :modelObject="registrationFormData"
        required
      />
      <BaseButton class="register-form__button" :loading="isLoading">
        Register for event
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import registerForEvent from "@/api/registerEvent";

export default {
  data() {
    return { registrationFormData: {}, isLoading: false };
  },
  methods: {
    submit(ev) {
      const event = this.singleEvent;
      const body = this.registrationFormData;
      ev.preventDefault();

      // init loader
      this.initLoading();
      registerForEvent({
        body,
        eventID: event.id
      })
        .then(() => {
          alert(
            `You have successfully registered for ${event.name} at ${event.venue}`
          );
        })
        .finally(this.terminateLoading);
    },
    initLoading() {
      this.isLoading = true;
    },
    terminateLoading() {
      this.isLoading = false;
    },
    closeRegistrationModal() {
      this.$emit("closeRegistrationModal");
    }
  },
  computed: {
    ...mapGetters(["singleEvent"])
  }
};
</script>

<style lang="scss" scoped>
.register-modal {
  @include modalize;
  max-width: 470px;
  margin-top: 100px;
  padding: 40px;
  border-radius: 5px;

  &__header {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);

    .__heading {
      font-weight: 600;
    }

    ._button {
      svg {
        height: 25px;
        width: 25px;
      }
    }
  }

  .register-form {
    margin-top: 30px;

    &__input {
      margin-bottom: 25px;
    }
    &__button {
      width: 100%;
      padding: 18px 20px;
    }
  }
}
</style>
