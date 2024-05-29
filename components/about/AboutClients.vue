<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["toolsHeading", "tools"]),
  },
};
</script>

<template>
  <!-- About clients section -->
  <div class="mt-10 sm:mt-20">
    <p
      class="
        font-general-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      "
    >
      {{ toolsHeading }}
    </p>
    <div class="flex flex-wrap mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in tools"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
