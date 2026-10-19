<script>
export default {
  props: ["client"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- About single client -->
  <div class="w-20 inline-flex justify-center items-center shadow-sm rounded-full overflow-hidden cursor-pointer text-primary-dark dark:text-primary-light">
    <div
      v-html="client.img"
      role="img"
      :aria-label="client.title"
      :title="client.title"
      class="
        w-20 max-w-none object-cover
      "
    />
  </div>
</template>

<style scoped>
::v-deep svg {
  width: 100%;
  height: auto;
}
</style>
