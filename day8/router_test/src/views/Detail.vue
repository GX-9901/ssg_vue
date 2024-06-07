<template>
  <div>DetailComp</div>
</template>

<script>
export default {
  name: "DetailComp",
  mounted() {},
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal.params);
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
