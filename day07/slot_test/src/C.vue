<template>
  <div class="user-list">
    <ul>
      <!-- 遍历users数组，并为每个用户提供一个作用域插槽 -->
      <li v-for="user in users" :key="user.id">
        <!-- 定义作用域插槽，名为"user-detail"，并传入user数据 -->
        <slot name="user-detail" :user="user">
          <!-- 默认内容，如果父组件没有提供插槽内容 -->
          {{ user.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
