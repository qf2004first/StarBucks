<template>
  <div class="box">

    <div class="banner">
      <div class="banner-top">
        <p class="p1">请输入您注册邮箱或已认证的手机号码</p>
        <div class="banner-top-1" @click.stop="fun1">

          <input type="text" ref="oin1"  v-model:value="msg"/>
          <span :class="bannertel">手机号码</span>

        </div>
        <div class="footer">
          <span class="icon-yuechi iconfont"></span>
          <div class="sub" @click="tels">重置密码</div>

        </div>
      </div>


    </div>
  </div>
</template>
<script> </script>
<script>
  import axios from "axios";

 import { Toast } from 'vant';
  export default {
    name: "Lognlyb",

    data() {
      return {
        msg:"",
        msg1:"",
        bannertel: "banner-tel",
         show:false,
         asg:""
      }

    },
    methods: {
      ze(){
        let phone=/^1[3456789]\d{9}$/;
        if(phone.test(this.msg)){
            // alert("手机号输入正确");
            return 1;
        }
        else{
          Toast({
            message: '手机号输入有误',
            position: 'top',
          });
          return 0
        }
      },
      tels(){
          let zheng=this.ze();
          if(zheng){
            console.log(zheng);
            let str="/user/getCode/"+this.msg;
            this.asg=str;
            axios({
            url:str,
            method:"post"
             }).then(res=>{
                if(res.data.code==200){
                let ae="/yan/"+this.msg;
                this.$router.push(ae);
                }
             })


          }
      },


      fun1() {
        this.$refs.oin1.style = "border-bottom:1px solid green";
        this.bannertel = "banner-tel1";
      }

    }

  };
</script>

<style scoped>
  @import url("../../assets/imglyb/font/iconfont.css");
  .footer .iconfont{
    position: absolute;
    top: 45%;
    font-size: 2rem;
    left: 20%;
    color: #969;
  }
  .sub{
    width: 1rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    background-color: #999;
    position: absolute;
    bottom: 0.5rem;
    right: 0.2rem;
    border-radius: 0.4rem;
    color: white;
  }
  .p1{
    width: 100%;
    font-size: 0.08rem;
    color: #999;
    padding: 0.2rem 0 0 0.32rem;
    box-sizing: border-box;
  }
  .box {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }

  .banner-tel1 {
    top: -0.15rem;
    transition: 0.5s;
    position: absolute;
    font-size: 0.06rem;
    left: 0;
  }


  .banner-active {
    width: 100%;
    /* height: 20rem; */
    /* border: 1px solid black; */
  }

  .banner-active-2 {
    width: 80%;
    margin: 0 auto;
    margin-top: 0.1rem;
    font-size: 0.07rem;
    text-align: center;
    color: #3ABA85;
  }

  .banner-active-1 {
    width: 80%;
    height: 0.4rem;
    background-color: #999;
    margin: 0 auto;
    margin-top: 0.01rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.12rem;
    color: white;
    border-radius: 1rem;
  }


  .banner-top-3 {
    width: 100%;
    height: 0.4rem;
    padding: 0 0.35rem;
    margin-top: 0.2rem;
    font-size: 0.07rem;
    color: #3ABA85;
    /* border: 1px solid black; */
  }

  .banner {
    width: 100%;
    /* height: 100%; */
    /* border: 1px solid black; */
    background-color: #FAFAFA;
  }

  .banner-top {
    width: 100%;
    /* height: ; */
    /* margin-top: 1rem; */
    padding: 0.02rem;
  }

  .banner-top-2,
  .banner-top-1 {
    width: 80%;
    position: relative;
    margin: 0 auto;
    /* margin-top: 0.2rem; */
  }

  .banner-ron,
  .banner-tel {
    position: absolute;

    transition: 0.5s;
    top: 0.1rem;
    left: 0;
  }

  .banner-ron2 {
    position: absolute;
    right: 0;
    bottom: 0.1rem;
    font-size: 0.06rem;
    color: #3ABA85;
  }

  .banner-top input {
    width: 100%;
    outline: none;
    border: 0;
    border-bottom: 0.005rem #999 solid;
    display: block;
    margin-top: 0.4rem;
    background-color: #FAFAFA;
    height: 0.4rem;
  }
  .footer{
    width: 100%;
    height: 4.8rem;

  }
</style>
