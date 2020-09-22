<template>
  <div>
       <yannav sname="设置"></yannav>
        <setlyb></setlyb>
  </div>
</template>

<script>
  import yannav from "../../components/lyb/yannav.vue";
  import setlyb from "../../components/lyb/setlyb.vue";
  export default {
       name:"Set",
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
