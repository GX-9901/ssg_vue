<script>
// import TodoItem from './TodoItem.vue'
import TodoItem from "@/views/TodoItem.vue";

export default {
  name: "TodoList",
  props:{
      todos:{
        type : Array,
        require : true,
    },
    updateSelect: {
      type : Function,
      require: true,
    },
    deleteItem :{
      type : Function,
      require: true,
    },
  },
  components: {TodoItem}
}
</script>

<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" :updateSelect="updateSelect" :deleteItem="deleteItem"/>
  </ul>
</template>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>