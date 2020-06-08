<template>
  <div
    id="oneserve"
    class="oneserve-container"
  >
    <h3>
      <a
        href="https://www.oneserve.co.uk/"
        target="_blank"
      >
        Oneserve Mobile
      </a>
    </h3>
    <img
      src="/assets/images/projects/oneserve.jpg"
      alt="Oneserve mobile application"
    >
    <p>Oneserve Mobile is a native application in the Field Service Management field. It includes a number of features like appointment management, notes and photo collection and geolocation.</p>
    <p>I was parte of a small team of 2 developers in charge of designing, architecting and deploying the mobile app to its respective app stores. Along with the mobile application, we also implemented the necessary infrastructure to support it, using several AWS services.</p>
    <p>The mobile application is built using Ionic, Angular 4+ and Typescript as major tools. It also leverages AWS API Gateway and Lambda for API calls, Cognito for authentication handling, DynamoDB for storing some data and more.</p>
  </div>
</template>

<script>
export default {
  name: 'OneserveMobileSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.oneserve-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }

  img {
    width: 200px;
  }
}
</style>
