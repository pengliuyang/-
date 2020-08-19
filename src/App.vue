<template>
  <div id="app">
  <!-- <button @click="changeLanguage()" >{{$t('language.name')}}</button> -->
    <Topbar v-show="this.$route.path != '/login'"></Topbar>
    <router-view />
    <Bottom v-show="this.$route.path != '/login'"></Bottom>
  </div>
</template>
<script>
import Topbar from "@/components/Topbar.vue";
import Bottom from "@/components/Bottom.vue";
export default {
  components: {
    Topbar,
    Bottom,
  },
  methods: {
     changeLanguage(){
            this.$i18n.locale=='zh'?this.$i18n.locale='en':this.$i18n.locale='zh'   //设置中英文模式
            sessionStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
        },
  },
};
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
