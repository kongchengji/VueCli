import VueRouter from 'vue-router'

// 导入对应的路由组件
import home from './components/maincon/indexhome.vue'
import aitraffic from './components/aitrafficpage/aitraffic.vue'
import cityrnums from './components/aitrafficpage/croadns.vue'
import pollution from './components/aitrafficpage/thepollution.vue'
import whyneed from './components/aitrafficpage/whyneed.vue'
import ourai from './components/aitrafficpage/ouraitraffic.vue'

// 创建路由对象
var router = new VueRouter({
    // mode:'history',
    mode:'hash',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/home' },
        {path: '/home',component: home},
        { path: '/home/aitraffic', component: aitraffic },
        { path: '/home/cityrnums', component: cityrnums },
        { path: '/home/pollution', component: pollution },
        { path: '/home/whyneed', component: whyneed },
        { path: '/home/ourai', component: ourai },
    ]
})
  
  // 把路由对象暴露出去
  export default router