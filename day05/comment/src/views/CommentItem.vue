<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    deleteComment: {
      type: Function,
      required: true,
    },
  },
  methods: {
    deleteCommentBtn() {
      this.deleteComment(this.comment.id);
    },

  },

}
</script>

<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteCommentBtn">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.username }}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<style scoped>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>