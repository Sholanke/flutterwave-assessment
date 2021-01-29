<template>
  <button class="base-button--default" :disabled="disabled" @click="emitClickEvent">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    isLoading: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    emitClickEvent(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>

