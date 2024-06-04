<script>
export default {
  name: "InputSearch",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    search() {
      this.$bus.$emit("search", this.searchName);
    },
  },
}
</script>

<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<style scoped>

</style>