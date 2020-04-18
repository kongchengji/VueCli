/* ****************************** 改变背景图片 *********************************** */
console.log("--------")

if(document.getElementById("swiper")){
    var botback = document.getElementById("swiper");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    //启动一个定时器去更换pic中的src属性
    var currentPage = 1
    function changePage(){
        if(currentPage == 4){
            currentPage = 1
        }if(currentPage == 0){
            currentPage = 3
        }
        var newMask = document.createElement("img"); 
        // console.log("*****************")
        botback.appendChild(newMask)
        newMask.src = "./img/bg"+currentPage+".jpg"
        newMask.className = "backpic"
    }
    
    function removePage(){	
        if(document.getElementsByClassName("backpic")[0]){
            var jspic1 = document.getElementsByClassName("backpic")[0];
            botback.removeChild(jspic1);
        }
        
    
    //	botback.removeChild(jspic1);
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    //定时器
    var timer = setInterval(startLoop,7000)
    function startLoop(){
        
        currentPage += 1;
        changePage()
        //使用Promise去延时3s让事件发生
        sleep(3000).then(() => {
            removePage()
            // 这里写sleep之后需要去做的事情
        })	
    }
    
        //鼠标进入box,左右按钮出现,定时器轮播消失，添加监听事件
    botback.addEventListener("mouseover",overLoop,false)
    //
    ////overLoop方法
    function overLoop(){
        //显示左右按钮
        left.style.display="block";
        right.style.display = 'block';
    }
    //
    //鼠标移出box
    botback.addEventListener("mouseout",outfun,false)
    function outfun(){
        //隐藏左右按钮
        left.style.display="none";
        right.style.display = 'none';
    }
    
    //点击左右按钮
    left.addEventListener("click",function(){
        currentPage--
        changePage()
        removePage()
    },false)
    right.addEventListener("click",function(){
        currentPage++
        changePage()
        removePage()
    },false)
    
}

