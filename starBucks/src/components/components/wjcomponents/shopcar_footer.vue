<template>
<div class="shopcar_footer">
    <div class="gps">
        <img src="../../../assets/wjimg/gps.jpg" alt="" srcset="">
    </div>
    <p>
        星巴克1，龙城名园店
    </p>

    <div class="comput">
         <router-link to="/shopcar_bag" tag="div">
        <img src="../../../assets/wjimg/shopcarshow.jpg" alt="" srcset="">
         </router-link>
        <!-- <span>0</span> -->
      
    </div>
</div>
</template>

<script>
import shopcarShow from "../wjcomponents/shopcar_Show"
import Vue from 'vue';
import { Sticky } from 'vant';
import axios from "axios";
Vue.use(Sticky);
 

export default {

  name:"App",
  data:function(){
    return {
     
    }
  },
  created() {
      
  },
  components:{
 
  }
}
</script>
<style  scoped>
.shopcar_footer{
    width: 100%;
    height: 0.605rem;
    background-color: #2d2926;
    position: relative;
}
.gps img{
    width: 0.98rem;
    height: 0.285rem;
}
.gps + p{
    color: white;
    font-size: 0.1rem;
    margin-left: 0.1rem;;
}
.comput{
   position: absolute;
   right: 0.3rem;
   top: 0.1rem;
}
.comput img{
    width: 0.34rem;
    height: 0.445rem;
}
.comput span:first-of-type{
    display: inline-block;
    width: 0.19rem;
    height: 0.19rem;
    background-color: #00af64;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 0.19rem;
    top: 0;
    right: 0.3rem;
    position: absolute;
}
/* .comput span:last-of-type{
     display: inline-block;
       color: white;
        top: 0.25rem;
    right: 0.4rem;
    position: absolute;
} */
</style>