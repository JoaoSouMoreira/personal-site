<template>
  <div class="sidebar-container">
    <ul class="menu">
      <li
        v-for="(section, index) in sections"
        :key="section.name"
      >
        <a
          :class="[activeSection === section.path || (!activeSection && index === 0) ? 'section-link active' : 'section-link']"
          @click="handleScroll(section.path)"
        >{{ section.name }}</a>
      </li>
    </ul>
    <ul class="social-media">
      <li>
        <a
          href="https://github.com/JoaoSouMoreira"
          target="_blank"
          class="social-media-item"
        >
          <img
            src="/assets/images/Github-Mark-Light-64px.png"
            alt="Github"
          >
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/joaosousamoreira"
          target="_blank"
          class="social-media-item"
        >
          <img
            src="/assets/images/Linkedin-icon.png"
            alt="LinkedIn"
          >
        </a>
      </li>
      <li class="text-item">
        <a
          href
          class="social-media-item social-media-text"
          @click="downloadCV"
        >CV</a>
      </li>
      <li class="text-item">
        <a
          href="mailto:joaosomoreira@gmail.com?Subject=Awesome%20Website%21"
          class="social-media-item social-media-text"
        >@</a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/joaosomoreira"
          target="_blank"
          class="social-media-item"
        >
          <img
            src="/assets/images/Instagram-icon.png"
            alt="Instagram"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    activeSection: { type: String, required: false, default: '' }
  },
  data() {
    return {
      sections: this.$router.currentRoute.meta.sections
    };
  },
  mounted() {
    window.addEventListener('hashchange', (event) => {
      event.stopPropagation();
      event.preventDefault();
    });
  },
  methods: {
    handleScroll: path => {
      document.getElementById(path).scrollIntoView({
        behavior: 'smooth'
      });
    },
    downloadCV: event => {
      event.preventDefault();
      window.open("/assets/CV.pdf", "/assets/CV.pdf").focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.sidebar-container {
  position: fixed;
  top: 100px;
  left: 20px;
  display: flex;
  flex-direction: column;
}

.menu,
.social-media {
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    flex: 1;
    padding: 0;
    width: 150px;
    height: 36px;
    text-align: center;

    .social-media-item {
      display: block;
      padding: 5px;

      img {
        width: 36px;
        height: 36px;
      }
    }

    .social-media-text {
      width: 36px;
      height: 36px;
      text-align: center;
      vertical-align: middle;
      margin: 8px auto;
      padding: 0;
      line-height: 40px;
      background-color: $color-primary;
      text-decoration: none;
      color: $font-primary;
      font-size: 20px;
      font-weight: bold;
      border-radius: 5px;
    }
  }

  .text-item {
    text-align: center;
    margin: 0 auto;
  }
}

.menu {

  li {
    cursor: pointer;

    .section-link {
      display: block;
      padding: 1em;
      text-decoration: none;
      background-color: $color-dark;
      color: $font-primary;
    }

    .active {
      background-color: $color-primary;
      color: $font-primary;
    }
  }
}

@media (max-width: 1200px) {
  .menu {
    margin: 10px auto;

    li {
      width: 300px;
    }
  }

  .sidebar-container {
    position: relative;
    top: 0;
    left: 0;

    .social-media {
      flex-direction: row;
      padding: 0;

      li {
        margin: 0;
        width: auto;
      }

      .social-media-text {
        margin-top: 5px;
      }
    }
  }
}

@media (max-width: 30em) {
  .menu {
    display: none;
  }
}
</style>
