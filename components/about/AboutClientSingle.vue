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
  <div>
    <img
      :src="client.img"
      :alt="client.title"
      class="
        h-32
        w-auto
        py-5
        px-10
        border border-ternary-light
        dark:border-ternary-dark
        shadow-sm
        rounded-lg
        mb-8
        cursor-pointer
        dark:bg-secondary-light
      "
    />
  </div>
</template>

<style lang="scss" scoped></style>
