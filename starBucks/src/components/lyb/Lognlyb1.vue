<template>
  <div class="box"  v-show="!show">

    <div class="banner">
      <div class="banner-top">

        <div class="banner-top-1" @click.stop="fun1">
          <input type="tel" ref="oin1" v-model:value="msg" />
          <span :class="bannertel">用户名/邮箱</span>
        </div>
        <div class="banner-top-2" @click.stop="fun2">
          <input type="password" ref="oin2" v-model:value="msg1" />
          <span :class="bannerron">密码</span>
        </div>
        <div class="banner-top-3">
          <router-link to="/passwd/"> <span>忘记密码？</span></router-link>
        </div>
      </div>
      <div class="banner-active">
        <div class="banner-active-1" @click="sub">登录</div>
        <div class="banner-active-2" @click="tel('0')">使用手机号注册/登录</div>

      </div>


    </div>
  </div>
</template>
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
        show: this.type
      }

    },
    watch: {
      type: function() {
        // 发送请求
        this.show = this.type
      }
    },
    methods: {
      sub() {
        let str = /^[a-zA-Z0-9_-]{3,16}$/;
        let pwd = /^[a-z0-9_-]{6,18}$/;
        if (str.test(this.msg)) {
          if (pwd.test(this.msg1)) {
            // let str1 = "/user/login/" + this.msg + "/" + this.msg1;
			let params = new URLSearchParams();
			  params.append("username", this.msg); 
			  params.append("password", this.msg1); 
			
            axios({
              url: "/api/user/login/",
              method: "post",
				data:params			
            }).then(res => {
               if (res.data.code == 0) {
              localStorage.setItem("userName", "");
              localStorage.userName = res.data.username;
               localStorage.setItem("userID", "");
               localStorage.userID = res.data.iId;
               localStorage.setItem("uTel", "");
               localStorage.uTel = res.data.tel;
               localStorage.setItem("token", "");
               localStorage.token = res.data.token;
                Toast({
                  message: '登录成功',
                  position: 'top',
                });

                this.$router.push("menbers");
                }
                else{
                  Toast({
                    message: '账号或密码不正确',
                    position: 'top',
                  });
                }



            })
          } else {

            Toast({
              message: '用户名输入或密码不正确',
              position: 'top',
            });
          }
        } else {
          Toast({
            message: '用户名输入不正确',
            position: 'top',
          })




        }

    },
    tel(params_type) {
      this.$emit("myClick", params_type);
      this.show = !this.show
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
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"); */

  .box {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }
	a{
		color: black;
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
</style>
