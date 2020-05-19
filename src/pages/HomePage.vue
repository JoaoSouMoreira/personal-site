<template>
  <div id="home">
    <Sidebar :active-section="activeSection" />
    <IntroductionSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 1,
        },
      }"
    />
    <ExperienceSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 1,
        },
      }"
    />
    <SkillsSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 1,
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
export default {
  name: "HomePage",
  components: {
    Sidebar,
    IntroductionSection,
    ExperienceSection,
    SkillsSection
  },
  data() {
    return {
      activeSection: "",
    };
  },
  methods: {
    visibilityChanged: function(isVisible, entry) {
      if (isVisible && !this.isInitial) {
        this.activeSection = entry.target.id;
        window.location.hash = entry.target.id;
      }
    }
  }
};
</script>

<style scoped>
</style>
