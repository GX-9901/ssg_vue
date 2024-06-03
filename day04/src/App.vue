<template>
  <div id="app">
    <ChildTest1 ref="childTest1" />
  </div>
</template>

<script>
import ChildTest1 from "@/ChildTest1.vue";

export default {
  name: 'App',
  data() {
    return {
      num:0,
    }
  },
  components: {
    ChildTest1
  }
}
</script>

<style>
#app {

}
</style>
