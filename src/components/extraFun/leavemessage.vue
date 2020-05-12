<!--  -->
<template>
   <div class='leavemessage'>
       <div class="container">
           <div class="row justify-content-center">
               <div class="col-lg-8">
                   <hr>
                   <div class="leaveline">
                       <h5 class="text-center">{{ this.liuyanlist.length }}条评论</h5>
                       <!-- 倒三角 -->
                       <div class="sanjiao"></div>
                       <!-- 留言介绍 -->
                       <div class="liucon">
                           在这里你可以看到其他人的留言，也可以自己发布留言
                       </div>
                   </div>
                   <div class="liumain">
                       <ul>
                            <li class="everyliu" v-for="item in liuyanlist" :key="item.lou">
                                <div class="liuname" style="font-weight: bold;">用户：{{ item.name }}</div>
                                <div class="liuhua" style="padding:10px 0;">
                                    {{ item.text }}
                                </div>
                                <div class="liulun" style="font-size:12px;color:gray;"> 
                                    {{ item.lou }}楼 · {{ item.date | dateFormat }}
                                </div>
                                <hr>
                            </li>

                       </ul>
                       <div class="innerbox"></div>
                   </div>
                   <div class="liusend">
                       <textarea v-model="liuyan" @keyup.enter="liuyansend"></textarea>
                       <div class="sento" @click="liuyansend">发送</div>
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
               liuyanlist:[
                //    {
                //         name:'作何',
                //         text:'关羽智能交通灯的想法我有如下的一些看法',
                //         lou:4,
                //         date:new Date(),
                //         city:''
                //    }
               ],
               liuyan:''
           };
       },
       created:function(){
           this.liuyanget();
       },
       //方法集合
       methods: {
           liuyanget(){
               this.$axios.get('http://localhost:8080/LiuyanServlet',{
                        params: {
                            ids:'liuyanget',
                        }
                    }
                    ).then((response) => {
                        // console.log(response.data.liuyanlist)
                        this.liuyanlist = response.data.liuyanlist;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
           },
           liuyansend() {
            //    console.log(returnCitySN["cip"]+','+returnCitySN["cname"]) 
               let n = returnCitySN["cip"];
               let city = returnCitySN["cname"];
               if(this.liuyan != ''){
                   let text = this.liuyan;
                   let lou = this.liuyanlist.length+1;
                   let date = new Date();
                    var says = {name:n,text:text,lou:lou,date:date,city:city};
                    this.liuyanlist.push(says)
                    //添加完数据后清空添加行
                    this.liuyan = ""
                    //发送数据给后台
                    this.$axios.get('http://localhost:8080/LiuyanServlet',{
                        params: {
                            ids:'liuyanpost',
                            name:n,
                            text:text,
                            lou:lou,
                            date: date,
                            city:city
                        }
                    }
                    ).then((response) => {
                        console.log(response);
                        // this.liuyanlist = response.data.liuyanlist;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
               }
           }
       },
       filters: {  //定义一个私有过滤器  有两个条件：过滤器名称和处理函数
            dateFormat:function(dateStr,pattern = ''){
                var dt = new Date(dateStr)
                
                var y = dt.getFullYear()
                var m = dt.getMonth() + 1
                var d = dt.getDate()
                var h = dt.getHours()
                var mm = dt.getMinutes()
                var ss = dt.getSeconds()
                
                return `${y}-${m}-${d} ${h}:${mm}`
            }
        }
   }
</script>

<style>
    .leavemessage{
        background-color: white;
    }
    .leavemessage .sanjiao{
        width: 0; 
        height: 0;
        border-width: 10px;
        margin: 0 auto;
        border-style: solid;
        border-color: transparent rgb(220, 220, 220) transparent transparent;
        transform: rotate(90deg); /*顺时针旋转90°*/
    }
    .leavemessage .liucon{
        background-color: rgb(220, 220, 220);
        border-radius: 10px;
        padding: 5px 15px;
        font-size: 14px;
        color: gray;
    }
    .leavemessage .liumain{
        padding: 10px 30px 0 30px;
        max-height: 450px;
        overflow-y: auto;
    }

    .leavemessage .liusend {
        padding :10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .leavemessage .liusend textarea{
        width: 80%;
        height: 30px;
        
    }
    .leavemessage .liusend .sento{
        border: none;
        background-color: #6bd1bd;
        color: #fff;
        font-size: 15px;
        padding: 10px 35px;
        border-radius: 30px;
        text-transform: uppercase;
        font-weight: bold;
        cursor:pointer;
    }
</style>