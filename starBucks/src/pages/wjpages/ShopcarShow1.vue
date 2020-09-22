<template>

  <div id="app" style="  display: flex;
    flex-direction: column;">
    <bactIndex></bactIndex>
    
    <div class="bact_index">
     
    </div>
      <index-banner style="flex:1;">
        
          <img src="../../assets/wjimg/campaign-qia-yi-bei.jpg" alt="" srcset=""  slot="img1" >
          <img src="../../assets/wjimg/campaign-autumn-day.jpg" alt="" srcset="" slot="img2" >
        </index-banner>
        <div style="margin-bottom:0.605rem;">
        <shopcar-title >
          <p slot="shopcar_text">专星送-在线点 到店取</p>
        </shopcar-title>
    </div>

    <div class="footernav">
      <shopcar-footer />
    </div>
        
  </div>
</template>

<script>
import indexBanner from "../../components/components/wjcomponents/index_Banner";
import shopcarTitle from "../../components/components/wjcomponents/shopcar_title1";
import shopcarFooter from "../../components/components/wjcomponents/shopcar_footer1"
import bactIndex from "../../components/components/wjcomponents/back_toindex"

import Vue from 'vue';
import { Sticky } from 'vant';

Vue.use(Sticky);
 

export default {
  name:"App",
  data:function(){
    return {
     
    }
  },
  components:{
    indexBanner,shopcarTitle,shopcarFooter,bactIndex
  }
}

</script>

<style >


.shopshowmain{
   
     height: 6.155rem;
}


</style>
<style  scoped>
p{
  text-align: center;
  font-weight: bold;
}

.footernav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.605rem;
  z-index: 100;
}
.bact_index{
  position: absolute;
  font-size:50px ;
  z-index: 1000;
}
</style>