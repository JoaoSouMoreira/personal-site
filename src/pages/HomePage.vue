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
          threshold: 0.3,
        },
      }"
    />
    <SkillsSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.5,
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
  name: "HomePage",
  components: {
    Sidebar,
    IntroductionSection,
    ExperienceSection,
    SkillsSection,
    EducationSection,
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
