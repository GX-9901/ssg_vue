<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "TodoFooter",
  computed:{
    ...mapState("todos", ["todos"]),
    doneLength:{
      get(){
        return this.todos.filter((todo)=>todo.isDone === true).length;
      }
    },
    todosLength:{
      get(){
        return this.todos.length;
      }
    },
    },

  methods:{
    ...mapMutations("todos", ["deleteSelectItem","selectNone","selectAll"]),
    deleteSelectItems(){
      if (window.confirm(`您确定要删除吗?`)) {
        this.deleteSelectItem();
        console.log(this.todos)
        this.$nextTick(() => {  // 确保DOM更新完成
          if(this.todos.length === 0){
            this.$refs.selectAllBtn.checked = false;
          }
      });

      }
    },
    isAllSelect(){
      if(this.todos.every(todo => todo.isDone)){
        this.selectNone();
      }else {
        this.selectAll();
      }
    },
  },
  // data(){
  //   return{
  //     todosLength : this.todos.length,
  //     doneLength : this.todos.filter((todo)=>todo.isDone === true).length,
  //   }
  // },
  // watch : {
  //   todos : {
  //     handler(){
  //       this.todosLength = this.todos.length;
  //       this.doneLength = this.todos.filter((todo)=>todo.isDone === true).length;
  //     },
  //     deep : true,
  //   }
  // },


}
</script>

<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @click="isAllSelect" ref="selectAllBtn"/>
    </label>
    <span>
      <span>已完成{{ doneLength }}</span> / 全部{{ todosLength }}
    </span>
    <button class="btn btn-danger" @click="deleteSelectItems">清除已完成任务</button>
  </div>
</template>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>