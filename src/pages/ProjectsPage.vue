<template>
  <div
    id="projects-page"
    class="projects-container"
  >
    <Sidebar />
    <WeddingSiteSection />
    <hr>
    <ReactFormValidationHOCSection />
    <hr>
    <ArrangerSection />
    <hr>
    <OneserveMobileSection />
    <hr>
    <SoundcloudShuffleExtensionSection />
    <hr>
    <AcuPrimeSection />
    <hr>
    <ManyWhoDrawToolSection />
    <hr>
    <ManyWhoFlowUISection />
    <hr>
    <OPlanetaLimpoDoFilipePintoSection />
    <hr>
    <OSenhorEmpreendedorismoSection />
    <hr>
    <BetweienTVSection />
    <hr>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import WeddingSiteSection from "../components/ProjectsPage/WeddingSiteSection.vue";
import ReactFormValidationHOCSection from "../components/ProjectsPage/ReactFormValidationHOCSection.vue";
import ArrangerSection from "../components/ProjectsPage/ArrangerSection.vue";
import OneserveMobileSection from "../components/ProjectsPage/OneserveMobileSection.vue";
import SoundcloudShuffleExtensionSection from "../components/ProjectsPage/SoundcloudShuffleExtensionSection.vue";
import ManyWhoDrawToolSection from "../components/ProjectsPage/ManyWhoDrawToolSection.vue";
import ManyWhoFlowUISection from "../components/ProjectsPage/ManyWhoFlowUISection.vue";
import AcuPrimeSection from "../components/ProjectsPage/AcuPrimeSection.vue";
import OPlanetaLimpoDoFilipePintoSection from "../components/ProjectsPage/OPlanetaLimpoDoFilipePintoSection.vue";
import OSenhorEmpreendedorismoSection from "../components/ProjectsPage/OSenhorEmpreendedorismoSection.vue";
import BetweienTVSection from "../components/ProjectsPage/BetweienTVSection.vue";

export default {
  name: 'Projects',
  components: {
    Sidebar,
    WeddingSiteSection,
    ReactFormValidationHOCSection,
    ArrangerSection,
    OneserveMobileSection,
    SoundcloudShuffleExtensionSection,
    ManyWhoDrawToolSection,
    ManyWhoFlowUISection,
    AcuPrimeSection,
    OPlanetaLimpoDoFilipePintoSection,
    OSenhorEmpreendedorismoSection,
    BetweienTVSection,
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

<style scoped></style>
