<template>
  <div id="app">
    <Settlements />
  </div>
</template>

<script>
import Settlements from './components/Settlements.vue';

export default {
  name: 'App',
  components: {
    Settlements,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
