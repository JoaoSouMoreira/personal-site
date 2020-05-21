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
    margin: 0 auto;
    max-width: 800px;
  }

  .menu-container {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 48em) {
    .container {
      width: 90%;
    }
  }
</style>
