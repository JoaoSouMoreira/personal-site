<template>
  <div
    id="arranger"
    class="arranger-container"
  >
    <h3>
      <a
        href="https://arranger.com/"
        target="_blank"
      >
        Arranger
      </a>
    </h3>
    <img
      src="/assets/images/projects/arranger.jpg"
      alt="Arranger application"
    >
    <p>Arranger is a Funeral Arrangement Software that will allow Funeral Homes to manage their Cases from the First Call down to invoicing and paying for the funeral. It has many features such as product and service management, task management and estimate generation.</p>
    <p>It is built using React, Redux, Webpack and Apollo Client as the major tools.</p>
    <p>I architected, designed and developed Arranger's frontend for release, and since then lead the Frontend team in charge of developing and launching new features.</p>
  </div>
</template>

<script>
export default {
  name: 'ArrangerSection',
}
</script>

<style lang="scss" scoped>
@use '../../scss/variables.scss';

.arranger-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: variables.$color-primary;
  }

  img {
    width: 500px;
  }
}

@media (max-width: 560px) {

  .arranger-container {

    img {
      width: 100%;
    }
  }
}
</style>
