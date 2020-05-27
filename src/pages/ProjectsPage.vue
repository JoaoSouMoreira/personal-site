<template>
  <div
    id="projects-page"
    class="projects-container"
  >
    <Sidebar />
    <IntroductionSection />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import IntroductionSection from "../components/ProjectsPage/IntroductionSection.vue";

export default {
  name: 'Projects',
  components: {
    Sidebar,
    IntroductionSection,
  },
}
</script>

<style scoped></style>
