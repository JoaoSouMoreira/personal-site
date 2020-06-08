<template>
  <div id="home">
    <Sidebar :active-section="activeSection" />
    <IntroductionSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.5,
        },
      }"
    />
    <ExperienceSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.2,
        },
      }"
    />
    <SkillsSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.3,
        },
      }"
    />
    <EducationSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.5,
        },
      }"
    />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import IntroductionSection from "../components/HomePage/IntroductionSection.vue";
import ExperienceSection from "../components/HomePage/ExperienceSection.vue";
import SkillsSection from "../components/HomePage/SkillsSection.vue";
import EducationSection from "../components/HomePage/EducationSection.vue";

export default {
  name: 'HomePage',
  components: {
    Sidebar,
    IntroductionSection,
    ExperienceSection,
    SkillsSection,
    EducationSection,
  },
  data() {
    return {
      activeSection: window.location.hash || '',
      isLoaded: false,
    };
  },
  methods: {
    visibilityChanged: function(isVisible, entry) {
      if (isVisible && this.isLoaded) {
        this.activeSection = entry.target.id;

        if(history.pushState) {
          history.pushState(null, null, `#${entry.target.id}`);
        }
        else {
          location.hash = entry.target.id;
        }
      }
      if (isVisible) {
        this.isLoaded = true;
      }
    }
  },
};
</script>

<style scoped>
</style>
