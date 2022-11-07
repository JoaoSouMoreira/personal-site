<template>
  <div
    id="manywhoflowui"
    class="manywhoflowui-container"
  >
    <h3>
      <a
        href="https://manywho.com"
        target="_blank"
      >
        ManyWho Flow UI
      </a>
    </h3>
    <a
      href="https://github.com/manywho/ui-html5"
      target="_blank"
      class="subtitle"
    >
      Project on Github
    </a>
    <img
      src="/assets/images/projects/manywhoui.jpg"
      alt="ManyWho UI application"
    >
    <p>This project was a rewrite of the existing ManyWho Flow UI back in 2014. It is the main Flow UI engine and serves to render Flow metadata as a Web UI.</p>
    <p>It uses tools like React, Gulp and Flux.</p>
  </div>
</template>

<script>
export default {
  name: 'ManyWhoFlowUISection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.manywhoflowui-container {
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

@media (max-width: 560px) {

  .manywhoflowui-container {

    img {
      width: 100%;
    }
  }
}
</style>
