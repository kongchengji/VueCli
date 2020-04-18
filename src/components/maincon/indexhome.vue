<!--  -->
<template>
   <div class='home'>
        <!-- 轮播图 -->
        <swiper1></swiper1>
        <cargetmore></cargetmore>
        <hr>
        <!-- 团队成员 -->
        <teammember></teammember>
        <hr>
        <!-- 联系我们 -->
        <contactus></contactus>
   </div>
</template>

<script>
    import swiper1 from '../head/swiper.vue'
    // // 导入index页面主内容
    import cargetmore from '../maincon/carsgetmore.vue'
    import teammember from '../maincon/teammember.vue'
    import contactus from '../maincon/contactus.vue'

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
            swiper1,
            teammember,
            contactus,
            cargetmore
       }
   }
</script>

<style>
</style>