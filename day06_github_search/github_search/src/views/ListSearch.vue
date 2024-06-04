<script>
import axios from "axios";

export default {
  name: "ListSearch",
  data () {
    return {
      listdata: [],
      stat :false,
    };
  },
  methods: {
    async search(searchName) {
      try {
        this.stat = true;
        const response = await axios({
          method: "GET",
          url: `https://api.github.com/search/users?q=${searchName}`,
        });
        this.listdata = response.data.items;

      }catch (error) {
        this.stat = false;
        console.log(error);
      }finally {
        // 不管请求成功或失败，都改为false
        this.stat = false;
      }
    },
  },
  mounted() {
    this.$bus.$on("search", (searchName)=>this.search(searchName));
  },
  beforeDestroy() {
    this.$bus.$off("search", (searchName)=>this.search(searchName));

  }
}
</script>

<template>
  <div class="row">
    <h1 v-show="stat">Loading....</h1>
    <div v-show="!stat">
    <div
        class="card"
        v-for = "item in listdata"
        :key = "item.id"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>