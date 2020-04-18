<!-- 联系我们 -->
<template>
   <div class='contact_section'>
       <div class="row">
           <div class="col-md-6">
               <div class="contactusline">
                   联系 我们
               </div>
               <div>
                   <div>
                       <input type="text" placeholder="您的名字">
                   </div>
                   <div>
                       <input type="text" placeholder="您的邮箱">
                   </div>
                   <div>
                       <input type="text" placeholder="您的电话号码">
                   </div>
                   <div class="mtz">
                       <input type="text" placeholder="您的想法">
                   </div>
                   <div class="mtz">
                       <button type="submit"> 发送 </button>
                   </div>
               </div>
           </div>
           <div class="col-md-6">
               <div class="contact_img-box">
                   <img src="/img/students.jpg" alt="装饰图片">
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        data() {
           //这里存放数据
           return {

           };
        },
        //方法集合
        methods: {

        },
    }
</script>

<style>
    .contact_section{
        padding: 75px 45px;
        max-width: 85%;
        margin-left: auto;
        margin-right: auto;
        /* height: 590px; */
    }
    .contact_section>.row{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .contact_section>.row>.col-md-6{
        width: 50%;
    }
    .contact_section>.row>.col-md-6 .contactusline{
        font-size: 26px;
        color: #010103;
        font-weight: 400;
        margin-bottom: 35px;
    }
    .contact_section .col-md-6 input {
        border: none;
        outline: none;
        border-bottom: 1px solid #000;
        width: 90%;
        margin: 15px 0;
        font-size: 16px;
    }
    .contact_section .col-md-6 .mtz{
        margin-top: 48px !important;
    }
    .contact_section .col-md-6 .mtz button{
        border: none;
        background-color: #6bd1bd;
        color: #fff;
        font-size: 15px;
        padding: 15px 45px;
        border-radius: 30px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .contact_img-box {
        display: flex;
        align-items: center;
    }
    .contact_img-box img{
        width: 100%;
    }
</style>