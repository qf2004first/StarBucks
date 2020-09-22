<template>
  <div class="nav">
    <div class="nav-top"><span class="clon iconfont icon-guanbi" @click="tiao"></span></div>
    <div class="nav-bottom">
      <h3>{{msg1}}星享俱乐部</h3>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

   export default {
     name: "Lognfooter",
     props: ["type"],
     data() {
       return {
          msg:"欢迎来到",
          msg1:this.type
       }

     },
     watch:{
          type:function(){
        // 发送请求
        this.msg1=this.type
     }
    },
    methods:{
      tiao(){
        this.$router.go(-1);
      }
    }

  }
</script>

<style scoped>
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"); */
  @import url("../../assets/imglyb/font/iconfont.css");
   .clon{
     font-size: 0.28rem;
   }
  .nav {
    background-color: white;
    width: 100%;
    height: 1rem;
    /* border: 1px solid black; */
  }

  .nav-top {
    color: #999;
    width: 100%;
    height: 0.05rem;
    font-size: 16px;
    font-weight: 100;
    text-align: left;
    box-sizing: border-box;
    padding-left: 0.3rem;
  }

  .nav-bottom {
    width: 100%;
    height: 0.15rem;
    margin-top: 0.5rem;
    text-align: left;
    box-sizing: border-box;
    padding-left: 0.5rem;
  }

  .nav-bottom h3 {
    font-size: 26px;
    font-weight: 700;
  }
</style>
