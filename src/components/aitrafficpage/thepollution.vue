<!--  -->
<template>
   <div class='pollution'>
       <div class="container">
           <div class="row justify-content-center text-center">
               <div class="col-lg-6">
                   <h2>你是否了解汽车怠速会消耗多少资源</h2>
               </div>
           </div>
       </div>
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>汽车排量情况表</h3>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">车型</th>
                        <th scope="col">排量</th>
                        <th scope="col">怠速油耗(mL/s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in qcdsyh" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.ctype }}</td>
                            <td>{{ i.pailiang }}</td>
                            <td>{{ i.youhao }}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-center" style="font-size:12px">注：汽车开空调时要比平时增加0.05mL/s</p>
                <p style="color:orange">结论:经过分析可得汽车怠速油耗，在包括公交车载重车之内的情况下，等待绿灯的时候平均每辆车油耗为0.8L/h（800ml/3600s），即0.22ml/s。</p>
           </div>
       </div>
       <!-- 减少等待时间带来的经济效益表 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>减少怠速时间所带来的经济效益</h3>
               <p>据表一，以1.8排量的大众帕萨特的怠速油耗（0.222--0.306 mL/s ）为例，截止2018年7月，昆明市汽车保有量259万辆【2】，为计算方便以三分之一左右约100万辆来计算，停止等待1秒至15秒所节约油量及带来的经济效益如下表：</p>
               <p class="text-center" style="color:red;font-size:12px">计算公式：经济效益=等待时间*节约油量*油价<br>注：平均油价为7元/L</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        <th scope="col">节约最高汽油（L）</th>
                        <th scope="col">经济效益（元）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in jsdsjj" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
       </div>
       <!-- 昆明市100万辆汽车如果每天减少等待1秒或15秒，一年带来的经济效益如下 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <p>昆明市100万辆汽车如果每天减少等待1秒或15秒，一年带来的经济效益如下</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        <th scope="col">节约最高汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in jswait" :key="i.id">
                        <tr  v-if="i.id<3">
                            <th scope="row" >{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
                <p style="color:orange">结论:即昆明市100万辆轿车在一年内平均减少怠速1秒至15秒，可节约汽油约8.1万升—167.54万升，所带来的经济效益约为：56万元—1172万元</p>
           </div>
           <div class="col-sm-8">
               <p>截止2018年6月，全国汽车保有量3.19亿辆【2】，以大约三分之一1亿辆来计算，一年每天减少等待1秒及15秒节约的汽油量及经济效益如下：</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">序号</th>
                        <th scope="col">减少等待时间（s）</th>
                        <th scope="col">节约最低汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        <th scope="col">节约最高汽油（万升）</th>
                        <th scope="col">经济效益（万元）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in jswait" :key="i.id">
                        <tr v-if="i.id>=3">
                            <th scope="row" >{{ i.id }}</th>
                            <td>{{ i.waittimes }}</td>
                            <td>{{ i.savegos }}</td>
                            <td>{{ i.benefit }}</td>
                            <td>{{ i.savemax }}</td>
                            <td>{{ i.maxben }}</td>
                        </tr>
                    </tbody>
                </table>
                <p style="color:orange">结论:即全国1亿万辆轿车在一年内平均减少怠速1秒至15秒，可节约汽油约810.3万升—16753.5万升，所带来的经济效益约为：5672.1万元—117274.5万元</p>
           </div>
       </div>
       <!-- 减少怠速降低的排放量 -->
       <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>减少怠速降低的排放量</h3>
               <p>据统计，汽车发动机每燃烧1千克汽油，要消耗15千克新鲜空气，
                   同时排出150—200克的一氧化碳（CO）、4—8克的碳氢化合物、4—20克的氧化氮等污染物</p>
               <p class="text-center" style="color:red;font-size:12px">
                   根据公式：质量=密度*体积，汽油的平均密度大约0.73kg/L【4】，所以1L汽油大约有0.73千克<br>
                   CO:150-200克，取中间值175克<br>
                    HC：4-8克，取中间值6克<br>
                    NO：4-20克，取中间值12克  <br> 
                    计算公式：以CO为例 175*0.73=127.75克
                </p>
                <!-- 表一 -->
                <p class="text-center">表一：1L汽油污染物的排放情况</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">污染物</th>
                        <th scope="col">排放量（克）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">CO</th>
                            <td>127.75</td>
                        </tr>
                        <tr>
                            <th scope="row">HC</th>
                            <td>4.38</td>
                        </tr>
                        <tr>
                            <th scope="row">NO</th>
                            <td>8.76</td>
                        </tr>
                    </tbody>
                </table>
                <!-- 表二 -->
                <p class="text-center">表二：最低怠速油耗的污染物排放</p>
               <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">减少等待时间（s）</th>
                            <th scope="col">节约最低汽油（L）</th>
                            <th scope="col">CO（克）</th>
                            <th scope="col">HC（克）</th>
                            <th scope="col">NO（克）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in minwaitpo" :key="i.id">
                        <tr v-if="i.flag == 'min'">
                            <th scope="row">{{i.savet}}</th>
                            <td>{{i.savegos}}</td>
                            <td>{{i.co}}</td>
                            <td>{{i.hc}}</td>
                            <td>{{i.no}}</td>
                        </tr>
                    </tbody>
                </table>
                <!-- 表三 -->
                <p class="text-center">表三：最高怠速油耗的污染物排放</p>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">减少等待时间（s）</th>
                            <th scope="col">节约最低汽油（L）</th>
                            <th scope="col">CO（克）</th>
                            <th scope="col">HC（克）</th>
                            <th scope="col">NO（克）</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in minwaitpo" :key="i.id">
                        <tr v-if="i.flag == 'max'">
                            <th scope="row">{{i.savet}}</th>
                            <td>{{i.savegos}}</td>
                            <td>{{i.co}}</td>
                            <td>{{i.hc}}</td>
                            <td>{{i.no}}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
           <div class="col-sm-8">
                <p class="text-center" style="color:blue">以上均是按照小型轿车1.8T排放量进行汽油节约量及所带来的经济效益估算，
                放眼全国，大排量的公交车、货车等在交通运输中占有重要地位，
                产生的能源消耗、尾气排放及带来的经济损失不言而喻。
                </p>
           </div>
       </div>
        <div class="row justify-content-center">
           <div class="col-sm-8">
               <h3>资料来源</h3>
               <div v-for="i in filesrc" :key="i.id">
                   <h4 class="text-center">{{ i.name }}</h4>
                   <p>{{ i.text }}</p>
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
            //    汽车排量情况表
               qcdsyh:[
                //    {
                //        id:1,
                //        ctype:'奥迪A8',
                //        pailiang:3.0,
                //        youhao:'0.361--0.417'
                //    },
                //    {
                //        id:2,
                //        ctype:'奥迪A8',
                //        pailiang:3.0,
                //        youhao:'0.361--0.417'
                //    },
                //    {
                //        id:3,
                //        ctype:'奥迪A8',
                //        pailiang:3.0,
                //        youhao:'0.361--0.417'
                //    },
                //    {
                //        id:4,
                //        ctype:'奥迪A8',
                //        pailiang:3.0,
                //        youhao:'0.361--0.417'
                //    }
               ],

            //减少怠速时间所带来的经济效益   减少等待时间（s）	节约最低汽油（L）	经济效益（元）	节约最高汽油（L）	经济效益（元）
                jsdsjj:[ 
                    // {
                    //     id:1,
                    //     waittimes:1,
                    //     savegos:222,
                    //     benefit:1554,
                    //     savemax:306,
                    //     maxben:2124
                    // },
                    // {
                    //     id:2,
                    //     waittimes:1,
                    //     savegos:222,
                    //     benefit:1554,
                    //     savemax:306,
                    //     maxben:2124
                    // },
                    // {
                    //     id:3,
                    //     waittimes:1,
                    //     savegos:222,
                    //     benefit:1554,
                    //     savemax:306,
                    //     maxben:2124
                    // }
                ],
            // 减少等待1秒或15秒  			
                jswait:[ 				
                    {
                        id:1,
                        waittimes:'1*365',
                        savegos:8.10,
                        benefit:56.72,
                        savemax:11.17,
                        maxben:77.53
                    },    				
                    {
                        id:2,
                        waittimes:'15*365=5475',
                        savegos:121.55,
                        benefit:56.72,
                        savemax:167.54,
                        maxben:1172.75
                    },
                    {
                        id:3,
                        waittimes:'1*365',
                        savegos:8.10,
                        benefit:56.72,
                        savemax:11.17,
                        maxben:77.53
                    },    				
                    {
                        id:4,
                        waittimes:'15*365=5475',
                        savegos:121.55,
                        benefit:56.72,
                        savemax:167.54,
                        maxben:1172.75
                    }
                ],
                // 最低怠速油耗的污染物排放 和 最高怠速油耗的污染物排放
                minwaitpo:[ 		 	 	 
                    {
                        id:1,
                        flag:'min',
                        savet:1,
                        savegos:222,
                        co:28360.50,
                        hc:972.36,
                        no:1944.72,
                    },
                    {
                        id:2,
                        flag:'min',
                        savet:1,
                        savegos:222,
                        co:28360.50,
                        hc:972.36,
                        no:1944.72,
                    },
                    {
                        id:3,
                        flag:'min',
                        savet:1,
                        savegos:222,
                        co:28360.50,
                        hc:972.36,
                        no:1944.72,
                    },
                    {
                        id:4,
                        flag:'max',
                        savet:1,
                        savegos:222,
                        co:28360.50,
                        hc:972.36,
                        no:1944.72,
                    }
                ],
                // 资料来源
                filesrc:[
                    // {
                    //     id:1,
                    //     name:'怠速油耗计算方法',
                    //     text:'方法一，估算。一般汽车的怠速耗油量是正常行驶耗油量的1/3。那么如果汽车每小时40公里时每百公里油耗8L，那么一个小时的油耗就是0.4*8=3.2升。那么怠速一小时耗油量就是3.2升/3=1.07升（0.297mL/s）。<br>方法二，利用行车电脑的瞬时油耗计算，测定方法如下：<br>把车开到空旷的平路上，提速到60km/h，然后挂空档滑行，等到转速下降到800转以下时，观察行车电脑显示屏上的瞬间油耗和时速表，记录下该瞬间油耗x(L/100km),和当时对应的时速v(km/h)。车的怠速油耗=x*v/100（L/h）。<br>例如，时速50km/h时，对应的空档瞬间油耗是2L/100km。也就是说假如汽车一直按50km/h的速度这么空档滑行上100km的话，需要2L汽油，需时间是2小时。所以可以推算出怠速油耗是1L/h。2*50/100=1(L/h)测定一次肯定不太准确，可以测定在不同速度下的空档滑行油耗，然后取平均值。'
                    // },
                    // {
                    //     id:2,
                    //     name:'实例测试',
                    //     text:`以下是1.6排量汽车的怠速结果，大致也可以看出1.8和2.0的大致怠速油耗。
                    //         （1）冷车时，怠速油耗是0.556mL/s。随着转速下降，怠速油耗也下降。
                    //         （2）热车时，转速在800左右，怠速油耗是0.5－0.6升每小时。具体点是在0.158mL/s。  
                    //         （3）开空调时怠速油耗为0.311mL/s左右。 档位不同也有一定影响。1档时，除了制冷压缩机工作时怠速油耗稍微增大，其余大部分时间均为正常怠速油耗，因为1档空调工作是断续工作的，2、3档和1档差不多。4档就不同了，压缩机不停，所以油耗一直是0.311mL/s左右。在时间长一点看来，1档的空调怠速油耗大概0.222mL/s每小时，4档基本是0.311mL/s。
                    //         （4）开大灯时（未开远光灯），怠速油耗为。开远光灯，大概怠速油耗0.194mL/s（远光灯影响不明显）。
                    //         （5）水温高，电子扇启动时0.189mL/s，怠速油耗为0.189mL/s左右，电子扇一会就会停的。
                    //         （6）怠速时打开转向灯或示宽灯，怠速油耗为0.178mL/s。
                    //         （7）怠速情况下，踩离合，怠速油耗会从平均的0.158mL/s升下降为0.15mL/s左右。
                    //         （8）怠速踩刹车，只要不频繁，怠速油耗不增加，起步时油耗都明显增大。`
                    // },
                    // {
                    //     id:3,
                    //     name:'来源网站',
                    //     text:`来源网址http://dy.163.com/v2/article/detail/DMUC1U050527TIT6.html
                    //     【3】来源网址https://www.taodocs.com/p-123682978.html
                    //     【4】92号汽油的密度为0.725g/ml；95号汽油的密度为0.737g/ml，平均密度为0.73g/ml(来源网址http://energy.cngold.org/nybk/shiyou/c5191755.html)`
                    // }
                ]
           };
       },
       created:function(){
            this.gettables();
		},
       //方法集合
       methods: {
           gettables(){
               this.$axios.get('http://localhost:8080/carDataTableServlet',{
                   params: {
                        name: 'cardatas',
                    }
               }).then((response) => {
                //    console.log(response.data);
                   this.qcdsyh = response.data.qcdsyh;
                   this.jsdsjj = response.data.jsdsjj;
                   this.minwaitpo = response.data.minwaitpo;
                   this.filesrc = response.data.filesrc;
               })
           }
       },
   }
</script>

<style>
    .pollution{
        margin-top: 50px;
        padding: 50px 0;
    }
    .row{
        padding: 15px 0;
    }
</style>