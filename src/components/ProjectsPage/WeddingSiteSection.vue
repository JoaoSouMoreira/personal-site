<template>
  <div id="weddingsite" class="weddingsite-container">
    <h3>
      <a href="https://omelhorcasamentode2019.com" target="_blank">
        Wedding site
      </a>
    </h3>
    <a href="https://github.com/JoaoSouMoreira/wedding-site" target="_blank" class="subtitle">
      Project on Github
    </a>
    <img src="/assets/images/projects/weddingsite.jpg" alt="Wedding website">
    <p>Back when my now wife and I were planning our wedding, we wanted to do something different than sending card
      invites to guests. We also wanted one place with information about travelling and accommodation (the wedding was
      in the Azores and we had guests from different countries)</p>
    <p>So we had the brilliant idea of building a website as a personal project. It includes a bunch of information with
      helpful links and everything is localized for both Portuguese and English. It also included an RSVP form.</p>
    <p>The website is built in Isomorphic React. It can actually be executed both as a client side React application and
      SSR application by using different build configs.</p>
    <p>The end result was to process the website using a pre-rendering plugin that outputs static HTML pages based on
      the routes within React and hosting it on Netlify.</p>
    <p>A small funny side note is that the domain name translated to "The best wedding of 2019".</p>
  </div>
</template>

<script>
export default {
  name: 'WeddingSiteSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.weddingsite-container {
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

  .weddingsite-container {

    img {
      width: 100%;
    }
  }
}
</style>
