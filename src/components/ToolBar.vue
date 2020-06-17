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
      routes: this.$router.options.routes.filter(route => route.name)
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.toolbar-container {
  display: grid;
  margin: 0 auto;

  .menu {
    list-style: none;
    display: grid;
    justify-items: end;
    grid-template-columns: 1fr auto auto;
    align-items: end;
    padding: 0;

    .menu-item {
      margin-left: 30px;

      .menu-link {
        display: block;
        color: $color-lighter;
        text-decoration: none;
        padding: 1em 2em;
        border-bottom: 2px solid $color-lighter;

        &:not(.active):hover {
          color: $color-light;
          border-bottom: 2px solid $color-light;
        }
      }

      .active {
        color: $color-primary;
        border-bottom: 4px solid $color-primary;
      }
    }
  }

  @media (max-width: 30em) {
    .menu {
      grid-template-columns: 100%;
      grid-template-rows: auto;
      justify-items: center;
      grid-gap: 1em;
      text-align: center;

      .menu-item {
        width: 100%;
        margin: 0;

        .menu-link {
          background-color: $color-lighter;
          border: 1px solid $color-lighter;
          color: $color-dark;
          margin: 0;
        }

        .active {
          background-color: $color-primary;
          border: 1px solid $color-primary;
          color: $color-light;
        }
      }
    }
  }
}
</style>
