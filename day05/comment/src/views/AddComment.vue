<script>
export default {
  name: "AddComment",
  data(){
    return {
        username: "",
        content: "",
    };
  },
  methods: {
    formSubmit() {
      const { username, content } = this;
      if (!username || !content) {
        alert("输入内容不能为空");
        return;
      }
      this.$bus.$emit("addComment", username, content);
      this.username = "";
      this.content = "";
    },
  },
}
</script>

<template>
  <div class="col-md-4">
    <form class="form-horizontal" @submit.prevent="formSubmit">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
            class="form-control"
            rows="6"
            placeholder="评论内容"
            v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default pull-right" >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>