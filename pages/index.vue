<script>
import { mapState } from "vuex";
import AppBanner from "../components/shared/AppBanner.vue";
export default {
  scrollToTop: true,
  components: { AppBanner },
  computed: {
    ...mapState(["tools"]),
    toolImages() {
      return this.tools.map((tool) => ({
        ...tool,
        src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(tool.img)}`,
      }));
    },
  },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />
    <div ref="toolsList" class="tools-marquee mt-8 overflow-hidden" aria-label="Tools I work with">
      <div class="tools-marquee-track">
        <ul
          v-for="copy in 2"
          :key="copy"
          class="tools-marquee-group"
          :aria-hidden="copy === 2 ? 'true' : null"
        >
          <li v-for="tool in toolImages" :key="tool.id">
            <img
              :src="tool.src"
              :alt="copy === 1 ? tool.title : ''"
              :title="tool.title"
              width="40"
              height="40"
              class="tools-marquee-logo rounded-full object-contain"
            />
          </li>
        </ul>
      </div>
    </div>
    <ProjectsGrid lazy/>

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="More Projects"
      >
        <span>More Projects</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.tools-marquee-track {
  display: flex;
  width: max-content;
  animation: tools-marquee-scroll 25s linear infinite;
}

.tools-marquee-group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  min-width: calc(100vw - 2rem);
  margin: 0;
  padding: 0 2rem 0 0;
  list-style: none;
}

.tools-marquee-logo {
  display: block;
  width: 40px;
  height: 40px;
  max-width: none;
}

.tools-marquee:hover .tools-marquee-track {
  animation-play-state: paused;
}

@keyframes tools-marquee-scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tools-marquee {
    overflow-x: auto;
  }

  .tools-marquee-track {
    animation: none;
  }

  .tools-marquee-group[aria-hidden="true"] {
    display: none;
  }
}
</style>
