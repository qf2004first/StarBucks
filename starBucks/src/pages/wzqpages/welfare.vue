<template>
  <div>
      <div class="main_center">
    
    <div class="box" ><nac v-model="show" @myclick="fu"></nac></div>
    <div class="content">
      <div v-if="show">
        <bag ></bag>
        <afc ac="星礼包" discount="专享超值优惠,为你节省更多"></afc>
    
        <wzq-card></wzq-card>
      </div>
      <div v-if="show1" class="content1">
        <mycard></mycard>
      </div>
      </div>
    </div>

         <div class="footernav">
        <index-footer-nav />
        </div>

  </div>
</template>


<script>
  import nac from "../../components/wzqcomponents/head.vue"
  import bag from "../../components/wzqcomponents/fulizhong.vue"
  import afc from "../../components/wzqcomponents/xinglibao.vue"
  import wzqCard from "../../components/wzqcomponents/wzqCard.vue"
  import mycard from "../../components/wzqcomponents/mycard.vue"
  import indexFooterNav from "../../components/components/wjcomponents/index_footerNav"
export default {
  props:["ac","discount"],
  data:function(){
    return {
        show:true,
        show1:false
    }
  },
  methods:{
    fu(a){
      // console.log(a)
      if(a==2){
        this.show1=true
        this.show=false
      }
      if(a==1){
        this.show1=false
        this.show=true
      }
    }
  },
  components:{
  nac,bag,afc,wzqCard,mycard,indexFooterNav
  }
}
</script>

<style >
  .box{

    width: 100%;
  }
  .content{
    background-color: #f7f7f7;
    padding-left: 0.1rem;
    padding-top: 1.5rem;
  }
  .content1{
    background-color: #f7f7f7;
    height: 100%;

  }
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
