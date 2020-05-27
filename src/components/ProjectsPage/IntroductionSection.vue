<template>
  <div
    id="introduction"
    class="introduction-container"
  >
    <h2>Projects</h2>
  </div>
</template>

<script>
export default {
  name: 'IntroductionSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.introduction-container {
  width: 100%;

  img {
    width: 100%;
  }

  a {
    color: $color-primary;
  }
}
</style>
