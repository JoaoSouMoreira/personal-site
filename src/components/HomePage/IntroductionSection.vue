<template>
  <div
    id=""
    class="introduction-container"
  >
    <div class="details-container">
      <div class="about-me">
        <p class="introduction-text">
          Software Engineer with seven years of experience programming, designing and delivering
          reliable, scalable and tested applications, meeting both customer and business needs. Experience
          with direct to customer and B2B projects. Familiar with working in teams of any size. Experience
          with collaborating, mentoring and providing direction to colleagues.
        </p>
      </div>
      <div class="avatar-container">
        <img
          src="/assets/images/portrait.jpg"
          alt="Avatar"
          class="avatar"
        >
      </div>
      <div class="details">
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
            {{ age }}
          </li>
          <li>
            <b>Location:</b>
            Exeter, UK
          </li>
        </ul>
      </div>
    </div>
    <div class="additional-information">
      Software Engineer with seven years of experience programming, designing and delivering
      reliable, scalable and tested applications, meeting both customer and business needs. Experience
      with direct to customer and B2B projects. Familiar with working in teams of any size. Experience
      with collaborating, mentoring and providing direction to colleagues.
    </div>
    <a
      href="https://github.com/JoaoSouMoreira/personal-site"
      target="_blank"
      class="view-site-button"
    >
      View this site on Github
    </a>
  </div>
</template>

<script>
export default {
  name: "IntroductionSection",
  data() {
    return {
      age: this.getYears('1989-07-28'),
    };
  },
  methods: {
    getYears: function(dateString) {
      const bday = new Date(dateString);
      const dateDiff = Date.now() - bday;
      const ageDate = new Date(dateDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.introduction-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
}

.details-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.about-me {
  flex: 3;
}

.avatar-container, .details {
  flex: 2;
}

.avatar-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  float: right;
  height: 200px;
}

.avatar {
  border-radius: 50%;
  width: 200px;
  margin: 0 auto;
}


.details {
  padding-left: 50px;

  ul {
    padding-left: 0;

    li {
      list-style: none;
      margin-top: 10px;
    }
  }
}

.view-site-button {
  width: 200px;
  margin: 30px auto;
  padding: 10px 3px;
  background-color: $color-primary;
  border: 1px solid $color-primary-shade;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  color: $font-primary;
}

.view-site-button {

  &:focus, &:hover {
  background-color: $color-primary-shade;
  }
}
</style>
