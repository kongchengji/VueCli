<!--  -->
<template>
    <div class='whyneed'  @mouseup="dmouseup">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="text-center"> 专家解释 </h2>
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
        <div class="container" style="border: 1px solid #ccc;">
            <div class="row chatline">
                <img src="img/whyneed/touline.jpg">
                <p class="text-center">无所谓</p>
            </div>
            <div class="row charnei">
                <div class="col-3">
                    <ul>
                        <li class="">
                            <div class="leftd">
                                <img src="img/whyneed/tou4.jpg" style="border-radius: 50%;margin: 10px;">
                            </div>
                            <div class="rightd">
                                <span class="innername">我的phone</span>
                                <span class="infor">[文件]</span>
                            </div>
                        </li>
                        <li class="charneibg">
                            <div class="leftd">
                                <img src="img/whyneed/tou6.jpg" style="border-radius: 50%;margin: 10px;">
                            </div>
                            <div class="rightd">
                                <span class="innername">社会群</span>
                                <span class="infor">[文件]</span>
                            </div>
                        </li>
                        <li class="">
                            <div class="leftd">
                                <img src="img/whyneed/tou2.jpg" style="border-radius: 50%;margin: 10px;">
                            </div>
                            <div class="rightd">
                                <span class="innername">网友2</span>
                                <span class="infor">[文件]</span>
                            </div>
                        </li>
                        <li class="">
                            <div class="leftd">
                                <img src="img/whyneed/tou1.jpg" style="border-radius: 50%;margin: 10px;">
                            </div>
                            <div class="rightd">
                                <span class="innername">网友1</span>
                                <span class="infor">[文件]</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <div class="chead">
                        <div class="hname">
                            社会群
                        </div>
                        <div class="ull">
                            <ul>
                                <li><span class="iconfont icon-yuyintonghua"></span></li>
                                <li><span class="iconfont icon-shexiang"></span></li>
                                <li><span class="iconfont icon-shenglve"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ccon" ref="ccon" @mousewheel="handerMiddle" @mousemove="dousemove">
                        <ul class="cconul" ref="cconul">
                            <li v-for="item in chatqq" :key="item.id">
                                <div class="cclians">
                                    <div class="ccliansgrow"></div>
                                    <div class="ansright">
                                        {{item.say1}}
                                    </div>
                                    <div class="righttriangle"></div>
                                    <div class="anstou">
                                        <img :src="item.tou1" alt="我的头像">
                                    </div>
                                </div>
                                <div class="cclique">
                                    <div class="anstou">
                                        <img :src="item.tou2" alt="对方的头像">
                                    </div>
                                    <div class="lefttriangle"></div>
                                    <div class="ansright">
                                        {{item.say2}}
                                    </div>  
                                </div>
                            </li>
                        </ul>
                        <div class="cconbar"></div>
                        <div class="cconswiperbar" ref="cconswiperbar" :style="{'height':barHeight+'px'}" 
                            @mousedown="dmousedown" 
                        ></div>
                    </div>
                    <div class="cinputbox">
                        <div class="ull">
                            <ul>
                                <li><span class="iconfont icon-smile"></span></li>
                                <li><span class="iconfont icon-gif"></span></li>
                                <li><span class="iconfont icon-jianqie"></span></li>
                                <li><span class="iconfont icon-wenjian"></span></li>
                                <li><span class="iconfont icon-tupian"></span></li>
                                <li><span class="iconfont icon-zhendong"></span></li>
                            </ul>
                        </div>

                        <textarea class="cinputtext" ref="cinputtext" v-model="mytext" placeholder="" @keyup.enter="add">

                        </textarea>

                        <button class="senbut" @click="add">发送</button>
                    </div>
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
                chatqq:[
                   
                ],
                //判断是否应该移动
                flag: false,
                //鼠标移动事件
                topx: 0,
                // 确定滚动条长度
                barHeight:0,
                // 我要发送的话
                mytext:'',
                answ:[
                    
                ],
                //判断是否找到关键词
                cflag:false ,
                // 判断鼠标是否按下
                mouflag:false,
                delY:0
            };
        },
        
        created:function(){
            this.getchatqq();
            // this.swiperlen();
        },
        mounted() { 
            this.initVideo();
        },
        //方法集合
        methods: {
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
            },
            //得到后台数据
            getchatqq(){
                this.$axios.get('http://localhost:8080/chatqqServlet',{
                    params: {
                        name: 'chatqq',
                    }
                }).then((response) => {
                    // console.log(typeof response.data)
                    // console.log(response.data);
                    this.chatqq = response.data.chatqq;
                    this.answ = response.data.answ;
                })
                
            },
            // 判断是否存在此问题回应
            add(){
                if(this.mytext == ""){
                    // console.log(this.$refs.cinputtext)
                    this.$refs.cinputtext.placeholder = "请输入您的问题"
                }else{
                    this.cflag = false
                    this.answ.filter(item => {
                        // console.log(item.akeys)
                        if(this.mytext.includes(item.akeys) == true){
                            let chaqq = {id:this.chatqq.length+1, tou1:item.tou1,say1:this.mytext,tou2:item.tou2,say2:item.cons}
                            this.chatqq.push(chaqq);

                            //添加完数据后清空添加行
                            this.mytext = '';
                            // 更新到最新一句话
                            this.topx = this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight + 140;
                            this.$refs.cconul.style.top = -this.topx + 'px';
                            this.$refs.cconswiperbar.style.top = this.topx * (this.$refs.ccon.offsetHeight - this.barHeight)/(this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight) + 'px';
                            this.cflag = true;
                        }
                    })
                    if(this.cflag == false){
                        let chaqq = {id:this.chatqq.length+1, tou1:'img/whyneed/tou5.jpg',say1:this.mytext,tou2:'img/whyneed/tou1.jpg',say2:'这里没有你需要的答案'}
                        this.chatqq.push(chaqq)

                        //添加完数据后清空添加行
                        this.mytext = '';

                        // 更新到最新一句话
                        this.topx = this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight + 140;
                        this.$refs.cconul.style.top = -this.topx + 'px';
                        this.$refs.cconswiperbar.style.top = this.topx * (this.$refs.ccon.offsetHeight - this.barHeight)/(this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight) + 'px';
                    }
                }
               this.swiperlen()
            },
            // 滑块鼠标按下事件
            dmousedown(e){
                var event = e || window.event;
                this.mouflag = true;

                this.delY = event.clientY - this.$refs.cconswiperbar.offsetTop;
                // console.log(this.delY)
				//防止鼠标选择文章内容
				event.preventDefault();
            },
            dousemove(e){
				if(this.mouflag){
					var event = e || window.event;
                    this.topx = (event.clientY - this.delY)*2;
                    // console.log("topx:" + this.topx)
					//改变距离
					this.changeDistance();
				}
            },
            dmouseup(){
				this.mouflag = false;
			},
            // 判断滑块长度
            swiperlen(){
                this.barHeight = (this.$refs.ccon.offsetHeight)*(this.$refs.ccon.offsetHeight)/this.$refs.cconul.offsetHeight
            },
            //判断鼠标滑轮改变
            handerMiddle(e) {
				var event = e || window.event;
				//取消外部默认联动
				if(event.preventDefault){
					event.preventDefault();
				}else{
					event.returnValue = false;
				}
				//判断浏览器类型
				var direction = 0;
				if(event.wheelDelta){
					//IE
					direction = event.wheelDelta>0?1:-1;
				}else{
					//火狐
					direction = event.detail<0?1:-1;
				}
				//向下滚动时
				this.topx += -direction*10;
                // console.log(this.topx)
                this.changeDistance();
            },
            // 滑块改变距离
            changeDistance(){
                // console.log(this.$refs.cconul.offsetHeight)
				//确定边界
				if(this.topx<0){
					this.topx = 0;
				}
				if(this.topx>this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight){
					this.topx = this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight;
                }
                // console.log(this.$refs.cconul.style.top)
                this.$refs.cconul.style.top = -this.topx + 'px';
                this.$refs.cconswiperbar.style.top = this.topx * (this.$refs.ccon.offsetHeight - this.barHeight)/(this.$refs.cconul.offsetHeight - this.$refs.ccon.offsetHeight) + 'px';
			}
        },
    }
