<script>
export default {
  name: "TodoItem",
  data(){
    return {
      select : this.todo.isDone,
      dataId:this.todo.id,
      isShow: false,
    }
  },
  props:{
    todo: {
      type: Object,
      require :true,
    },
    updateSelect: {
      type: Function,
      require: true,
    },
    deleteItem:{
      type:Function,
      require:true,
    }
  },
  methods:{
    updateClick(){
      // console.log(this.dataId);
      // console.log(this.select);
      this.updateSelect(this.dataId,this.select);
    },
    deleteClick(){
      if (window.confirm(`您确定要删除吗?`)) {
        this.deleteItem(this.dataId);
      }
    },
  },
  watch:{
      todo:{
        handler(){
          this.select = this.todo.isDone;
        },
        deep:true,
      }
  }
}
</script>

<template>
  <li @mouseenter="isShow=true" @mouseleave="isShow = false">
    <label>
      <input type="checkbox" v-model="select"  @change="updateClick" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteClick">删除</button>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>