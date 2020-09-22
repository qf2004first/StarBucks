<template>
  <div>
    <yannav sname="请输入新密码"></yannav>
    <enitpwd></enitpwd>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import yannav from "../../components/lyb/yanlyb.vue";
  import enitpwd from "../../components/lyb/enitnav.vue"
  export default {
    name:"enit",
    components:{
      yannav,enitpwd
    }
    }
</script>

<style>
</style>
