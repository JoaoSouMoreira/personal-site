<template>
  <div
    id="soundcloud-shuffle"
    class="soundcloud-shuffle-container"
  >
    <h3>
      <a
        href="https://github.com/JoaoSouMoreira/soundcloud-random-play-extension"
        target="_blank"
      >
        soundcloud-random-play-extension
      </a>
    </h3>
    <p>This is a small Chrome extension that I toyed for a bit but never released, although I still use it once in a while. Its purpose is to add in true music shuffling on any playlist on Soundcloud that you provide.</p>
  </div>
</template>

<script>
export default {
  name: 'SoundcloudShuffleExtensionSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.soundcloud-shuffle-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }
}
</style>
