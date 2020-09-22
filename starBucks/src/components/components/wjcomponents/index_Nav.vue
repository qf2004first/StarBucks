<template>
<van-sticky style="background-color:white">
<div class="safe index_nav">
  
  <div>
   
      <div>
         <router-link to="/fk">
          <span>啡快</span>
           </router-link >
          <p>在线点，到店取</p>
          <div class="index_tip">来领随行箱</div>

      </div>
    <img src="../../../assets/wjimg/fk.jpg" alt="" srcset="">
     
  </div>
  <div>
      <div>
         <router-link to="/zxs">
          <span>专星送</span>
            </router-link >
          <p>星礼卡积星加速</p>
            <div class="index_tip" style="left:0.53rem">来领随行箱</div>
      </div>
    <img src="../../../assets/wjimg/zxs.jpg" alt="" srcset="">
  </div>
  
</div>
   </van-sticky>
</template>

<script>
import Vue from 'vue';
import { Sticky } from 'vant';

Vue.use(Sticky);
import axios from "axios";

export default {
  name: "index_Nav",

  mounted() {
   
  },
};
</script>
<style  scoped>
.index_nav{
    margin-top: 0.1rem;
    display: flex;
    height: 1.28rem;
    justify-content: space-between;
 
}
.index_nav > div{
   width: 1.675rem;
   height: 1.03rem;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-sizing: border-box;
    padding: 0.1rem;
    position: relative;
    overflow: hidden;
}
.index_nav > div >img{
    position: absolute;
    top: 0;
    left: 0;
  width: 100%;
  height: 100%;

}

.index_nav > div > div{
    position: absolute;
    z-index: 10;
    
}
.index_nav > div > div span{
    font-size: 0.17rem;
    font-weight: bold;
}
.index_nav > div > div p{
    font-size: 0.09rem;
    color: #56aa76;
    margin-top: 0.08rem;
}
.index_tip{
    text-align: center;
    position: absolute;
    width: 0.62rem;
    height: 0.18rem;
    background-color: #eb764f;
    color: white;
    line-height: 0.18rem;
    font-size: 0.09rem;
    border-radius: 10px 10px 10px 0;
    top: -0.1rem;
    left: 0.37rem;
}

</style>
<style>
@import url("../../../assets/css/index.css");
.van-sticky--fixed{
  background-color: white;
}
</style>