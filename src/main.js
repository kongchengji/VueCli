import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// 导入矢量图标
import './assets/css/Iconfont.css'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入axios
import axios from 'axios'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

//引入video.js视频播放器
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
