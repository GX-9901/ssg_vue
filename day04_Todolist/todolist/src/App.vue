<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h1>TodoList</h1>
      <TodoInput :addTodo="addTodo"/>
      <TodoList :todos="todos" :updateSelect="updateSelect" :deleteItem="deleteItem"/>
      <TodoFooter :todos="todos" :deleteSelectItem="deleteSelectItem" :selectAll="selectAll" :selectNone="selectNone"/>
    </div>
  </div>

</template>

<script>
import TodoInput from "@/views/TodoInput.vue";
import TodoList from "@/views/TodoList.vue";
// import TodoItem from "@/views/TodoItem.vue";
import TodoFooter from "@/views/TodoFooter.vue";

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, name: '吃饭', isDone: false },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '敲代码', isDone: true },
      ],
      doneLength : 0,
      todosLength : 0,
    };
  },
  components: {
    TodoInput,
    TodoList,
    // TodoItem,
    TodoFooter,
  },
  methods : {
    addTodo(name){
      this.todos.push({
        id : Date.now(),
        name,
        isDone: false
      })
    },
    updateSelect(id, select){
      let index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index].isDone = select;
      } else {
        console.error('Todo not found with id:', id);
      }
    },
    deleteItem(id){
      let index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index,1);
      } else {
        console.error('Todo not found with id:', id);
      }
    },
    deleteSelectItem(){
      this.todos = this.todos.filter(todo => !todo.isDone);
    },
    selectAll(){
      this.todos.forEach(todo => todo.isDone = true);
    },
    selectNone(){
      this.todos.forEach(todo => todo.isDone = false);
    },
  },
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
