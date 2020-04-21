<!--  -->
<template>
   <div class='client_section layout_padding'>
      <h2 class="">
		    团队成员
		  </h2>
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" :data-slide-to="i.id" v-for="i in tmember" :key="i.id"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-3">
                            <div class="client_img-box">
                                <img src="img/client.png" alt="">
                            </div>
                            </div>
                            <div class="col-md-9">
                            <div class="client_detail-box">
                                <h5>
                                王振超
                                </h5>
                                <p>
                                safkldgjosdjigosijg
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item"  v-for="item in tmember" :key="item.id">
                        <div class="row">
                            <div class="col-md-3">
                            <div class="client_img-box">
                                <img :src="item.imgurl" alt="">
                            </div>
                            </div>
                            <div class="col-md-9">
                            <div class="client_detail-box">
                                <h5>
                                {{ item.name }}
                                </h5>
                                <p>
                                {{ item.cons }}
                                </p>
                            </div>
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
             tmember:[
              //  {
              //    id:1,
              //    imgurl:'img/client.png',
              //    name:'我支持',
              //    cons:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              //                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              //                   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`
              //  },
              //  {
              //    id:2,
              //    imgurl:'img/client.png',
              //    name:'我支持',
              //    cons:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              //                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              //                   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`
              //  },
              //  {
              //    id:3,
              //    imgurl:'img/client.png',
              //    name:'我支持',
              //    cons:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              //                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              //                   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`
              //  }
             ]
           };
       },
       created:function(){
         this.gettmembers();
       },
       //方法集合
       methods: {
         gettmembers(){
               this.$axios.get('http://localhost:8080/TmemberServlet',{
                   params: {
                        name: 'teammember',
                    }
               }).then((response) => {
                  //  console.log(response.data);
                    this.tmember = response.data.teammember;
               })
           }
       },
   }
</script>

<style>
    /* client section */
  .client_section h2,
  .client_section h5,
  .client_section p {
    font-weight: 600;
  }

  .client_section h2 {
    text-align: center;
  }


  .client_section h5 {
    font-size: 24px;
    color: #fdd31d;
  }

  .client_section .row {
    align-items: center;
    padding: 75px 0;
    margin: 0 15px;
  }

  .client_section img {
    width: 100%;
  }

  .client_img-box::before,
  .client_img-box::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #fdd31d;
  }

  .client_img-box::before {
    top: -15px;
    transform: rotate(139deg);
    left: -15px;
    animation: beforeanimate 1s;
    animation-delay: .1s;
  }

  .client_img-box::after {
    bottom: -15px;
    transform: rotate(142deg);
    right: -15px;
    animation: afteranimate 1s;
    animation-delay: .1s;
  }


  @keyframes beforeanimate {
    0% {
      top: 43%;
      transform: rotate(142deg);
      left: 31%;

    }

    100% {
      top: -15px;
      transform: rotate(139deg);
      left: -15px;
    }
  }

  @keyframes afteranimate {
    0% {
      bottom: 46%;
      transform: rotate(142deg);
      right: 35%;
    }

    100% {
      bottom: -15px;
      transform: rotate(142deg);
      right: -15px;
    }
  }

  .client_section .carousel-indicators {
    margin: 0;
    justify-content: flex-end;
    padding-right: 15px;
    bottom: 20px;
  }

  .client_section .carousel-indicators li {
    width: 25px;
    height: 25px;
    background-color: #6bd1bd;
    border-radius: 100%;
    opacity: 1;
  }

  .client_section .carousel-indicators li.active {
    background-color: #fdd31d;
  }

    
</style>