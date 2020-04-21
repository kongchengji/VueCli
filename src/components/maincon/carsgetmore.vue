<!-- 主页面getMore的内容 -->
<template>
   <div class='getMore'>
       <div class='carsgetmore' v-for="item in getmorelist" :key="item.id">
       <div class="container" v-if="(item.id%2) != 0">
           <div class="row">               
               <div class="col-md-6">
                   <div class="about_detail-box">
                       <h3> {{item.name}} </h3>
                       <p>
                           {{item.pcon}}
                       </p>
                       <div>
                           <router-link :to="item.routerlink"><button>更多</button></router-link>
                       </div>
                   </div>
               </div>
               <div class="col-md-6">
                   <div>
                       <img :src="item.imgurl">
                   </div>
               </div>
           </div>
       </div>
       <div class="container" v-else>
           <div class="row"> 
               <div class="col-md-6">
                   <div>
                       <img :src="item.imgurl">
                   </div>
               </div>              
               <div class="col-md-6">
                   <div class="about_detail-box">
                       <h3> {{item.name}} </h3>
                       <p>
                           {{item.pcon}}
                       </p>
                       <div>
                           <router-link :to="item.routerlink"><button>更多</button></router-link>
                       </div>
                   </div>
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
               getmorelist:[
                //    { id:1,
                //     name:'智能交通灯',
                //     pcon:'交通系统消耗了全球约1／3的能源。以石油产品为燃料的汽车是最主要的现代交通运输工具，它给人们带来方便和快捷的同时，也带来了无法回避的环境问题。<br>根据20世纪七八十年代美国、日本对城市空气污染源的调查，城市空气中90％以上的一氧化碳、<br>60％以上的碳氢化合物和30％以上的氮氧化物来自汽车排放。这些污浊的气体使人类的生存环境受到极大威胁。汽车污染已成为世界性公害，其对于温室气体浓度增加的“贡献”不容忽视。',
                //     imgurl:'img/aitrafficlight.jpg',
                //     routerlink:'/home/aitraffic'
                //    },
                //    {
                //        id:2,
                //        name:'城市汽车保有量',
                //         pcon:'中新经纬客户端4月9日电 9日，国务院联防联控机制就应对疫情影响稳定和扩大汽车消费工作情况举行发布会，国家发展改革委产业发展司副司长蔡荣华介绍，目前，中国全国汽车保有量大约在2.6亿辆左右，千人汽车保有量从原来不到10辆快速增长到180多辆，达到全球平均水平。<br>有记者问，2018年以来我国汽车产销连续下滑，是不是意味着我们汽车消费市场潜力已经很有限了？如何看待未来我国汽车产业的市场走势？<br>蔡荣华表示，目前我国汽车产业已经走过了快速发展的阶段，进入由数量扩张向质量提升的转型时期，但产业长期稳定向好的发展态势没有改变，未来市场空间依然非常广阔。我国汽车年产量和销量从原来不足一百万辆持续增长到近年来的2800万辆左右，连续多年位居世界第一。目前，我国全国汽车保有量大约在2.6亿辆左右，千人汽车保有量从原来不到10辆快速增长到180多辆，达到全球平均水平。',
                //         imgurl:'img/citycars.png',
                //         routerlink:'/home/cityrnums'
                //    },
                //     {
                //        id:3,
                //        name:'城市汽车污染',
                //         pcon:'交通系统消耗了全球约1／3的能源。以石油产品为燃料的汽车是最主要的现代交通运输工具，它给人们带来方便和快捷的同时，也带来了无法回避的环境问题。<br>根据20世纪七八十年代美国、日本对城市空气污染源的调查，城市空气中90％以上的一氧化碳、<br>60％以上的碳氢化合物和30％以上的氮氧化物来自汽车排放。这些污浊的气体使人类的生存环境受到极大威胁。汽车污染已成为世界性公害，其对于温室气体浓度增加的“贡献”不容忽视。',
                //         imgurl:'img/aitrafficlight.jpg',
                //         routerlink:'/home/pollution'
                //    }
               ]
           };
       },
       created:function(){
            this.getmorelists();
		},
       //方法集合
       methods: {
           getmorelists(){
               this.$axios.get('http://localhost:8080/indexMainServlet',{
                   params: {
                        name: 'indexmain',
                    }
               }).then((response) => {
                //    console.log(response.data);
                    this.getmorelist = response.data.getmorelist;
               })
           }
       },
   }
</script>

<style>
    .carsgetmore{
        padding: 50px 0;
        text-align: left;
    }
    .carsgetmore img{
        max-width: 100%;
    }
    .carsgetmore:nth-child(2n) .about_detail-box button{
        background-color: #fdd31d;
        color: #fefeff;
        padding: 15px 45px;
        border-radius: 10px;
        font-size: 15px;
        transition: all 0.3s ease 0s;
    }
    .carsgetmore:nth-child(2n-1) .about_detail-box button{
        background-color: #6ebca8;
        color: #fefeff;
        padding: 15px 45px;
        border-radius: 10px;
        font-size: 15px;
        transition: all 0.3s ease 0s;
    }
    .carsgetmore .about_detail-box button:hover{
        -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.7);
        transform: translateY(-7px);
    }
</style>