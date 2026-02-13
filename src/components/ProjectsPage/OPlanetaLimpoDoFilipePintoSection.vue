<template>
  <div
    id="oplanetalimpodofilipepinto"
    class="oplanetalimpodofilipepinto-container"
  >
    <h3>
      <a
        href="http://oplanetalimpodofilipepinto.com/"
        target="_blank"
      >
        O Planeta Limpo do Filipe Pinto (Filipe Pinto's Clean Planet)
      </a>
    </h3>
    <iframe
      src="https://www.youtube-nocookie.com/embed/snp-MDRpgzw"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <p><i>O Planeta Limpo do Filipe Pinto</i> (Filipe Pinto's Clean Planet) was the second HTML5 Canvas project I worked on. It was made in partnership with a famous portuguese music artist Filipe Pinto and included the launch of a children's book as well as this game.</p>
    <p>It is built using pure Canvas APIs using no frameworks, using a lot of image assets provided by the Design team at Betweien and music and sound effects were provided by Filipe himself.</p>
    <p>There are four different game levels with varying difficulties, using different mechanics like drag and drop, keyboard events and procedural generation. These progress on these levels are tracked via cookies.</p>
    <p>This game was later ported as a mobile game to the App Store using node-webkit.</p>
  </div>
</template>

<script>
export default {
  name: 'OPlanetaLimpoDoFilipePintoSection',
}
</script>

<style lang="scss" scoped>
@use '../../scss/variables.scss';

.oplanetalimpodofilipepinto-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: variables.$color-primary;
  }
  .video {
    width: 560px;
    height: 315px;
  }
}

@media (max-width: 560px) {

  .oplanetalimpodofilipepinto-container {

    .video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
