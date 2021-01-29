<template>
  <label class="input--default__label">
    <p v-if="labelText" class="label_text">{{ labelText }}</p>
    <input
      class="input--default"
      v-model="modelObject[name]"
      v-bind="{ ...$props, ...$attrs }"
    />
  </label>
</template>

<script>
export default {
  props: {
    labelText: {
      required: false
    },
    modelObject: {
      required: false,
      default() {
        return {};
      }
    },
    name: {
      required: false,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input--default {
  display: block;
  padding: 15px 20px;
  background: var(--background-color--input);
  border: 1px solid var(--border-color--input);
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  transition: 0.2s ease-out;

  &:focus {
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 0 5px var(--primary-color--transparent);
    background: #fff;

    &:invalid {
      border: 1px solid tomato;
      box-shadow: 0 0 0 5px rgba(255, 99, 71, 0.171);
    }
  }

  &__label {
    display: block;

    .label_text {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }

  &::placeholder {
    color: var(--color--placeholder);
  }
}
</style>
