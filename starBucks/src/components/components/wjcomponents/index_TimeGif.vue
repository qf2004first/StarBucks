<template>

  <div class="swiper-container index_TimeGif">
    <p class="safe index_timeTile">限时享好礼</p>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
       <div class="index_time">
          <p>单盒月饼礼盒正价减80元</p>
          <p>有效期至2020年9月17日</p>
          <div>
              <span>兑换</span>
              <span>查看详情</span>
          </div>
          <img src="../../../assets/wjimg/index_time.jpg" alt="" srcset="">
       </div>
      </div>
      <div class="swiper-slide">
          <div class="index_time">
          <p>任意两盒月饼礼盒减150元</p>
          <p>有效期至2020年9月17日</p>
          <div>
              <span>兑换</span>
              <span>查看详情</span>
          </div>
          <img src="../../../assets/wjimg/index_time.jpg" alt="" srcset="">
       </div>
      </div>
    </div>

    <div class="swiper-pagination index-time"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";

export default {
  name: "Banner",

  mounted() {
    new Swiper(".index_TimeGif", {
        autoPlay:{

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
</script>

<style  scope>
@import url(../../../assets/css/swiper.css);
 .index_TimeGif{
    width: 100%;
    height: 1.645rem;
   
}
.index-time .my-bullet-active{
    background-color: black;
    opacity: 1;
}
.swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
}
.index_time{
    width: 3rem ;
    height: 1.17rem;
    border: 1px solid #e5e5e5;
    margin-top: -0.1rem;
    border-radius: 20px;
    padding: 0.075rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}
.index_time p:first-of-type{
    font-size: 0.15rem;
    font-weight: bold;
}
.index_time p:nth-of-type(2){
    font-size: 0.1rem;
    color: #666666;
}
.index_time div span:first-of-type{
    display: inline-block;
    width: 0.405rem;
    height: 0.215rem;
    background-color: #4aa568;
    border-radius: 20px;
    text-align: center;
    line-height: 0.215rem;
    color: white;
    font-size: 0.10rem;
}
.index_time div span:nth-of-type(2){
  font-size: 0.1rem;
  color: #4aa568;
}
.index_time > img{
    width: 1.1rem;
    height: 1.175rem;
    position: absolute;
    right: 0.375rem;
}
.index_timeTile{
  font-size: 0.15rem;
  font-weight: bold;
  margin-bottom: -0.15rem;
}
</style>