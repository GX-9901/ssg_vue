<script>
import CommentItem from "@/views/CommentItem.vue";
export default {
  name: "CommentList",
  components: {
    CommentItem,
  },
  data(){
    return {
      comments: [
        { id: 1, username: "食人魔法师", content: "我们还行吧" },
        { id: 2, username: "司夜刺客", content: "夜神夜神夜神夜神夜神夜神" },
      ],
    }
  },
  methods: {
    addComment(username, content) {
      this.comments.push({
        id: Date.now(),
        username,
        content,
      });
    },
    deleteComment(id) {
      this.comments = this.comments.filter(comment => comment.id !== id);
    },
  },
  mounted() {
    this.$bus.$on("addComment", (username, content) => this.addComment(username, content));
  },
  beforeDestroy() {
    this.$bus.$off("addComment", (username, content) => this.addComment(username, content));
  },
}
</script>

<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <!-- <h2>暂无评论，点击左侧添加评论！！！</h2> -->
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :deleteComment="deleteComment"
      />
    </ul>
  </div>
</template>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>