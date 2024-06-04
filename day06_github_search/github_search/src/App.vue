<template>
  <div class="container">
    <InputSearch />
    <ListSearch />
  </div>
</template>

<script>
import InputSearch from './views/InputSearch.vue';
import ListSearch from './views/ListSearch.vue';

export default {
  name: 'App',
  components: {
    InputSearch,
    ListSearch
  }
}
</script>

<style>

</style>
