<template>
  <div class="order_modal">
    <OrderSelectTicket @closeOrderModal="closeOrderModal" />
    <OrderSummary />
  </div>
</template>

<script>
export default {
  methods: {
    closeOrderModal() {
      this.$emit("closeOrderModal");
    }
  },
};
</script>

<style lang="scss" scoped>
.order_modal {
  // position on entire body
  @include modalize;
  height: 100vh;
  overflow: auto;

  //grid layout
  display: flex;

  // for really big screens
  max-width: 1440px;
  background: #f2f2f2;

  @include mediaMaxWidth(844px) {
    flex-direction: column;
  }
}
</style>
