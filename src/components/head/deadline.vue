<template>
    <div id="nav">
        <!--顶部导航栏-->
        <!-- <h1>这是登录组件，是使用.vue文件去创建出来的组件</h1> -->
        <nav class="navbar navbar-dark fixed-top bg-dark navbar-expand-lg">
                <router-link to="/" class="navbar-brand">Brand</router-link>               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav nav mr-auto">
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#bottomBack">智能交通现状</a> -->
                        <router-link class="nav-link" to="/home/aitraffic"> 智能交通现状 </router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#myEducation">全国汽车保有量</a> -->
                        <router-link class="nav-link" to="/home/cityrnums"> 全国各城市路口数量 </router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#/home/aitraffic">汽车污染</a> -->
                        <router-link class="nav-link" to="/home/pollution"> 汽车怠速消耗 </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/home/whyneed"> 为什么要智能信号灯 </router-link>
                        <!-- <a class="nav-link" href="#MytariffCards">为什么要智能交通灯</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/home/ourai"> 我们的智能信号灯 </router-link>
                        <!-- <a class="nav-link" href="#MytariffCards">我们的智能交通灯</a> -->
                    </li>
                </ul>
            </div>
        </nav> 
    </div>
	
</template>

<script>
import 'bootstrap'
    export default {
		data(){  //注意：组件中的data必须是function
			return {
				msg:"ababa"
			}
		},
		methods:{
			
		}
	}
</script>

<style>
    #navbarText{
        margin-right: 30px;
    }
</style>