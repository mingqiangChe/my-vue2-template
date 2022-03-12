<template>
  <div class="App">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>  
  </div>
</template>
<script>
// import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
   
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.App {
  text-align: center;
  color: skyblue;
  font-size: 28px;
}
</style>
