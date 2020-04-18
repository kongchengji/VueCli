<template>
    <!--轮播图-->
    <div id="swiper">
        <img src="../../assets/img/bg1.jpg" class="backpic"/>
        <div id="left" class="bt"></div>
        <div id="right" class="bt"></div>
        <scriptLink></scriptLink>
    </div>
</template>

<script>
    // import '../../js/swiper'
    export default {
		data(){  //注意：组件中的data必须是function
			return {
				
			}
		},
		methods:{
			
        },
        components: {
            'scriptLink': {
                render(createElement) {
                    return createElement(
                    'script',
                    {
                        attrs: {
                        type: 'text/javascript',
                        src: '../../js/swiper.js',
                        },
                    },
                    )
                }
            }
        },
        mounted() {

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
        background-color: lightblue;
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
        20%  {opacity: 1;}
        80%  {opacity: 1;}
        100%  {opacity: 0;}
    }
</style>