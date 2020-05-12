<!--  -->
<template>
   <div class='indexmain'>
     <!-- 头部导航栏 -->
      <deadline></deadline>
      <!-- 路由导航 -->
      <router-view></router-view> 
      <!-- 网站备案信息 -->
      <footerline></footerline>
   </div>
</template>

<script>
// // 导入index页面头部
import deadline from './components/head/deadline.vue'

// //导入index页面尾部
import footerline from './components/bottom/footer.vue'

    export default {
       data() {
           //这里存放数据
           return {

           };
       },
       //方法集合
       methods: {

       },
       components:{
           deadline,
           footerline
       }
    }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>