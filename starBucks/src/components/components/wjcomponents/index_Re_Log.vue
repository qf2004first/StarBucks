<template>
<div class=" index_re">
   <img src="../../../assets/wjimg/logo1.jpg" alt="" srcset="">
    <p>便携入会，成为有星人</p>
    <div class="index_bg">
      <router-link to="/login">
       <div class="index_btn">
           注册/登录
       </div>
       </router-link>
    </div>
</div>

</template>

<script>

import axios from "axios";

export default {
  name: "index_Re_Log",

  mounted() {

  },
};
</script>

<style scoped>
.index_re{
    height: 1.185rem;
    /* border-radius: 20px 20px 0 0; */
    /* background-color: tomato; */
    border-bottom: 1px #d9d9d9 solid;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
	background-color: rgba(247,247,247);
  padding: 0.1rem;

}
.index_re > img {
    width: 1.08rem;
    height: 0.23rem;
}
.index_re > p{
    font-size: 0.165rem;
}
.index_bg{
    position: absolute;
    right: 0;
    background: url("../../../assets/wjimg/index_starbg.jpg") no-repeat center;
    background-size: cover;
     height: 1.185rem;
    width: 1.8rem;
}
.index_btn{
    width: 0.805rem;
    height: 0.3rem;
    background-color: #3c3935;
    position: absolute;
    text-align: center;
    color: white;
    font-size: 0.115rem;
    border-radius: 20px;
    line-height: 0.3rem;
    margin-top: 0.275rem;
    right: 0.1rem;
}
</style>
