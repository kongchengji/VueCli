<!-- 关于我们 -->
<template>
    <div class='aboutwe'>
        <div class="logobox">
            <h2>
                AITLC团队
            </h2>
        </div>
        <div class="aboutcontainer">
            <div class="row">
                <div class="col-md-3">
                    <h5> 关于我们 </h5>
                    <p>王振超<br>
                        司徒炜豪<br>
                        康彦丰<br>
                        杨志芳<br>
                        王煦童<br>
                        李非<br>
                        吕创
                    </p>
                </div>
                <div class="col-md-3">
                    <h5> 关于我们 </h5>
                    <p>王振超<br>
                        司徒炜豪<br>
                        康彦丰<br>
                        杨志芳<br>
                        王煦童<br>
                        李非<br>
                        吕创
                    </p>
                </div>
                <div class="col-md-3">
                    <h5> 关于我们 </h5>
                    <p>王振超<br>
                        司徒炜豪<br>
                        康彦丰<br>
                        杨志芳<br>
                        王煦童<br>
                        李非<br>
                        吕创
                    </p>
                </div>
                <div class="col-md-3">
                    <h5> 关于我们 </h5>
                    <p>王振超<br>
                        司徒炜豪<br>
                        康彦丰<br>
                        杨志芳<br>
                        王煦童<br>
                        李非<br>
                        吕创
                    </p>
                </div>
            </div>
        </div>
        <div class="aboutlink">
            <div class="social-box">        
                <a href="">
                    <span class="iconfont icon-weixin" style="font-size:32px"></span>
                </a>
                <a href="">
                    <span class="iconfont icon-qq" style="font-size:32px"></span>
                </a>
                <a href="">
                    <span class="iconfont icon-xiaochengxu" style="font-size:32px"></span>
                </a>
                <a href="">
                    <span class="iconfont icon-weibo" style="font-size:32px"></span>
                </a>
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
    /* 导入图标 */

    .aboutwe{
        width: 100%;
        height: 530px;
        background-color: #363636;
        padding-top: 75px;
    }
    .aboutwe>.logobox{
        width: 100%;
        height: 58px;
        color: #ffffff;
        display: flex;
        justify-content: center;
    }
    .aboutwe>.logobox>h2{
        height: 42px;
        border-bottom: 1.5px solid #fdd31d;
        font-weight: bolder;
    }
    .aboutwe>.aboutcontainer{
        widows: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 85%;
        height: 312px;
        padding: 45px 0;
    }
    .aboutcontainer>.row{
        margin: 0 auto;
        max-width:85%; 
        height: 225px;
        display: flex;
    }
    .aboutcontainer>.row>div{
        width: 25%;
        height: 100%;
        color:#ffffff;
    }
    .aboutcontainer>.row>.col-md-3>h5{
        font-size: 22px;
    }
    .aboutcontainer>.row>.col-md-3>p{
        font-size: 16px;
    }
    .aboutwe .aboutlink{
        width: 90%;
        padding: 25px 0;
        border-top: 1px solid #898989;
        margin: 0 auto;
    }
    .aboutwe .aboutlink>.social-box{
        display: flex;
        width: 400px;
        margin: 0 auto;
        justify-content: center;
    }
    .aboutlink>.social-box a{
        padding-right: 10px;
        color: white;
    }
    .aboutlink>.social-box a:hover{
       text-decoration: none;
   }
</style>