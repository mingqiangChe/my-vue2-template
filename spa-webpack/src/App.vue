<template>
  <div class="App">
    Hello World
<router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
      <router-view></router-view>
  </div>
      
</template>

<script>
export default {
  name: 'App',

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>
