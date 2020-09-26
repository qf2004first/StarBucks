<template>
  <div class="box">
     <router-link to="safe"> <p class="nav"><span>账户与安全</span><span class="iconfont icon-dayu"></span> </p></router-link>
      <div class="nav1"><span>语言</span><span>(中文简体)</span></div>
      <div class="nav2">
        <div class="nav2-1">
         <p>消息通知</p> <span >{{msg?'已开启':'未开启'}}</span>
        </div>
        <div class="nav2-2">
          <van-switch @click="fun" v-model="checked" class="opt" active-color="#07c160" inactive-color="#999" />
        </div>

      </div>
      <div class="nav3">
        <div class="nav3-1"><div class="nav3-1-1" @click="tuichu">退出</div></div>

        <p class="nav3-2">当前为最新版本！版本为7.21.0(4079)</p>
      </div>
  </div>
</template>
<script>

  import { Switch } from 'vant';
  import axios from "axios";

  export default {
    name: "setlyb",
    data() {
      return {
        msg:true,
        checked:true

      }

    },
    methods:{
      fun(){
        this.msg=!this.msg
      },
      tuichu(){
		  axios({
		    url: "/api/user/login/",
		    method: "delete",
			
		  }).then(res=>{
			  if(res.data.code==0)
			  {
				   localStorage.clear();
				    this.$router.push("menbers");
			  }
		  })
		  
          // localStorage.setItem("userName","");
         
      }
    }



  };
</script>

<style scoped>

  @import url("../../assets/imglyb/font/iconfont.css");
  a{
    color: #999;
  }
  .box{
    width: 100%;
    height: 5.7rem;
    background-color: #FAFAFA;
    box-sizing: border-box;
    padding: 0 0.32rem;
  }
  .nav{
    padding-top: 0.1rem;
    width: 100%;
    height: 0.6rem;
    color: black;
    display: flex;
    justify-content: space-between;
  }
  .nav1{
      width: 100%;
      height: 0.6rem;
  }
  .nav1 span:nth-child(2){
    font-size: 0.06rem;
    color: #999;
  }
  .nav1 span:nth-child(1){
    display: block;
    width: 100%;
    height: 0.2rem;
    float: left;
  }
  .nav2{
    width: 100%;
    height: 0.5rem;
    /* border: 1px solid black; */

  }
  .nav2-1{
    width: 70%;
    float: left;
  }
  .nav2-1 span{
    font-size: 0.06rem;
    color: #999;
  }
  .nav2-2
  {
    float: left;
    width: 28%;
    height: 0.5rem;
    border-left: 1px solid #999;
  }
  .opt{

    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }
  .nav3{
    width: 80%;
    height: 0.55rem;
    position: absolute;
    bottom: 1rem;
    left: 0.3rem;
  }
  .nav3-1{
    width: 100%;
    height: 0.3rem;
    float: left;
  }
  .nav3-1-1{
    width: 30%;
    height: 0.3rem;
    border: 1px solid green;
    color: green;
    text-align: center;

    line-height: 0.3rem;
    border-radius: 0.3rem;
    position: absolute;

  }
  .nav3-2{
    width: 100%;
    height: 0.2rem;
    float: left;
    color: #999;
    font-size: 0.06rem;
    margin-top: 0.1rem;
  }
</style>
