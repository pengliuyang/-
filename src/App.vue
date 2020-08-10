<template>
  <div id="app">
     <Topbar v-show="this.$route.path!='/login'"></Topbar>
    <router-view/>
    <Bottom v-show="this.$route.path!='/login'"></Bottom>
  </div>
</template>
<script>
import Topbar from "@/components/Topbar.vue";
import Bottom from "@/components/Bottom.vue";
export default {
   components: {
    Topbar,
    Bottom
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
