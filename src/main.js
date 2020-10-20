import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import '@/assets/styles/common.less'
import VideoPlayer from 'vue-video-player'
import  'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// import '@/assets/fonts/font.css';

Vue.use(VideoPlayer)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
