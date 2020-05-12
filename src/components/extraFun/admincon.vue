<!--  -->
<template>
   <div class='admincontrol'>
        
        <div class="wrapper">
            <!-- 头部 -->
            <div class="header">
                <a href="javascript:void (0)" class="logo">
                    <img src="img/login/ligthLogo.png" />
                </a>
            </div>
            <!-- 左边导航 -->
            <div class="main-sidebar">
                <ul class="sidebar-menu">
                    <li class="active" @click="changePage(0)">
                         百度地图
                    </li>
                    <li @click="changePage(1)">
                        访客建议
                    </li>
                    <li @click="changePage(2)">
                        访客留言
                    </li>
                </ul>
            </div>
            <!-- 中间部分 -->
            <div class="main-con">	
                <div class="baidumap" ref="baidumap">
                    <iframe id="srciframe" frameborder="0" src="https://map.baidu.com/" width="100%" height="100%">
				    </iframe>
                </div>
                <div class="peradvice" ref="peradvice">
                    <peradvice></peradvice>
                </div>
                <div class="perliuyan" ref="perliuyan">
                    <perliuyan></perliuyan>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    import peradvice from '../admin/peradvice.vue'
    import perliuyan from '../admin/perliuyan.vue'
   export default {
       data() {
           //这里存放数据
           return {

           };
       },
       created:function(){
          
       },
       //方法集合
       methods: {
            changePage(n){
                if( n==0 ){
                //    console.log(this.$refs.baidumap.style.display);
                   this.$refs.baidumap.style.display = "block";
                   this.$refs.peradvice.style.display = "none";
                   this.$refs.perliuyan.style.display = "none";
                }else if(n == 1){
                   this.$refs.baidumap.style.display = "none";
                   this.$refs.peradvice.style.display = "block";
                   this.$refs.perliuyan.style.display = "none";
                }else{
                   this.$refs.baidumap.style.display = "none";
                   this.$refs.peradvice.style.display = "none";
                   this.$refs.perliuyan.style.display = "block";
                }
            }
       },
       components:{
            peradvice,
            perliuyan
       }
   }
</script>

<style>
    .admincontrol{
        margin-top: 50px;
    }
    .admincontrol .wrapper .header{
        width: 100%;
        height: 82px;
        z-index: 1030;
        position: absolute;
        background-color: aliceblue;
    }
    .admincontrol .wrapper .header .logo{
        transition: width .3s ease-in-out;
        display: block;
        float: left;
        text-align: center;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 0 15px;
        font-weight: 300;
        overflow: hidden;
    }
    .admincontrol .wrapper .main-sidebar{
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 20vw;
        z-index: 10;
        background-color: #222d32;
        padding-top: 138px;
    }
    .admincontrol .wrapper .main-sidebar ul li{
        padding: 12px 5px 12px 15px;
        font-size: 16px;
        color: #b8c7ce;
    }
    .admincontrol .wrapper .main-sidebar ul li:hover{
        color: #fff;
        cursor:pointer;
    }

    .admincontrol .wrapper .main-con{
        position: absolute;
        right: 0;
        top: 132px;
        margin-left: 20vw;
        height: 82vh;
        width: 80vw;
    }
    .admincontrol .wrapper .main-con>div{
        display: none;
        height: 100%;
    }
</style>