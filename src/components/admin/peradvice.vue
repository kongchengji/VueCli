<!--  -->
<template>
   <div class='pertable'>
       <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"> 访客建议信息表 </h3>
            </div>
        </div>
        <!--table的class去使用bootstrap设置样式-->
        <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名 Name</th>
                    <th>邮箱 Email</th>
                    <th>电话 Phones</th>
                    <th>建议 Thoughts</th>
                    <th>删除 Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key='item.id'>
                    <td > {{ item.id }} </td>
                    <td > {{ item.name }} </td>
                    <td > {{ item.emails }} </td>
                    <td > {{ item.phones}} </td>
                    <td > {{ item.thoughts }} </td>
                    <td > <a href="#" @click.prevent="del(item.id)">删除</a> </td>
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
                    // {id: 1,name: '任务1' ,emails:'JavaScript',phones: 1876569965,thoughts:'aaaaa' },
                    // {id: 2,name: '任务1' ,emails:'JavaScript',phones: 1876569965,thoughts:'aaaaa' },
                    // {id: 3,name: '任务1' ,emails:'JavaScript',phones: 1876569965,thoughts:'aaaaa' },
                    // {id: 4,name: '任务1' ,emails:'JavaScript',phones: 1876569965,thoughts:'aaaaa' },
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
                this.$axios.get('http://localhost:8080/UserInfos',{
                   params: {
                        ids:'conusadvice',
                    }
                }).then((response) => {
                    this.list = response.data.Contactusinfos;
                })
            },
            del(id){  //根据id删除数据
                this.$axios.get('http://localhost:8080/UserInfoDelete',{
                    params: {
                        id:id
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
                    if(item.id == id){
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