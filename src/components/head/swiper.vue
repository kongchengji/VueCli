<template>
    <!--轮播图-->
    <div id="swiper" ref="swiper" @mouseover="overLoop" @mouseout="outfun">
        <img src="img/indexSwiper/bg1.jpg" class="backpic"/>
        <div class="swiperMain " >
            <h1>交叉口信号灯智能控制综合信息网</h1>
            <p>来自王振超的毕业设计</p>
        </div>
        <div id="left" class="bt" @click="leftclick"></div>
        <div id="right" class="bt" @click="rightclick"></div>
    </div>
</template>

<script>
    // import '../../js/swiper'
    export default {
		data(){  //注意：组件中的data必须是function
			return {
                currentPage:1,
                // botback: document.getElementById("swiper")
			}
        },
        created:function(){
            clearInterval(setInterval(this.startLoop,7000));
            setInterval(this.startLoop,7000);
        },
		methods:{
			changePage(){
                var botback = this.$refs.swiper;
                if(this.currentPage == 7){
                    this.currentPage = 1
                }if(this.currentPage == 0){
                    this.currentPage = 7
                }
                var newMask = document.createElement("img"); 
                // console.log(botback)
                if(botback){
                    botback.appendChild(newMask)
                    newMask.src = "img/indexSwiper/bg"+this.currentPage+".jpg"
                    newMask.className = "backpic"
                }
                
            },
            removePage(){	
                var botback = this.$refs.swiper;
                if(document.getElementsByClassName("backpic").length>1){
                    // console.log(document.getElementsByClassName("backpic").length)
                    var jspic1 = document.getElementsByClassName("backpic")[0];
                    botback.removeChild(jspic1);
                }
            },
            sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            },
            startLoop(){
                this.currentPage += 1;
                // console.log(this.currentPage)
                this.changePage()
                //使用Promise去延时3s让事件发生
                // this.sleep(3000).then(() => {
                    this.removePage()
                    // 这里写sleep之后需要去做的事情
                // })	
            },

            //鼠标移出box
            outfun(){
                //隐藏左右按钮
                left.style.display="none";
                right.style.display = 'none';
            },
            // 鼠标移入box
            overLoop(){
                    //显示左右按钮
                    left.style.display="block";
                    right.style.display = 'block';
            },

            //点击左右按钮
            leftclick(){
                this.currentPage--
                this.changePage()
                this.removePage()
            },
            rightclick(){
                this.currentPage++
                this.changePage()
                this.removePage()
            }
        },
	}

</script>

<style>
    #swiper{
        margin-top: 50px;
        width: 100%;
        height: 50vw;
        max-height: 90vh;
        position: relative;
        background-color: rgba(2, 6, 14, 0.7);
        /* background-color: lightblue; */
    }
    #swiper .swiperMain{
        position: absolute;
        z-index: 99;
        width: 70%;
        height: 70%;
        margin-left: 15%;
        margin-top: 10%;
        padding: 15px;
        /* background-color: rgba(255,255,255,0.9); */
    }
    #swiper .swiperMain h1{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 4.5rem;
        color: #fff;
    }
    #swiper .swiperMain p{
        font-size: 1.5rem;
        font-weight: 600;
        color: #fff;
    }
    #left{
        position: absolute;
        background: url('../../assets/img/prev.png');
        left: 0;
        top: 25vw;
        width: 50px;
        height: 50px;
        z-index: 10;
        display: none;
    }
    #right{
        position: absolute;
        background: url('../../assets/img/next.png');
        right: 0;
        top: 25vw;
        z-index: 10;
        width: 50px;
        height: 50px;
        display: none;
    }

    .backpic{
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        animation:opacityrun 10s infinite linear;
    }
    @keyframes opacityrun
    {
        0%   {opacity: 0;}
        20%  {opacity: 0.8;}
        80%  {opacity: 0.8;}
        100%  {opacity: 0;}
    }
</style>