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
            <b>Location:</b>
            Boston, MA
          </li>
        </ul>
      </div>
    </div>
    <h3>Engineering Leader & Systems Architect</h3>
    <p>
      I am João Moreira, an engineering leader originally from the Azores, Portugal, now based in Boston. With over 12 years of experience building mission-critical systems, I specialize in the intersection of technical strategy and organizational growth.
    </p>
    <p>
      My career has been defined by a "full-stack" mindset—not just in code, but in how I approach problems. Whether I'm architecting high-availability Authentication and Authorization layers in healthcare or mentoring a team of engineers to their next promotion, my goal is always the same: <b>building for scale and reliability</b>.
    </p>
    <h3>Beyond the Code</h3>
    <p>
      While I spend my days solving complex distributed systems problems, I find my balance in other ways:
    </p>
    <ul>
      <li>
        <b><a href="https://soundcloud.com/disco4dummies" target="_blank">Music</a>:</b> I spent my 20s as a DJ and audio editor, which taught me the importance of "flow" and technical precision.
      </li>
      <li>
        <b>The Home Lab:</b> I am a home automation enthusiast, constantly tweaking and improving my local system to work more effectively and efficiently for me and my family.
      </li>
      <li>
        <b><a href="https://www.strava.com/athletes/joaosomoreira" target="_blank">Endurance</a>:</b> I am an avid runner, finding that the discipline of a marathon mirrors the long-term focus needed to lead major technical projects. I am currently attempting to qualify to run the Boston Marathon (3 hours or less!).
      </li>
      <li>
        <b>Family:</b> As a new parent, I have found a renewed drive to build technology that makes a meaningful impact on how families live and receive care.
      </li>
      <li>
        <b>The Video Games:</b> One of my favorite genres is rogue-like, these types of games test my resilience, focus and preserverance and provide the opportunity for meaningful continuous improvement. When I get the (nowadays very rare) opportunity to sit down and unwind, one of my choices for things to do is playing Video Games. The options right now are either through a PS5, PSVR2 (if I'm feeling physical) or a Nintendo Switch 2. I can go on and on about certain games, such as Bloodborne, Dark Souls, Elden Ring, most Final Fantasy games, Warframe, etc.
      </li>
      <li>
        <b>Coffee:</b> As an enthusiast with a whole setup at home, I have learned that details and small tweaks can have a huge impact on the end product.
      </li>
    </ul>
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
      age: this.getYears('1989-01-01'),
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
@use '../../scss/variables.scss';

.introduction-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  line-height: 1.2rem;

  .details-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  p, ul {
    margin: 10px 0;

    a {
      color: variables.$color-primary;
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
  color: variables.$color-primary;

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
  background-color: variables.$color-primary;
  border: 1px solid variables.$color-primary-shade;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  color: variables.$font-primary;

  &:focus, &:hover {
    background-color: variables.$color-primary-shade;
  }
}
</style>
