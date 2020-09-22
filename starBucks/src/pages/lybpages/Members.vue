<template>
  <div>
     <div class="main_center">
    <mnav1 v-show="show"></mnav1>
    <mnav v-show="show1"></mnav>
    <ss v-show="show1"></ss>
     <mbanner></mbanner>
 </div>
 <div class="footernav">
 <index-footer-nav />
 </div>
  </div>
</template>

<script>
  import mnav from '../../components/lyb/mnav';
  import mbanner from "../../components/lyb/mbanner.vue";
  import mnav1 from "../../components/lyb/my.vue";
  import ss from "../../components/lyb/zhzha.vue";
  import indexFooterNav from "../../components/components/wjcomponents/index_footerNav"
  export default {
    name:"Members",
    data:function(){
      return {
        show:true,
          typeVal:"欢迎来到",
          st:true,
          show1:false
      }
    },
    created(){
      console.log(localStorage.getItem("userName"));
      if(localStorage.getItem("userName")==null||localStorage.getItem("userName")=="")
      {
        this.show=true;
          this.show1=false
      }
      else{
        this.show=false;
          this.show1=true
      }
    },
    components:{
      mnav,mbanner,mnav1,ss,indexFooterNav
    }
 }
</script>

<style scoped>
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
