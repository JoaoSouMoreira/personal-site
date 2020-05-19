<template>
  <div class="sidebar-container">
    <ul class="menu">
      <li
        v-for="section in sections"
        :key="section.name"
      >
        <a
          :class="[activeSection === section.path ? 'section-link active' : 'section-link']"
          :href="`#${section.path}`"
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
      <li>
        <a
          href
          class="social-media-item social-media-text"
          @click="downloadCV"
        >CV</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    activeSection: { type: String, required: true }
  },
  data() {
    return {
      sections: this.$router.currentRoute.meta.sections
    };
  },
  methods: {
    downloadCV: event => {
      event.preventDefault();
      window.open("/assets/CV.pdf", "/assets/CV.pdf").focus();
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 150px;
  left: 10%;
  display: flex;
  flex-direction: column;
}

.menu,
.social-media {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.menu li,
.social-media li {
  height: 36px;
  margin: 5px;
  text-align: center;
}

.section-link {
  color: #f2f2f2;
  text-decoration: none;
  padding: 1em 2em;
}

.active {
  color: #aaaaaa;
}

.social-media-item {
  padding: 5px;
}

.social-media-text {
  width: 36px;
  height: 36px;
  margin-top: 10px;
  background-color: #d2d2d2;
  text-decoration: none;
  color: #121212;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
}

.social-media-item img {
  width: 36px;
  height: 36px;
}
</style>
