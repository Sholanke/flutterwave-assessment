<template>
  <div>
    <TheNavBar />
    <span class="bg-lines">
      <img class="bg-lines__lines" src="/assets/svg/lines.svg" alt="" />
    </span>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>


<style lang="scss" scoped>


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bg-lines {
  background: rgb(255, 255, 255);
  position: fixed;
  left: 1;
  right: 1;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  opacity: 0.3;

  &__lines {
    position: absolute;
    top: -59px;
    right: 0;
  }
}
</style>
