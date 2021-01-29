<template>
  <div class="event_details__grid">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.event_details__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  padding-bottom: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid var(--border-color);

  @include mediaMaxWidth(698px) {
    grid-template-columns: 1fr;
  }

  &:last-of-type {
    border-bottom: 0;
  }
}
</style>
