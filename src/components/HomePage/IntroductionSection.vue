<template>
  <div id="">
    <p>Welcome to my website.</p>
    <img
      src="/assets/images/portrait.jpg"
      alt="Avatar"
      class="avatar"
    >
    <div>
      <h2>
        Details
      </h2>
      <ul>
        <li>
          <b>Name:</b>
          Joao Moreira
        </li>
        <li>
          <b>Age:</b>
          30
        </li>
        <li>
          <b>Location:</b>
          Exeter, UK
        </li>
      </ul>
    </div>
    <a
      href="https://github.com/JoaoSouMoreira/personal-site"
      target="_blank"
    >
      View this site on Github
    </a>
  </div>
</template>

<script>
export default {
  name: "IntroductionSection"
};
</script>

<style scoped>
.introduction-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}

.avatar {
  border-radius: 50%;
  width: 200px
}
</style>
