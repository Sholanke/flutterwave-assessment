<template>
  <TheSectionWrapper>
    <div class="footer _flex a_center j_between">
      <p>Copyright 2019. Flutterwave inc</p>
      <div class="footer__links _flex a_center">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </TheSectionWrapper>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 21px 0 46px 0;
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;

  @include mobile {
    flex-direction: column;
  }

  &__links {
    @include mobile {
      flex-direction: column;
      margin-top: 30px;
    }
    a {
      margin-left: 30px;
      @include mobile {
        margin-left: 0;
        margin-top: 20px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
