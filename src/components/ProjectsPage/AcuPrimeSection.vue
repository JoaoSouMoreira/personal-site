<template>
  <div
    id="acuprime"
    class="acuprime-container"
  >
    <h3>
      <a
        href="https://acuprime.com/"
        target="_blank"
      >
        AcuPrime
      </a>
    </h3>
    <img
      src="/assets/images/projects/acuprime.jpg"
      alt="AcuPrime website"
    >
    <p>AcuPrime was a project where I converted an old Wordpress site into a proper Magento 2 e-commerce site while I was working at Sound in Theory, along with adding a some customization through Magento 2 plugins.</p>
  </div>
</template>

<script>
export default {
  name: 'AcuPrimeSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.acuprime-container {
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

  .acuprime-container {

    img {
      width: 100%;
    }
  }
}
</style>
