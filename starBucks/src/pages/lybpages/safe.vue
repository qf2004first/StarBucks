<template>
  <div>
       <yannav sname="账户与安全"></yannav>
        <setlyb></setlyb>
  </div>
</template>

<script>
  import yannav from "../../components/lyb/yannav.vue";
  import setlyb from "../../components/lyb/safelyb.vue";
  export default {
       name:"Safe",
       data(){
           return{

         }
       },
      components:{
        yannav,setlyb
      }
  }
</script>

<style>
</style>
