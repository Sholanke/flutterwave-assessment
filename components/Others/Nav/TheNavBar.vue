<template>
  <TheSectionWrapper class="nav__wrapper">
    <!-- nav -->
    <div class="nav _flex a_center j_between">
      <!-- nav logo -->
      <p class="nav__logo">
        <nuxt-link class="link" to="/">
          <img src="/assets/svg/logo.svg" />
        </nuxt-link>
      </p>
      <!-- nav links -->

      <div class="nav__links__wrapper" :class="{ is_open: menuIsOpen }">
        <div class="nav__links _flex a_center">
          <nuxt-link class="link" to="/">I didn’t get my tickets</nuxt-link>
          <a href="#" class="link base-button--default" to="/event">
            Create your own event
          </a>
        </div>
      </div>
      <button class="menu_button" @click="toggleMenuOpenState">
        <img
          :src="`/assets/svg/${menuIsOpen ? 'circle-close' : 'hamBurger'}.svg`"
        />
      </button>
    </div>
  </TheSectionWrapper>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false
    };
  },
  methods: {
    toggleMenuOpenState() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  padding-top: 26px;
  padding-bottom: 26px;

  &__wrapper {
    position: sticky;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.904);
    top: 0;
  }

  &__logo {
    font-weight: 700;
    font-size: 20px;
    font-style: italic;

    @include mobile {
      img {
        height: 30px;
      }
    }
  }
  &__links {
    &__wrapper {
      & + .menu_button {
        display: none;
        z-index: 1;
        position: relative;

        img {
          height: 35px;
          width: 35px;
        }
      }
      @include mediaMaxWidth(781px) {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0px;
        z-index: 1;

        // hide by default
        opacity: 0;
        pointer-events: none;
        transition: 0.3s ease-out;

        & + .menu_button {
          display: unset;
        }

        &.is_open {
          opacity: 1;
          pointer-events: unset;
        }

        .nav__links {
          background: #fff;
          padding: 20px;
          flex-direction: column;
          position: relative;
          margin-right: 10px;
          margin-left: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
        }
        &:before {
          content: "";
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          background: rgba(31, 22, 0, 0.466);
        }

        .link {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }

    .link {
      margin-left: 30px;

      @include mediaMaxWidth(781px) {
        margin-left: 0;
      }
    }
    .base-button--default {
      font-size: 14px;
    }
  }
}
</style>
