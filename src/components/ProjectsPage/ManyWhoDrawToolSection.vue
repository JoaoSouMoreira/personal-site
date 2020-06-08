<template>
  <div
    id="manywhodrawtool"
    class="manywhodrawtool-container"
  >
    <h3>
      <a
        href="https://manywho.com"
        target="_blank"
      >
        ManyWho Draw Tool
      </a>
    </h3>
    <img
      src="/assets/images/projects/manywhodrawtool.jpg"
      alt="ManyWho Draw Tool"
    >
    <p>Since we rewrote the ManyWho Flow UI it made sense to also rewrite the Draw Tool, considering back then it was built using then legacy technology.</p>
    <p>The Draw Tool serves as the main interface to build actual ManyWho Flows. Interestingly, it uses actual ManyWho Flows itself in some parts.</p>
    <p>It is built using React, Flux and Webpack as major tools.</p>
  </div>
</template>

<script>
export default {
  name: 'ManyWhoDrawToolSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.manywhodrawtool-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;

    &.subtitle {
      margin-bottom: 20px;
    }
  }

  img {
    width: 500px;
  }
}
</style>
