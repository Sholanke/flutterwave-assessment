<template>
  <div class="loader">
    <div class="loader__wrapper">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="white"
          stroke="#F5A623"
          stroke-width="6"
          class="circle--stroked"
          stroke-linecap="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M60.9039 24.4046C83.8861 20.956 69.1775 40.5317 62.0275 46.0089C66.9303 49.7617 71.9354 55.036 74.0804 61.0203C78.064 71.9746 68.2582 73.5975 60.9039 70.8589C52.8346 68.0189 45.6845 61.9332 40.9859 54.8332C39.6581 54.8332 38.2281 54.6303 36.9002 54.2246C39.5559 61.7303 40.6795 69.4389 39.9645 75.7275C39.9645 63.0489 33.938 50.4717 25.2559 40.0246C22.1916 36.3732 25.358 33.6346 28.1159 37.1846C29.9724 39.7556 31.6776 42.431 33.223 45.1975C36.1852 34.8517 50.8938 25.8246 60.9039 24.4046ZM57.6353 43.0678C62.1296 40.3293 75.8168 25.6221 63.0489 26.9407C55.6946 27.7521 46.8081 34.5478 43.131 38.9093C48.2381 38.3007 53.4474 40.5321 57.6353 43.0678ZM43.0294 42.1547C46.5022 41.8504 50.2815 43.6762 53.1415 45.5019C50.3837 46.8204 47.3194 47.6319 44.1529 47.8347C39.4543 47.8347 38.5351 42.5604 43.0294 42.1547ZM44.9694 54.4277C49.0551 58.9919 54.673 63.4548 60.6995 65.0777C64.1723 65.9905 68.0538 65.5848 66.6238 60.6148C65.1938 56.0505 61.5166 51.9934 57.9416 48.9505C56.9202 49.6605 55.7966 50.3705 54.673 50.8777C51.6087 52.6019 48.3401 53.8191 44.9694 54.4277Z"
          fill="#F5A623"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  min-height: 50vh;
}
.loader__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  animation-name: breathe;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  svg {
    height: 150px;
    width: 150px;
  }
}
.circle--stroked {
  stroke-dasharray: 304.2421569824219px;
  stroke-dashoffset: 304.2421569824219px;
  animation-name: draw;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  fill: #f5a52321;
}

@keyframes draw {
  0% {
    stroke-dashoffset: 304.2421569824219px;
  }
  50% {
    stroke-dashoffset: 0;
  }
  99.999% {
    stroke-dashoffset: -304.2421569824219px;
  }
  100% {
    stroke-dashoffset: 304.2421569824219px;
  }
}

@keyframes breathe {
  0% {
    transform: scale(0.7);
    opacity: 0.7;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0.7;
  }
}
</style>
