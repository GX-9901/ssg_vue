<template>
  <div>
    <h1>
      当前的值：{{ $store.state.count }} -
      {{ $store.getters.oddOrEven }}
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

export default {
  name: 'App',
  data(){
    return {
      val:1
    }
  },
  methods :{
    handleIncrement(){
      this.$store.dispatch("increment",this.val);
    },
    handleDecrement(){
      this.$store.dispatch("decrement",this.val);
    },
    handleIncrementIfOdd(){
      this.$store.dispatch("incrementIfOdd",this.val);
    },
    handleDelayIncrement(){
      this.$store.dispatch("delayIncrement",this.val);
    },
  },

}
</script>

<style>

</style>
