<template>
  <div class="container">
    <!-- <BackgroundCanvas /> -->
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
// import BackgroundCanvas from './components/BackgroundCanvas.vue';
import ToolBar from './components/ToolBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // BackgroundCanvas,
    ToolBar,
    Footer,
  },
  mounted() {

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
