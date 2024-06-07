<template>
  <div>
    MessageComp

    <ul>
      <li><router-link to="/home/message/111">111</router-link></li>
      <li>
        <!-- 声明式导航 -->
        <router-link
            :to="{
            path: '/home/message/222',
          }"
        >
          222
        </router-link>
      </li>
      <li>
        <router-link
            :to="{
            // 写成对象形式，需要使用命名路由的方法传递params参数
            name: 'Detail',
            params: {
              id: 333,
            },
          }"
        >
          333
        </router-link>
      </li>
      <li>
        <a @click="link1">444 push</a>
      </li>
      <li>
        <a @click="link2">555 replace</a>
      </li>
    </ul>
    <button @click="forward">forward</button>
    <button @click="back">back</button>
    <router-view />
  </div>
</template>

<script>
/*
  路由跳转两种方式：
    声明式导航 router-link
    编程式导航 this.$router.push/replace/forward/back/go

    默认使用声明式导航，
    如果要进行路由跳转之前，要做一些其他事情（例如发送请求），就需要使用编程式导航
*/
export default {
  name: "MessageComp",
  methods: {
    link1() {
      // 使用编程式导航进行路由跳转
      // this.$router.push("/home/message/444");
      // this.$router.push({
      //   path: "/home/message/444",
      // });
      // 追加一条浏览历史记录
      this.$router.push({
        name: "Detail",
        params: {
          id: 444,
        },
      });
    },
    link2() {
      // 替换一条浏览历史记录
      this.$router.replace("/home/message/555");
    },
    forward() {
      // this.$router.forward(); // 浏览历史记录前进一条
      this.$router.go(1);
    },
    back() {
      // this.$router.back(); // 浏览历史记录后退一条
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
