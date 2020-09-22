<template>
  <div>
    <yannav sname="请输入新密码"></yannav>
    <enitpwd></enitpwd>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import yannav from "../../components/lyb/yannav.vue";
  import enitpwd from "../../components/lyb/enitpwd1.vue"
  export default {
    name:"enit",
    components:{
      yannav,enitpwd
    }
    }
</script>

<style>
</style>
