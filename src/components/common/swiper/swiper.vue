<!-- components/common/swiper/swiper -->
<template>
    <div class="swiper-container" >
        <div class="swiper-wrapper">
            <!-- 存放具体的轮播内容 -->
            <slot name ="swiper-con"></slot>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination">
       </div>
    </div>
  </template>
  <script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
// import 'swiper/swiper-bundle'
  export default {
    mounted() {
          new Swiper('.swiper-container', {
            autoplay: 1000,//可选选项，自动滑动
              direction: 'horizontal',
              autoplayDisableOnInteraction: false,
              grabCursor: true,
              roundLengths: true, 
              pagination: '.swiper-pagination',
            loop: true,
            observer: true,
            observerParents: true,
              
        })
    }
  };
  </script>
  
  <style scoped>
  .swiper-container{
    margin-top:0px;
    width:100%;
    height: 195px;
    display: flex;
  }
  .swiper-wrapper{
    flex: 1;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 1rem;
      width: 100%;
      text-align: center; 
    }
.my-bullet-active{ 
    background: #ffffff; 
    opacity: 1; 
} 
.swiper-pagination-bullet{ 
    width: 20px;
     height: 20px;
     background: #b3e9cf;
     
}

img{
  width:100%
}
  </style>
