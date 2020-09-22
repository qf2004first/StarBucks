<template>
<div>
<div class="safe shopcar_title">
  <div>
      <router-link to="/shopcar_search" tag="div">
      <img src="../../../assets/wjimg/search.png" alt="" srcset="">
      </router-link>
  </div>
  <p>
      <slot name="shopcar_text"></slot>
  </p>
  <div class="shopcar_nav">
    <span @click="shopShow1" :class="{'active':shopcar_Show}">菜单</span>
    <span @click="shopShow2" :class="{'active':!shopcar_Show}">历史订单</span>
  </div>
 
  
</div>
<shopcar-show v-if="shopcar_Show"/>
<shopcar-his-list v-else />

</div>
</template>

<script>
import shopcarShow from "../wjcomponents/shopcar_Show";
import shopcarHisList from "../wjcomponents/shopcar_hislist";

import Vue from 'vue';
import { Sticky } from 'vant';
import axios from "axios";
Vue.use(Sticky);
 

export default {
  name:"App",
  data:function(){
    return {
     shopcar_Show:true,
    }
  },
  components:{
   shopcarShow,shopcarHisList
  },
  methods: {
      shopShow1(){
          this.shopcar_Show = true;
      },
      shopShow2(){
          this.shopcar_Show = false;
      }
  },
}
</script>
<style scoped>
.shopcar_title{
    width: 100%;
    height: 1rem;
     border-bottom: 1px grey solid;
    position: relative;
}
img{
    width: 0.35rem;
    height: 0.35rem;
}
.shopcar_nav{
    position: absolute;
    bottom: 0;

}
.active{
 border-bottom: green 2px solid;
}
.shopcar_nav span{
    padding: 0.1rem;
    display: inline-block;
  
   
}
</style>