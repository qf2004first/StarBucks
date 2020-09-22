<template>
  <div>
       <yannav sname="手机验证"></yannav>
      <yan1 :abv="msg"></yan1>
  </div>
</template>

<script>
  import yan1 from "../../components/lyb/yanlyb.vue";
  import yannav from "../../components/lyb/yannav.vue"
  export default {

       name:"yan",
       props:["id"],
       data(){
           return{
         msg:this.id,
         }
       },
      components:{
        yan1,yannav
      }
  }
</script>

<style>
</style>