</script>

<style>
    .whyneed{
        margin-top: 60px;
        padding-bottom: 50px;
    }
    .whyneed .row{
        flex-wrap: nowrap;
    }
    .whyneed .audios{
        width: 100%;
        height: 100%;
        /* padding-top:100%; */
        /* background-color: antiquewhite; */
    }
    /* 聊天界面头 */
    .whyneed .chatline{
        /* width: 100%; */
        flex-wrap: wrap;
        padding: 0px;
        position: relative;
    }
    .whyneed .chatline .text-center{
        color: #fff;
        font-size: 24px;
        position: absolute;
        left: 20%;
        margin-left: -84px;
        top: 30%;
    }
    .whyneed .chatline img{
        width: 100%;
        height: 55px;
    }
    /* 聊天界面内容 */
    .whyneed .charnei{
        padding: 0px;
    }
    .whyneed .charnei>div{
        padding: 0px;
        background-color:rgb(249, 249, 249);
    }
    ul{
        list-style: none;
    }
    .whyneed .charnei .col-3 ul>li{
        width: 100%;
        height: 65px;
        display: -webkit-box;
    }
    .whyneed .charnei .charneibg{
        background: #ebebec;
    }
    .whyneed .charnei ul>li>.leftd{
        width: 30%;
        height: 100%;
    }
    .whyneed .charnei ul>li img{
        width: 45px;
        height: 45px;
    }
    .whyneed .charnei ul>li>.rightd .innername{
        display: block;
        font-size: 16px;
        height: 31px;
        line-height: 31px;
    }
    .whyneed .charnei ul>li>.rightd .infor{
        font-size: 14px;
        color: #767676;
        line-height: 15px;
        overflow: hidden;
    }
    .whyneed .charnei .chead{
        width: 100%;
        height: 42px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
    }
    .whyneed .charnei .chead>.hname{
        width: auto;
        height: 100%;
        line-height: 42px;
        margin-left: 20px;
        font-family: 微软雅黑;
        font-size: 18px;
        float: left;
    }

    /* 界面矢量图标 */
    .whyneed .charnei .ull{
        width: 200px;
    }
    .whyneed .charnei .ull ul li{
        width: 35px;
    }
    .whyneed .charnei .ull ul{
        display: flex;
        height: 100%;
        justify-content: space-between;
        line-height: 42px;
    }

    /* 聊天内容 */
    .whyneed .charnei .ccon{
        width: 100%;
        height: 400px;
        border-top: 1px solid #ccc;
        overflow: hidden;
        position: relative;
    }
    .ccon .cconbar{
        height: 400px;
        width: 10px;
        background-color: gray;
        position: absolute;
        right: 0;
        top: 0;
    }
    .ccon .cconswiperbar{
        width: 10px;
        background-color: orange;
        position: absolute;
        right: 0;
        top: 0;
    }
    .charnei .ccon .cconul{
        position: absolute;
        top: 0;
        width: 100%;
    }
    .ccon li{
        width: 100%;
        padding: 10px 15px;
    }
    .ccon li .cclians{
        margin-left: 40%;
        display: flex;
    }
    /* 瓜分剩余空间 */
    .ccliansgrow{
        flex-grow: 1;
    }
    .ccon li .cclique{
        margin: 15px 0;
        display: flex;
    }
    .ccon .ansright{
        max-width: 400px;
        background-color: rgb(18,183,245);
        color: #fff;
        border-radius: 10px;
        font-size: 16px;
        /* position: absolute; */
        /* right: 104px; */
        padding: 5px 10px;
    }
    .lefttriangle{
        width: 0px;
        height: 0px;
        border-width: 12px;
        border-style: solid;
        border-color: transparent rgb(18,183,245) transparent transparent;
        margin-top: 10px;
    }
    .righttriangle{
        width: 0px;
        height: 0px;
        border-width: 12px;
        border-style: solid;
        border-color: transparent transparent transparent rgb(18,183,245);
        margin-top: 10px;
        /* position: absolute;
        right: 80px; */
    }

    /*头像图片样式 */
    .whyneed .charnei .ccon img{
        border-radius: 50%;
    }


    /* 界面输入框 */
    .cinputbox{
        width: 100%;
        height: 140px;
        /* background-color: #fff; */
        /* position: relative; */
        border-top: 1px solid #ccc;
    }
    .cinputbox .senbut{
        width: 68px;
        height: 25px;
        background: #0188fb;
        border: none;
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: white;
    }
    .cinputbox .ull{
        height: 35px;

    }
    .cinputbox .cinputtext{
        width: 100%;
        height: 104px;
        border:none;
    }
</style>