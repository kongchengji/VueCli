<!--  -->
<template>
   <div class='croadns'>
        <div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title"> 城市路口数据 </h3>
			</div>
			<div class="panel-body form-inline">
				<label>
					数据显示：
					<input type="button" value="更新" class="btn btn-primary" @click="now"/>
				</label>
				<br>
				<label>
					搜索城市名称关键字:
					<input type="text" value="" class="form-control" v-model="keywords"/>
					<br>
				</label>
				<br/>
				<div>城市汽车保有量排序：</div>
				<label>   	
					<input id="sort0" type="button" value="归位" class="btn btn-primary" @click="sort(2)" />
					<input id="sort1" type="button" value="升序" class="btn btn-primary" @click="sort(1)" />
					<input id="sort2" type="button" value="降序" class="btn btn-primary" @click="sort(0)" />
				</label>
			</div>
		</div>
        <!--table的class去使用bootstrap设置样式-->
		<table class="table table-hover table-bordered table-striped">
			<thead>
				<tr>
					<th>城市ID</th>
					<th>城市名称</th>
					<th>城市路口数量</th>
					<th>城市路口链接</th>

				</tr>
			</thead>
			<tbody>
				<tr v-for="item in search(keywords)" :key='item.id'>
					<td > {{ item.id }} </td>
					<td > {{ item.name }} </td>
					<td > {{ item.content }} </td>
					<td >  
						<a style="text-decoration: none;" target="_blank" :href="item.href"> {{ item.href }} </a> 
						<!--<router-link>{{ item.href }}</router-link>-->
						
					</td>
					<!--dateFormat过滤日期-->
					
				</tr>
			</tbody>
		</table>
   </div>
</template>

<script>
   export default {
       data() {
           //这里存放数据
           return {
                id:'',
				name:'',
				content:'',
				//搜索时的关键词keywords
				keywords:'',
				list:[
					// {id: 1,name: '北京' ,content:45256,href: "asdkl.com",ctime: new Date() },
					// {id: 2,name: '上海' ,content:23546,href: "asdkl.com",ctime: new Date() },
					// {id: 3,name: '南京' ,content:45256,href: "asdkl.com",ctime: new Date() },
					// {id: 4,name: '武昌' ,content:23546,href: "asdkl.com",ctime: new Date() },
					// {id: 5,name: '嘉兴' ,content:45256,href: "asdkl.com",ctime: new Date() },
					// {id: 6,name: '湖州' ,content:23546,href: "asdkl.com",ctime: new Date() },
					// {id: 7,name: '昆明' ,content:45256,href: "asdkl.com",ctime: new Date() },
					// {id: 8,name: '酒泉' ,content:23546,href: "http://www.baidu.com",ctime: new Date() },
				]
           };
	   },
	   created:function(){
			this.now();
		},
       //方法集合
       methods: {
		   now(){
				// console.log('***')
				this.$http({
					// url:"http://vue.studyit.io/api/getlunbo",
					url:"http://localhost:8080/cityroadsServlet", //请求路径
					method:"GET", //请求方式
					// data:{"name":"tom","age":23}, //请求参数
				}).then( result => {
					// console.log(result.bodyText)
					let datay =  JSON.parse(result.bodyText);
					this.list = datay
				},function(){
                    console.log('请求失败处理');
                })
			},
            search(keywords){ //根据关键字进行数据搜索
						var newList = []
						//搜索方法
						this.list.filter(item=>{
							//keywords为空时，显示全部列表
							if(item.name.includes(keywords) == true){
								newList.push(item)
							}
						})
						return newList
					},
			sort(n){
				this.list.sort((a,b) => {
					if(n === 1){  //升序
						return a.content - b.content;
					}if(n === 0){ //降序
						return b.content - a.content;
					}
				})
				if(n === 2){
					this.keywords = "";
					this.list.sort((a,b)=>{
						return a.id - b.id;
					})
					
				}
			}
       },
   }
</script>

<style>
    .croadns{
        margin-top: 50px;
        padding: 50px 0;
    }
    .croadns .panel-body{
        padding: 50px 0;
    }
</style>