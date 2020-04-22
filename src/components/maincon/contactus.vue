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
                       <p style="color:red;font-size:12px" ref="dnames"></p>
                       <input type="text" placeholder="您的名字" v-model="userslist.name" @input="deciveName(userslist.name)">
                   </div>
                   <div>
                       <p style="color:red;font-size:12px" ref="demails"></p>
                       <input type="text" placeholder="您的邮箱" v-model="userslist.email" @input="deciveEmail(userslist.email)">
                   </div>
                   <div>
                       <p style="color:red;font-size:12px" ref="dphones"></p>
                       <input type="text" placeholder="您的电话号码" v-model="userslist.phones" @input="decivePhones(userslist.phones)">
                   </div>
                   <div class="mtz">
                       <input type="text" placeholder="您的想法" v-model="userslist.thoughts">
                   </div>
                   <div class="mtz">
                       <button type="submit" @click="sendtojava"> 发送 </button>
                   </div>
               </div>
           </div>
           <div class="col-md-6">
               <div class="contact_img-box">
                   <img src="img/contactus/students.jpg" alt="装饰图片">
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
               userslist:{
                   name:'',
                   email:'',
                   phones:'',
                   thoughts:''
               }
           };
        },
        //方法集合
        methods: {
            sendtojava(){
                let name = this.userslist.name;
                let email = this.userslist.email;
                let phones = this.userslist.phones;
                let thoughts = this.userslist.thoughts;
                // console.log(this.userslist.name+"***");
                // console.log(name);
                this.$axios.get('http://localhost:8080/UserInfos',{
                    params: {
                        ids:'userinfos',
                        name:name,
                        email:email,
                        phones:phones,
                        thoughts:thoughts
                    }
                }
                ).then((response) => {
                    this.userslist.name = "";
                    this.userslist.email = "";
                    this.userslist.phones = "";
                    this.userslist.thoughts = "";
                    // console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            // 判断名字的正则表达式
            deciveName(res){
                if(res == ""){
                    this.$refs.dnames.innerHTML = "";
                }else if(/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/.test(res)){
                    this.$refs.dnames.innerHTML = "";
                    // console.log("最长不得超过7个汉字，或14个字节(数字，字母和下划线)正则表达式" + res)
                }else{
                    this.$refs.dnames.innerHTML = "*输入最长不得超过7个汉字，或14个字节"
                }
            },
            // 判断Email
            deciveEmail(res){
                if(res == ""){
                    this.$refs.demails.innerHTML = "";
                }else if(/^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(res)){
                    this.$refs.demails.innerHTML = "";
                }else{
                    this.$refs.demails.innerHTML = "*输入正确的邮箱"
                }
            },
            decivePhones(res){
                if(res == ""){
                    this.$refs.dphones.innerHTML = "";
                }else if(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(res)){
                    this.$refs.dphones.innerHTML = "";
                }else{
                    this.$refs.dphones.innerHTML = "*输入正确的手机号码"
                }
            },
            deciveThought(){

            }
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