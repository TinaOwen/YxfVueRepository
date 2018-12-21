<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/> <!-- 这里会将所有的模板写入到此 -->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
