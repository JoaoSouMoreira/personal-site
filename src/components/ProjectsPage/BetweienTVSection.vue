<template>
  <div
    id="betweientv"
    class="betweientv-container"
  >
    <h3>
      <a
        href="http://betweien.tv"
        target="_blank"
      >
        Betweien TV
      </a>
    </h3>
    <img
      src="/assets/images/projects/betweientv.jpg"
      alt="Betweien TV website"
    >
    <p>Betweien TV is a small PHP website that is used to showcase events and media developed by the company. It manages and embeds videos from Youtube.</p>
  </div>
</template>

<script>
export default {
  name: 'BetweienTVSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.betweientv-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }

  img {
    width: 500px;
  }
}

@media (max-width: 560px) {

  .betweientv-container {

    img {
      width: 100%;
    }
  }
}
</style>
