<template>
  <div class="box" @click="bodd" v-show="show">

    <div class="banner">
      <div class="banner-top">

        <div class="banner-top-1" @click.stop="fun1">
          <input type="text" ref="oin1" v-model:value="msg" />
          <span :class="bannertel">手机号码</span>
        </div>
        <div class="banner-top-2" @click.stop="fun2">
          <input type="text" ref="oin2" v-model:value="msg1" />
          <span :class="bannerron">验证码</span>
          <span class="banner-ron2" @click="tels">获取验证码</span>
        </div>
        <div class="banner-top-3">
          <span></span>
        </div>
      </div>
      <div class="banner-active">
        <div class="banner-active-1" @click="sub">登录/注册</div>
        <div class="banner-active-2" @click="tel('1')">使用账号密码登录<span v-show="xian" class="banner-active-run">{{abc}}s后可以重发</span></div>

      </div>


    </div>
  </div>
</template>
<script> </script>
<script>
  import axios from "axios";
  import {
    Toast
  } from 'vant';

  export default {
    name: "Lognlyb",
    props: ["type"],

    data() {
      return {
        msg: "",
        msg1: "",
        bannertel: "banner-tel",
        bannerron: "banner-ron",
        abc:"",
        show: this.type,
        xian:false
      }

    },
    watch: {
      type: function() {
        // 发送请求
        this.show = this.type
      }
    },
    methods: {
      ze() {
        let phone = /^1[3456789]\d{9}$/;
        if (phone.test(this.msg)) {
          // Toast("手机号输入正确");
          return 1;
        } else {
          Toast({
            message: '手机号输入有误',
            position: 'top',
          });

          return 0
        }
      },
      tels() {
        let zheng = this.ze();
        if (zheng) {


          let st="/user/getCode/"+this.msg;
          axios({
            url: st,
            method: "post"

          })

        }
      },
      sub() {
        let zheng = this.ze();
        if (zheng) {
          if (this.msg == "" || this.msg1 == "") {
            Toast({
              message: '手机号或验证码为空',
              position: 'top',
            });

          } else {

            //post

            let str1="/user/loginOrRegister/"+ this.msg+"/"+this.msg1;
            axios({
              url: str1,
              method: "post"
            }).then(res => {
              if (res.data.code != 200) {
                console.log(res.data);
                Toast({
                  message: '手机号或验证码输入有误',
                  position: 'top',
                });
              } else {
                //console.log(res);
                localStorage.setItem("userName", "");
                localStorage.userName = res.data.data.uName;
                 localStorage.setItem("userID", "");
                 localStorage.userID = res.data.data.iId;
                 localStorage.setItem("uTel", "");
                 localStorage.uTel = res.data.data.uTel;
                Toast({
                  message: '登录成功',
                  position: 'top',
                });
                this.$router.push("menbers");
              }
            })

          }
        }
      },
      tel(params_type) {
        this.$emit("myClick", params_type);
        this.show = !this.show
      },
      bodd() {
        if (this.msg == "") {
          this.$refs.oin1.style = "border-bottom:1px solid #999";
          this.bannertel = "banner-tel";
        }
        if (this.msg1 == "") {
          this.$refs.oin2.style = "border-bottom:1px solid #999";
          this.bannerron = "banner-tel";
        }

      },
      fun1() {
        this.$refs.oin1.focus();
        this.$refs.oin1.style = "border-bottom:1px solid green";
        this.bannertel = "banner-tel1";
        if (this.msg1 == "") {
          this.$refs.oin2.style = "border-bottom:1px solid #999";
          this.bannerron = "banner-tel";
        }
      },
      fun2() {
        this.$refs.oin2.focus();
        this.$refs.oin2.style = "border-bottom:1px solid green";
        this.bannerron = "banner-tel1";
        if (this.msg == "") {
          this.$refs.oin1.style = "border-bottom:1px solid #999";
          this.bannertel = "banner-tel";
        }

      }
    }

  };
</script>

<style scoped>
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
.banner-active-run{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: red;
  color: white;
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
    position: relative;
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
</style>
