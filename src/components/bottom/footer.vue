<!-- 网页备案信息 -->
<template>
    <div class='footer'>
        <div id="backtotop">
            <a href="#"> 回到顶部 </a>
        </div>
        <div id="beian">
            <a href="http://www.beian.miit.gov.cn">滇ICP备19010084号</a>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33041102000319">
                浙公网安备 33041102000319号
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            //这里存放数据
            return {

            }
        }
    }
</script>

<style>
   .footer{
       width: 100%;
       height: 74px;
       background-color: #d8b109;
   }
   .footer a:hover{
       text-decoration: none;
   }
   #backtotop{
       width: 80px;
       padding-top: 10px;
       margin: 0 auto;
   }
    #backtotop>a{
        color: #fdfdfe;
    }
    #beian{
        width: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    #beian>a{   
        color: #fdfdfe;
        font-size: 16px;
    }
</style>