<template>
  <div class="toolbar-container">
    <ul class="menu">
      <li
        v-for="route in routes"
        :key="route.name"
        class="menu-item"
      >
        <router-link
          :to="route.path"
          :class="$route.name === route.name ? 'menu-link active' : 'menu-link'"
        >
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ToolBar',
    data() {
      return {
        routes: this.$router.options.routes.filter(route => route.name),
      }
    },
  }
</script>

<style scoped>
  .toolbar-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }

  .menu {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  .menu-link {
    color: #f2f2f2;
    text-decoration: none;
    padding: 1em 2em;
    border-bottom: 3px solid #efefef;
  }

  .active {
    color: #aaaaaa;
    border-bottom: 3px solid #aaaaaa;
  }
</style>
