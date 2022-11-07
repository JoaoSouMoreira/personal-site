<template>
  <div
    id="osenhorempreendedorismo"
    class="osenhorempreendedorismo-container"
  >
    <h3>
      <a
        href="https://www.youtube.com/watch?v=0pS2sq5T6zs"
        target="_blank"
      >
        O Senhor Empreendedorismo (Mr. Entrepreneurship)
      </a>
    </h3>
    <iframe
      src="https://www.youtube-nocookie.com/embed/0pS2sq5T6zs"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video"
    />
    <p><i>O Senhor Empreendedorismo</i> (Mr. Entrepreneurship) was the first HTML5 Canvas application I developed. It is a game aimed at educating children about entrepreneurship.</p>
    <p>It was launched along with a physical and e-book, and was also later ported and released to the App Store, using node-webkit. Both the books and the games were also later translated to English by myself.</p>
    <p>It includes a number of mini-games ranging from puzzles, word catching and more.</p>
  </div>
</template>

<script>
export default {
  name: 'OSenhorEmpreendedorismoSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.osenhorempreendedorismo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }

  .video {
    width: 560px;
    height: 315px;
  }
}

@media (max-width: 560px) {

  .osenhorempreendedorismo-container {

    .video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
