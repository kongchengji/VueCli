<!--  -->
<template>
    <div class='aitraffic'>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2>
                        <span class="iconfont icon-jiaotong" ></span>
                        智能交通
                    </h2>
                </div>
                <div class="col-md-8">
                    <p>
                        目前，中国交通已经随着人民汽车保有量的增加进入了一个全新的阶段，传统的路口交通控制信号灯已经无法满足当前的路口堵塞、车辆流通等问题。随着人工智能、物联网等新一代信息技术加速应用，智能化交通的概念呼之欲出。
                    </p>
                </div>
            </div>
        </div>
        <div class="textcon"  v-for="item in listaitraffic" :key="item.name" >
            <div class="container" v-if="(item.id%2) != 0">
                <div class="row">
                    <div class="col-md-6">
                        <div class="textnei">
                            <h3>{{item.name}}</h3>
                            <p>
                                {{item.con}}
                            </p>
                            <ul class="list-unstyled">
                                <li v-for='(is,j) in item.exam.split("|")' :key="j">
                                    <span class="iconfont icon-youshiyuquedian" ></span>
                                    &nbsp;&nbsp; {{is}}
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <img :src="item.imgurl">
                    </div>
                    
                </div>
            </div>
            <div class="container" v-else>
                <div class="row">
                    <div class="col-md-6">
                        <img :src="item.imgurl">
                    </div>
                    <div class="col-md-6">
                        <div class="textnei">
                            <h3>{{item.name}}</h3>
                            <p>
                                {{item.con}}
                            </p>
                            <ul class="list-unstyled">
                                <li v-for='(is,j) in item.exam.split("|")' :key="j">
                                    <span class="iconfont icon-youshiyuquedian" ></span>
                                    &nbsp;&nbsp; {{is}}
                                </li>
                            </ul>
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
               listaitraffic:[
                //    { id:1,name:'传统交通路口',url:'img/oldlight.jpg', con:'传统的交通灯大多数都是以固定时长来进行控制的，但是这种交通灯不能对路面的情况进行及时的监控',exam:"缺点1|缺点2|缺点3"},
                //    { id:2,name:'智能交通路口',url:'img/ailight.jpg', con:'传统的交通灯大多数都是以固定时长来进行控制的，但是这种交通灯不能对路面的情况进行及时的监控',exam:"缺点1|缺点2|缺点3"},
                //    { id:3,name:'发展情况',url:'img/oldlight.jpg', con:'传统的交通灯大多数都是以固定时长来进行控制的，但是这种交通灯不能对路面的情况进行及时的监控',exam:"缺点1|缺点2|缺点3"},
                //    { id:4,name:'人们评价',url:'img/ailight.jpg', con:'传统的交通灯大多数都是以固定时长来进行控制的，但是这种交通灯不能对路面的情况进行及时的监控',exam:"缺点1|缺点2|缺点3"}
               ],
               
           };
        },
        created:function(){
            this.getjavatables();
		},
        //方法集合
        methods: {
            getjavatables(){
                this.$axios.get('http://localhost:8080/aitrafficServlet',{
                   params: {
                        name: 'aitraffic',
                    }
               }).then((response) => {
                   console.log(response.data.Listaitraffic);
                   this.listaitraffic = response.data.Listaitraffic;
               })
            //    console.log(this.listaitraffic[0].exam)
            }
        },
    }
</script>

<style>
    .icon-jiaotong{
        font-size: 28px;
    }
    .aitraffic{
        margin-top: 50px;
        padding: 50px 0;
    }
    .aitraffic .textcon{
        margin-top: 50px;
    }
    .aitraffic h2{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .aitraffic .container .col-md-6 img{
        width: 100%;
    }
    .textnei{
        border-radius: 10px;
        height: 100%;
        padding: 10px 10px;
    }
    .textcon:nth-child(2n) .textnei{
        border: 1px solid #fff7e8;
        background-color: #fff7e8;
    }
    .textcon:nth-child(2n-1) .textnei{
        border: 1px solid #ebf9f4;
        background-color: #ebf9f4;
    }
    .textnei p{
        padding: 15px 0;
    }
    .textnei .list-unstyled{
        padding-left: 0;
        list-style: none;
    }
</style>