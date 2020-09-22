<template>
  <div class="banner">
      <div class="banner-1">
        <div class="banner-1-top">我的星享俱乐部</div>
         <div class="banner-1-a1">
           <div class="b-a1"><span class="iconfont icon-fapiao"></span></div>
           <div class="b-a2">星享好礼</div>
           <div class="b-a3">共4张</div>
         </div>
         <div class="banner-1-a1">
           <div class="b-a1"><span class="iconfont icon-xingxing"></span></div>
           <div class="b-a2">追星站</div>
         </div>
         <div class="banner-1-a1">
           <div class="b-a1"><span class="iconfont icon-xiaofeijilu"></span></div>
           <div class="b-a2">消费记录</div>
         </div>
         <div class="banner-1-a1">
           <div class="b-a1"><span class="iconfont icon-fapiao"></span></div>
           <div class="b-a2">开票历史</div>
         </div>
         <div class="banner-1-a1 a2">
           <div class="b-a1"><span class="iconfont icon-ichaxun"></span></div>
           <div class="b-a2">帮助与反馈</div>
         </div>
      </div>
  </div>
</template>

<script>
  import axios from "axios";

   export default {
     name: "mnav1",
     data() {
       return {

       }

     }
  }
</script>

<style scoped>
  @import url("../../assets/imglyb/font/iconfont.css");

  .banner{
    width: 100%;
    height: 5rem;
    background-color: rgba(0,0,0,.1);
    /* border: 1px solid black; */
    padding-top: 0.2rem;;

  }
  .banner-1{
    width: 100%;
    height: 3.7rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
  .banner-1-top{
    color: rgba(0,0,0,.7);
    font-size: 0.1rem;
    letter-spacing: 0.007rem;
  }
  .banner-1-a1{
    width: 100%;
    height: 0.6rem;
    /* font-size:; */
    border-bottom: 1px solid #969896;
  }
  .b-a1{
    width: 15%;
    height: 0.6rem;
    float: left;
     line-height: 0.8rem;
  }
  .a2{
    border: 0;
  }
  .b-a2{
    width: 70%;
    height: 0.6rem;
    line-height: 0.8rem;
    font-size: 0.135rem;
    letter-spacing: 0.02rem;
    font-weight:600;
    float: left;
  }
  .b-a3{
    width: 15%;
    line-height: 0.8rem;
    font-size: 0.095rem;
    letter-spacing: 0.03rem;
    height:0.3rem;
    color: #999;
    float: left;
  }
</style>
