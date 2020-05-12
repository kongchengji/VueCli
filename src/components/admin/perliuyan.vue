<!--  -->
<template>
   <div class='perliuyan'>
       <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"> 访客留言信息表 </h3>
            </div>
        </div>
        <!--table的class去使用bootstrap设置样式-->
        <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名 Name</th>
                    <th>信息 Info</th>
                    <th>日期 Date</th>
                    <th>城市 City</th>
                    <th>删除 Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key='item.id'>
                    <td > {{ item.lou }} </td>
                    <td > {{ item.name }} </td>
                    <td > {{ item.text }} </td>
                    <td > {{ item.date}} </td>
                    <td > {{ item.city }} </td>
                    <td > <a href="#" @click.prevent="del(item.lou)">删除</a> </td>
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
               list:[
                    // {id: 1,name: 'ga' ,text:'JavaScript',lou: 1,date:'aaaaa',city:'aaa' },
                    // {id: 2,name: 'as' ,text:'JavaScript',lou: 2,date:'aaaaa',city:'aaa' },
                    // {id: 3,name: 'fd' ,text:'JavaScript',lou: 3,date:'aaaaa',city:'aaa' },
                    // {id: 4,name: 'ws' ,text:'JavaScript',lou: 4,date:'aaaaa',city:'aaa' },
                ]
           };
       },
       created(){
           this.getdatas()
       },
       //方法集合
       methods: {
            //  得到数据
            getdatas(){
                this.$axios.get('http://localhost:8080/LiuyanServlet',{
                   params: {
                        ids:'liuyanget',
                    }
                }).then((response) => {
                    this.list = response.data.liuyanlist;
                })
            },
            del(lou){  //根据id删除数据
                this.$axios.get('http://localhost:8080/LiuYanDelete',{
                    params: {
                        id:lou
                    }
                }
                ).then((response) => {
                    // console.log(response);
                    // this.liuyanlist = response.data.liuyanlist;
                })
                .catch(function (error) {
                    console.log(error);
                });
                this.list.some( (item,i) =>{
                    if(item.lou == lou){
                        this.list.splice(i,1)
                        //如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
                        return true
                    }
                })
            }
       },
   }
</script>

<style>
</style>