<template>
  <div>AboutComp</div>
</template>

<script>
export default {
  name: "AboutComp",
  mounted() {
    console.log(this.$route.query);
    console.log("AboutComp mounted");
  },
  beforeDestroy() {
    console.log("AboutComp beforeDestroy");
  },
};
</script>

<style></style>
