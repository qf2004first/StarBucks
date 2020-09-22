<template>
  <div id="app">
      <loginnav  :type="typeVal"></loginnav>
      <Lognlyb @myClick="changeType" :type="st"></Lognlyb>
      <Lognlyb1  @myClick="changeType" :type="st"></Lognlyb1>
       <lognfooter></lognfooter>

  </div>
</template>

<script>
import Lognlyb from "../../components/lyb/Lognlyb1.vue"
import Lognlyb1 from "../../components/lyb/Lognlyb.vue"
import lognfooter from "../../components/lyb/loginfoter.vue"
import loginnav from "../../components/lyb/loginnav.vue"
export default {
  name:"App",
  data:function(){
    return {
        typeVal:"欢迎来到",

        st:true
    }
  },
  methods:{
      changeType(params_type){

        if(params_type==1)
        {
          this.st=false;
          this.typeVal = "登录";
        }
        else{
          this.st=true;
          this.typeVal = "欢迎来到";
        }
      }
  },

  components:{
    Lognlyb,Lognlyb1,lognfooter,loginnav
  }
}

</script>

<style scoped>

*{
    margin: 0;
    padding:0;
}
body,html{
  background-color: #FAFAFA;
}
</style>
