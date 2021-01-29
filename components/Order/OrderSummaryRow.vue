<template>
  <div class="order-summary__row _flex a_center j_between">
    <p
      class="order-summary__row__type _flex a_center j_between"
      :class="{ 'fs-large': fsLarge }"
    >
      <small v-if="rowData.miniKey" class="__number_of_tickets">
        {{ rowData.miniKey }}
      </small>
      {{ rowData.key }}
    </p>
    <p class="order-summary__row__price" :class="{ 'fs-large': fsLarge }">
      {{ rowData.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      required: true
    },
    fsLarge: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.fs-large {
  font-size: 20px;
}
.order-summary {
  &__row {
    padding: 20px 0;
    border-top: 1px solid var(--border-color--ticket);

    &:first-of-type {
      border-top: 0;
    }

    &__type {
      .__number_of_tickets {
        font-size: 17px;
        font-weight: 600;
        margin-right: 10px;
      }
      &.fs-large {
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
      }
    }
    &__price {
      &.fs-large {
        font-weight: 500;
      }
    }
  }
}
</style>
