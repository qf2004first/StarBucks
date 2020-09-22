<template>
<!-- 
  <mt-swipe :auto="6000">
  <mt-swipe-item>  <img src="../assets/img/index_banner1.jpg" /></mt-swipe-item>
  <mt-swipe-item> <img src="../assets/img/index_banner2.jpg" /></mt-swipe-item>
 
</mt-swipe> -->
  <div class="swiper-container index_Banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
      <!-- <img src="../assets/img/index_banner1.jpg" /> -->
      <slot name="img1"></slot>
      </div>
      <div class="swiper-slide">
       <!-- <img src="../assets/img/index_banner2.jpg" /> -->
        <slot name="img2"></slot>
    </div>
</div>  
    <div class="swiper-pagination"></div>
  
   </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui';
import axios from "axios";
import Swiper from "swiper";

export default {
 

  mounted() {
    new Swiper(".index_Banner", {
      loop:true,
        autoplay:{
          delay:6000,
          disableOnInteraction: false,
        },
     
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass: "my-bullet-active",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
     },
};
//mint ui

</script>

<style  scoped>






/* @import url("../assets/css/style.min.css"); */
@import url(../../../assets/css/swiper.css);
img {
  width: 100%;
  height: 100%;
}
.index_Banner{
  height: 100%;
  width: 100%;
}
</style>
<style>
.index_Banner .my-bullet-active{
  display: inline-block;
  background-color: white !important;
  width: 0.13rem;
  height: 0.04rem;
  border-radius: 3px;
  opacity: 1;
  margin-bottom: 0.020rem !important; 
}

</style>
