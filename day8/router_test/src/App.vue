<template>
  <div>
    <div class="page-header col-xs-offset-2 col-xs-8">
      <h2>Vue路由测试</h2>
    </div>
    <div class="col-xs-2 col-xs-offset-2">
      <router-link
          class="list-group-item"
          active-class="active"
          :to="{ name: 'About', query: { color: 'pink', xxx: 'xxx' } }"
      >
        About
      </router-link>
      <router-link class="list-group-item" active-class="active" to="/home">
        Home
      </router-link>
    </div>

    <div class="col-xs-6 panel-body">

      <keep-alive :max="10" include="AboutComp,HomeComp">

        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
