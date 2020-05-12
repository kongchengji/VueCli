<!-- 管理员登录 -->
<template>
   <div class='adminlogin'>
       <div class="bgadmin">
           <img src="img/ourai/bg.jpg" alt="背景图片">
       </div>
       <div class="login">
            <form ><h1>管理员登录</h1>
                <p></p>
                <div class="msg-warn hide"><b></b>公共场所不建议自动登录，以防账号丢失</div>
                <p><input type="text" name="" value="" placeholder="管理员名称" v-model="userName"></p>
                <p><input type="password" name="" value="" placeholder="密码" v-model="passWord"></p>
                <p><input type="submit" name="" value="登  录" @click="adminlogin"></p>
            </form>
        </div>
   </div>
</template>

<script>
   export default {
       data() {
           //这里存放数据
           return {
               userName:'',
               passWord:''
           };
       },
       //方法集合
       methods: {
           adminlogin(){
               let userName = this.userName;
               let passWord = this.passWord;
               this.$axios.get('http://localhost:8080/AdminLogin',{
                    params: {
                        userName:userName,
                        passWord:passWord
                    }
                }
                ).then((response) => {
                    // console.log(response.data)
                    if(response.data == true){
                        this.$router.push({path:"/home/admincon"})
                    }else{
                        alert("名称或密码错误");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
           }
       },
   }
</script>

<style>
    .adminlogin{
        width: 100vw;
        height: 100vh;
        background-size: 100% 100%;
    }
    .adminlogin .bgadmin{
        position: fixed;
        top: 0;
        height: 100%;
        width:100%;
        z-index: -10;
        
    }
    .adminlogin .bgadmin img{
        height: 100%;
        width:100%;
    }
    .adminlogin .login form{
        position: absolute;
        top: 18%;
        right: 140px;
        padding: 20px 0;
    /*  text-align: center; */
        z-index: 10;
        background: #fff;
        padding-left:50px;
        border: 1px solid #dbdbdb;
        width: 480px;
        height: 410px;
    }
    .adminlogin .login h1{
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 20px;
    }
    .adminlogin .login .msg-warn {
        position: relative;
        background: #fef4e5;
        color: #666;
        display: inline-block;
        border: 1px solid #f6c090;
        padding: 3px 31px 3px 31px;
        line-height: 15px;
        height: auto;
    }
    .adminlogin .login p{
        margin-top: 15px;
    }
    .adminlogin .login input{
        border: 1px solid #dbdbdb;
        font-size: 20px;
        padding-left: 10px;
        width: 270px;
        height: 40px;
        border-radius: 3px;
    }
    .adminlogin .login input[type="submit"] {
        width: 280px;
        background: #C10000;
        font-size: 20px;
        border: none;
        color: #fff;
    }
</style>