<template>
  <div class="nav">
    <div class="nav-top"><span class="clon icon-fanhui iconfont"></span></div>
    <div class="nav-bottom">
      <h3>输入验证码</h3>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

   export default {
     name: "yannav",
     data() {
       return {
       }

     },
     watch:{
          type:function(){
        // 发送请求
        this.msg1=this.type
     }
    }

  }
</script>

<style scoped>
  @import url("../../assets/imglyb/font/iconfont.css");
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"); */
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
