<template>
  <div id="azores-page">
    <Sidebar :active-section="activeSection" />
    <IntroductionSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.5,
        },
      }"
    />
    <SuggestionsSection
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.1,
        },
      }"
    />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import IntroductionSection from "../components/AzoresPage/IntroductionSection.vue";
import SuggestionsSection from "../components/AzoresPage/SuggestionsSection.vue";

export default {
  name: 'AzoresPage',
  components: {
    Sidebar,
    IntroductionSection,
    SuggestionsSection,
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
        window.location.hash = entry.target.id;
      }
      if (isVisible) {
        this.isLoaded = true;
      }
    }
  },
}
</script>

<style scoped></style>
