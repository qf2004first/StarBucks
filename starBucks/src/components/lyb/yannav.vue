<template>
  <div class="nav">
    <div class="nav-top"><span class="clon icon-fanhui iconfont" @click="tiao"></span></div>
    <div class="nav-bottom">
      <h3>{{msg}}</h3>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

   export default {
     props:["sname"],
     name: "yannav",
     data() {
       return {
         msg:this.sname
       }

     },
     methods:{
       tiao(){
          this.$router.go(-1)
       }
     }
    }


</script>

<style scoped>
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
