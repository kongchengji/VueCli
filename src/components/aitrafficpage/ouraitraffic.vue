<!--  -->
<template>
    <div class='ouraitraffic'>
        <div class="bgjpg">
           <img src="img/ourai/bg.jpg" alt="背景图片">
        </div>
       <!-- 页面头 -->
        <div class="ourheader">
           <div class="container">
               <div class="row">
                    <div class="col-lg-6">
                        <h1 class="ourh1">
                            <strong class="displayBlock">AITLC团队</strong>
                            <span class="displayBlock">IT Service Provider.</span>
                        </h1>
                        <p style="font-size: 16px;color: #6f87aa;">
                            团队介绍

                        </p>
                    </div>
                </div>
            </div>  
            <div class="siyiyuan">
            </div>   
            <div class="moveqiu"></div>
            <div class="moveqiu2"></div>
            <div class="moveqiu3"></div>
        </div>  
        <!-- 参考资料下载链接 -->
        <div class="ourwords">
            <div class="container ziliaohrefs">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>参考资料下载链接</h2>
                        <div class="ourtable">
                           <div v-for="item in filedownlist" :key="item.id">
                               <a href="javascript:;" @click="filedownload(item.filename)">{{ item.filename }}</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        <!-- 我们的成果 -->
        <div class="ourResult">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="text-center"> 我们的模拟效果 </h2>
                        <p>
                            该项目基于 JavaScript 开发，让用户能在浏览器中快速构建动画模型，且支持导出成视频或 gif 动图，整体功能较完善，感兴趣的同学可以体验下。
                        </p>
                    </div>
                    <div class="col-lg-6" ref="shipin">
                        <!-- 视频 -->
                        <div class="audios">
                            <video id="myVideo" class="video-js" muted >
                            <source
                                src="/aduio/tv2.mp4"
                                type="video/mp4"
                            >
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 书本翻页显示 -->
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="text-center"> 我们的成长 </h2>
                    </div>
                </div>
            </div>
            <div class="book">
                
                <div class="book_page preserve-3d" v-for="item in bookslist" :key="item.id">		
                    <div class="book_front preserve-3d">
                        <div>
                            <img :src="item.imgurl" alt="">
                        </div>
                        <h3>{{ item.line }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="book_after preserve-3d">
                        <div>
                            <img :src="item.imgurl2" alt="">
                        </div>
                        <h3>{{ item.line2 }}</h3>
                        <p>{{ item.text2 }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 留言板功能 -->
        <leavemessage></leavemessage>
        <!-- 团队成员 -->
        <teammember></teammember>
    </div>
</template>

<script>
    import teammember from '../maincon/teammember.vue'
    import leavemessage from '../extraFun/leavemessage.vue'

    var zindex = 3;
   export default {
       
       data() {
           //这里存放数据
           return {
               bookslist:[
                   { id:1 },
                   { id:2 },
                   { id:3 }
               ],
                filedownlist:[
                    // {
                    //     id:1,
                    //     filename:'项目计划书2020.docx'
                    // },
                    // {
                    //     id:2,
                    //     filename:'项目计划书2020.docx'
                    // },
                    // {
                    //     id:3,
                    //     filename:'项目计划书2020.docx'
                    // },
                    // {
                    //     id:4,
                    //     filename:'项目计划书2020.docx'
                    // }
                ]
           };
       },
       created(){
           this.getdatas()
       },
       mounted() { 
            this.initVideo(),
            $('.book_page').click(function(){
                // console.log("****")
                if($(this).hasClass('transform_start')){
                    $(this).removeClass('transform_start').addClass('transform_end');
                    $(this).css('z-index',0);
                    zindex--;
                }else{		
                    $(this).removeClass('transform_end').addClass('transform_start');	
                    $(this).css('z-index',zindex);
                    zindex++;
                }
            })
        },
       //方法集合
       methods: {
            //  得到数据
            getdatas(){
                this.$axios.get('http://localhost:8080/ourdatas',{
                   params: {
                        name: 'ourdatas',
                    }
                }).then((response) => {
                    this.bookslist = response.data.booklist;
                    this.filedownlist = response.data.filesdown;
                })
            },
            //下载文件
            filedownload(res){
                let n = res;
                // console.log(n);
                this.$axios.get('http://localhost:8080/fileDownloadServlet',{
                    responseType: 'blob',
                    params: {
                        filename: n,
                    }
                }).then((response) => {
                    // console.log("成功了");
                    // console.log(response.data);
                    let url = window.URL.createObjectURL(new Blob([response.data]));
                    let link = document.createElement("a");
                    link.style.display = "none";
                    link.href = url;
                    link.setAttribute("download", res);

                    document.body.appendChild(link);

                    link.click();
                })
            },    
            //初始化视频方法
            initVideo() { 
                let myPlayer = this.$video(myVideo, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    // autoplay: "muted",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: 540,
                    //设置视频播放器的显示高度（以像素为单位）
                    height: 340
                });
            }
       },
       components:{
            teammember,
            leavemessage
       }
   }
</script>

<style>
    .ouraitraffic{
        margin-top: 50px;
    }
    /* 背景图片 */
    .bgjpg{
        position: fixed;
        top: 0;
        height: 98vh;
        z-index: -10;
        width:100vw;
        /* opacity: 0.7; */
    }
    /* 头部样式 */
    .ouraitraffic .ourheader{
        padding: 80px 40px;
        background-color: #fff;
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
    .ourheader .displayBlock{
        display: block;
    }
    /* 标签字体大小 */
    .ourh1{
        font-size: 50px;
        margin-bottom: 10px;
    }
    .ourh1>span{
        font-weight: 400;
    }
    /* 左上角四分之一圆 */
    .siyiyuan{
        width:35vw;
        height:35vw;
        border-radius:0 0 0 100%;
        background:#F00;
        position: absolute;
        right: 0;
        top: 0;
        opacity: 0.5;
    }
    /* 运动小球 */
    .moveqiu{
        width: 100px;
        height: 100px;
        background: linear-gradient(to right, #e89f5c 0%, #d54ad0 61%, #752abf 100%);
        border-radius: 50%;
        opacity: .3;
        position: absolute;
        left: 120px;
        top: 20%;
    }
    .moveqiu2{
        position: absolute;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        bottom: 100px;
        left: -50px;
        background: #0f73ee;
        opacity: .2;
    }
    .moveqiu3{
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        bottom: -80px;
        left: 30vw;
        background: yellow;
        opacity: .2;
    }
    /* 参考资料链接 */
    .ouraitraffic .ourwords{
        width: 100%;
        min-height: 300px;
        padding: 20px;
    }
    .ourwords>.ziliaohrefs{
        background-color: rgba(0,0,0,0.5);
        color:#fff;
    }
    /* 参考资料表 */
    .ourwords>.ziliaohrefs .ourtable{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px 80px;
    }
    .ourwords>.ziliaohrefs .ourtable>div{
        min-width: 200px;
        min-height: 35px;
        font-size: 18px;
    }
    .ourwords>.ziliaohrefs .ourtable>div>a{
        color: white;
        text-decoration: none;
    }

    /* 我们的成果 */
    .ourResult{
        background-color: #fff;
        padding-bottom: 100px;
    }
    .ourResult .book{
        width: 1000px;
        height: 480px;
        position: relative;
        margin: 0 auto;
        background-color: darkgray;
    }
    .ourResult .book_page{
        position: absolute;
        width: 500px;
        height: 480px;
        background-color: yellow;
        right: 0px;
        /* font-size: 30px; */
        /* 将开启3d空间，方便翻页后front和back的3d变换 */
        /*transform-style: preserve-3d;*/ 
        /* 奇点设为左边 */
        transform-origin: left;
        /* 设置翻书（旋转）的运动时间，运动形式 */   
        transition:2s all ease;  
        /* 提升层级否则会被盖住 */
        /*z-index:5;*/ 
        /* 设置景深来更好的展示3D效果，并给旋转角度一个初始值，防止抖动发生 */
        transform:perspective(1800px) rotateY(0deg);

    }

    .ourResult .preserve-3d {
        /*transform-style属性指定了，该元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化。*/
        transform-style: preserve-3d;
    }

    .ourResult .book_page .book_front{
        width: 100%;
        height: 100%;
        background-color: rgb(249, 249, 249);
        position: absolute;
        top: 0;
        /*backface-visibility:hidden;*/
    }
    .ourResult .book_page .book_front img{
        width: 400px;
        height: 280px;
        margin: 10px 50px;
    }

    .ourResult .book_page .book_after{
        position: absolute;
        top:0;
        transform:rotateY(180deg);
        width: 100%;
        height: 100%;
        background-color: rgb(249, 249, 249);
        /*backface-visibility:hidden;*/
    }
    .ourResult .book_page .book_after img{
        width: 400px;
        height: 280px;
        margin: 10px 50px;
    }

    .ourResult .transform_start{
        animation: pagetransfrom1 3s;
        animation-fill-mode: forwards;
    }
    .ourResult .transform_end{
        animation: pagetransfrom2 3s;
        animation-fill-mode: forwards;
    }
    @keyframes pagetransfrom1{
        from{
            transform:perspective(1800px) rotateY(0deg);
        }
        to{
            transform:perspective(1800px) rotateY(-180deg);
        }
    }
    @keyframes pagetransfrom2{
        from{
            transform:perspective(1800px) rotateY(-180deg);
        }
        to{
            transform:perspective(1800px) rotateY(0deg);
        }
    }
</style>