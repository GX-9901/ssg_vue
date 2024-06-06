<template>
  <div>

    <A>
      <div>Out-A</div>
    </A>
    <hr />
    <B>
      <template #header>
        <header>我来组成头部</header>
      </template>
      <div>我来组成身体</div>
      <template #footer>
        <footer>我来组成腿部</footer>
      </template>
    </B>
    <hr />
    <C :users="users">
      <!-- 使用作用域插槽自定义用户信息的展示方式 -->
      <template v-slot:user-detail="{ user }">
        <strong>{{ user.name }}</strong> - Email: {{ user.email }}
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  name: "App",
  components: {
    A,
    B,
    C,
  },
  data() {
    return {
      users: [
        { id: 1, name: '企鹅', email: 'qq@qq.com' },
        { id: 2, name: '猪', email: '163@163.com' }
      ]
    };
  },
};
</script>

<style>

</style>
