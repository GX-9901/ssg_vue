<template>
  <div>
    <h1>
      当前的值：{{ count }} - {{ oddOrEven }}
    </h1>
    <select v-model="val">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="handleIncrement">+</button>
    <button @click="handleDecrement">-</button>
    <button @click="handleIncrementIfOdd">如果是奇数就加</button>
    <button @click="handleDelayIncrement">延迟1s加</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  data(){
    return {
      val:1
    }
  },
  methods :{
    ...mapMutations("counter", ["INCREMENT", "DECREMENT"]),
    ...mapActions("counter", ["incrementIfOdd", "delayIncrement"]),
    handleIncrement(){
      this.INCREMENT(this.val);
    },
    handleDecrement(){
      this.DECREMENT(this.val);
    },
    handleIncrementIfOdd(){
      this.incrementIfOdd(this.val);
    },
    handleDelayIncrement(){
      this.delayIncrement(this.val);
    },
  },
  computed: {
    ...mapState("counter", ["count"]),
    ...mapGetters("counter", ["oddOrEven"]),
  },

}
</script>

<style>

</style>
