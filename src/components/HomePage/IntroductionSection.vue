<template>
  <div
    id="introduction"
    class="introduction-container"
  >
    <div class="details-container">
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
            Boston, MA
          </li>
        </ul>
      </div>
    </div>
    <p>
      Welcome to my website! As you can tell from above my name is Joao Moreira. I am native to the Azores
      islands in Portugal, but am currently living in Boston, MA in the United States. I have lived in a few different places
      by now, including Porto and Braga in Portugal, as well as Exeter in the UK. Outside of work I have a few
      hobbies such as Music, General Fitness, Video Games and Cooking primarily.
    </p>
    <p>
      Since I was a young child, as most people I always enjoyed listening to music. However when I was around
      20 years old I decided to try to become a DJ. It was a lot of fun and managed to actually play in a number
      of different venues. I also tried my hand at audio mixing and mastering by remixing some songs and making
      edited mixtapes. If you're curious about it you can <a
        href="https://soundcloud.com/disco4dummies"
        target="_blank"
      >head here</a>.
    </p>
    <p>
      As for Video Games, I enjoy a large range of different types of games in different platforms
      (Yes, I own a Steam account, a PS4 and a Nintendo Switch). But some of my favourites would be
      Bloodborne, Sekiro: Shadows Die Twice, Warframe, Final Fantasy 8 and The Witcher 3 (I could go on...).
    </p>
    <p>
      I am a Software Engineer with eight years of experience programming, designing and delivering
      reliable, scalable and tested applications, meeting both customer and business needs. I have worked
      in both direct to customer and B2B projects, and am familiar with working in teams of any size. I also
      have some leadership experience, as well as experience with collaborating, mentoring and providing
      direction to colleagues.
    </p>
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
  name: 'IntroductionSection',
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

  .details-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  p {
    margin: 10px auto;

    a {
      color: $color-primary;
    }
  }
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
  color: $color-primary;

  h2 {
    font-size: 32px;
  }

  ul {
    padding-left: 0;

    li {
      list-style: none;
      margin-top: 10px;
      font-size: 20px;
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

  &:focus, &:hover {
    background-color: $color-primary-shade;
  }
}
</style>
