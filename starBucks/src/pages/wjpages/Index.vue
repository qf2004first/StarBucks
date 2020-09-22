<template>
  <div id="app">
      <div class="main_center">
        <index-banner>
          <img src="../../assets/wjimg/index_banner1.jpg" alt="" srcset="" slot="img1">
          <img src="../../assets/wjimg/index_banner2.jpg" alt="" srcset="" slot="img2">
        </index-banner>
        <index-re-log />
        <index-nav />
        <index-star-gif />
        <index-time-gif />
        <index-msg />
       
         </div>
        <div class="footernav">
        <index-footer-nav />
        </div>
  </div>
</template>

<script>

import indexBanner from "../../components/components/wjcomponents/index_Banner";

import indexReLog from "../../components/components/wjcomponents/index_Re_Log";
import indexNav from "../../components/components/wjcomponents/index_Nav";
import indexStarGif from "../../components/components/wjcomponents/index_StarGif";
import indexTimeGif from "../../components/components/wjcomponents/index_TimeGif";
import indexMsg from "../../components/components/wjcomponents/index_msg";
import indexFooterNav from "../../components/components/wjcomponents/index_footerNav"

 

export default {
  name:"App",
  data:function(){
    return {
     
    }
  },
  components:{
    indexBanner,indexReLog,indexNav,indexStarGif,indexTimeGif,indexMsg,indexFooterNav
  }
}

</script>

<style>

.footernav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.605rem;
  z-index: 100;
}
.main_center{
  margin-bottom: 0.605rem;
}
</style>
