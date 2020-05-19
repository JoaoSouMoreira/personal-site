<template>
  <div class="container">
    <div class="menu-container">
      <ToolBar />
    </div>
    <router-view />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import ToolBar from './components/ToolBar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer,
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;

    &.mobile {
      max-width: 450px;
    }

    &.tablet {
      max-width: 800px;
    }
  }

  .menu-container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .container {
      max-width: 800px;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 600px;
    }
  }
</style>
