<template>
  <div
    id="introduction"
    class="introduction-container"
  >
    <h2>Introduction</h2>
    <img
      src="/assets/images/azores.jpg"
      alt="Azores Map"
    >
    <p>The Azores are a group of 9 islands around 1500km off the coast of Portugal going towards North America, with a total population of around 250,000 people.</p>
    <p>I am native to the island of Sāo Miguel and have visited Santa Maria, Terceira, Faial and Pico.</p>
    <p>There is access to all islands via airplane, but during Spring and Summmer seasons there is also a number of ferry ships that will travel between islands for a slightly cheaper price. I definitely recommend the experience if you do not get too seasick easily</p>
    <p>The weather is subtropical, humid and incredibly moderate, ranging from an average of 15 to 25 °C (59 to 77 °F) all year round. There is occasional rain regardless of the season. The sea water temperature ranges from an average of 17 (Winter) to 23 (Summer) °C (63 to 63 °F), personally this is the ideal water temperature for swimming, just refreshing enough but not too cold or warm.</p>
    <p>There is a large arts and music culture residing in the Azores, with music festivals aplenty particularly during the Summer. I would recommend trying to visit during one of more of the following:</p>
    <ul>
      <li>
        <a
          href="http://www.maredeagosto.com/"
          target="_blank"
        >Festival Maré de Agosto (Oldest ongoing music festival in Portugal)</a>
      </li>
      <li>
        <a
          href="https://www.santamariablues.com/en/home/"
          target="_blank"
        >Santa Maria Blues</a>
      </li>
      <li>
        <a
          href="http://www.tremor-pdl.com/en/"
          target="_blank"
        >Tremor Festival</a>
      </li>
      <li>
        <a
          href="http://monteverdefestival.com/"
          target="_blank"
        >Monte Verde Festival</a>
      </li>
      <li>
        <a
          href="https://www.walktalkazores.org/en/"
          target="_blank"
        >Walk &amp; Talk Festival</a>
      </li>
      <li>
        <a
          href="http://www.semanadomar.net/"
          target="_blank"
        >Semana do Mar (Sea Week)</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IntroductionSection',
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.introduction-container {
  width: 100%;

  img {
    width: 100%;
  }

  a {
    color: $color-primary;
  }
}
</style>
