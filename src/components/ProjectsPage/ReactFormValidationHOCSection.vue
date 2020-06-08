<template>
  <div
    id="react-hoc"
    class="react-hoc-container"
  >
    <h3>
      <a
        href="https://github.com/funeralzone/react-form-validation-hoc"
        target="_blank"
      >
        react-form-validation-hoc
      </a>
    </h3>
    <p>This is published as an NPM package. It is a React Higher Order Component that handles form validation, including scroll to errors animations.</p>
    <p>It strikes a good balance between plug and play and granularity with what you can do with it. I built this because I could not find a good library that satisfied all of my requirements for form validation, so I created and published this package in case other developers would find it as useful as I do.</p>
  </div>
</template>

<script>
export default {
  name: 'ReactFormValidationHOCSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.react-hoc-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  a {
    color: $color-primary;
  }
}
</style>
