<template>
  <aside class="order-summary">
    <h3 class="order-summary__heading _flex a_center">
      <button
        v-if="showBackButton"
        class="button--icon-button _flex a_center"
        @click="goToPreviousStep"
      >
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
          <use href="/assets/svg/leftArrow.svg#leftArrow" />
        </svg>
      </button>
      Order summary
    </h3>

    <!-- if cart has items  -->
    <div v-show="cartHasItems">
      <OrderSummaryForm v-show="showRegistrationForm" @submit="goToNextStep" />
      <OrderSummaryDetails v-show="showOrderSummary" />
      <OrderSummaryRow fsLarge :rowData="totalAmountRowData" />
      <BaseButton class="button--large" @click="goToNextStep">
        Continue
      </BaseButton>

      <!-- guarantee -->
      <div class="order-summary__guarantee _flex a_center">
        <div class="icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <use href="/assets/svg/verified.svg#verified" />
          </svg>
        </div>
        <div class="text">
          <p>100% customer protection</p>
          <small>Money back guarantee</small>
        </div>
      </div>
      <!-- end of guarantee -->
    </div>
    <!-- end of condition -->

    <!-- if cart has no items -->
    <div v-show="!cartHasItems" class="empty_cart">
      <img src="/assets/img/empty.gif" alt="empty illustration" />
      <p>Your Cart is currently Empty</p>
    </div>
    <!-- end of condition -->
  </aside>
</template>

<script>
import { VAT } from "../../utils/constants";
import {
  DECREMENTER,
  INCREMENTER,
  sumUp,
  ticketTotalPrice
} from "../../utils/Order";
import { mapGetters } from "vuex";
import { NUMERALIZE } from "../../utils/helpers";

export default {
  data() {
    return {
      maxIndex: 1,
      activeStep: 0 // 0 - summary, 1 - registration form
    };
  },
  methods: {
    NUMERALIZE,
    updateActiveStep(updateTo) {
      this.activeTab = updateTo;
    },
    goToNextStep() {
      this.activeStep >= this.maxIndex
        ? this.$store.dispatch("buyTicket")
        : (this.activeStep = INCREMENTER(this.activeStep));
    },
    goToPreviousStep() {
      this.activeStep = DECREMENTER(this.activeStep);
    }
  },
  computed: {
    ...mapGetters(["cartTicketTypes", "cartHasItems"]),
    showOrderSummary() {
      return this.activeStep === 0;
    },
    showRegistrationForm() {
      return this.activeStep === 1;
    },
    showBackButton() {
      return !!this.activeStep;
    },
    totalAmount() {
      //vat + total Price for tickets ( subtotal)
      const subTotal = sumUp(this.cartTicketTypes.map(ticketTotalPrice));
      return subTotal + VAT;
    },
    totalAmountRowData() {
      return {
        key: "Total payment",
        value: `₦${NUMERALIZE(this.totalAmount, "0,0")}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.order-summary {
  background: #fff;
  max-width: 470px;
  width: 100%;
  flex-shrink: 0;
  padding-top: 50px;
  padding-right: 40px;
  padding-left: 40px;
  box-shadow: 0px 4px 4px rgba(4, 23, 43, 0.068);
  padding-bottom: 100px;
  position: sticky;
  top: 0;

  @include mediaMaxWidth(844px) {
    margin-right: auto;
    margin-left: auto;
    position: unset;
  }
  @include mobile {
    padding-top: 30px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 6px 6px 0 0;
  }

  &__heading {
    padding-bottom: 30px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(12, 23, 37, 0.08);

    .button--icon-button {
      margin-right: 15px;

      svg {
        color: #000;
      }
    }
  }
  .order-summary__guarantee {
    margin-top: 27px;
    .icon {
      height: 26px;
      width: 26px;
      margin-right: 10px;
    }
    .text {
      p {
        font-weight: 500;
        font-size: 14px;
      }
      small {
        opacity: 0.7;
        font-size: 12px;
      }
    }
  }
  .button--large {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 15px;
    margin-top: 20px;
  }
  .empty_cart {
    margin-top: 100px;
    img {
      width: 100%;
      max-width: 150px;
      margin-right: auto;
      margin-left: auto;
      display: block;
    }
    p {
      text-align: center;
      margin-top: 25px;
      font-weight: 600;
    }
  }
}
</style>
