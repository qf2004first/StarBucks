<template>
  <div class="box">
      <p class="nav"><span>账户信息</span></p>
      <div class="nav1">
          <div class="nav1-1">
            <p>用户名</p>
            <p>{{msg2}}</p>
          </div>
          <div class="nav1-2">
            <span>更改用户名</span>
          </div>
      </div>
      <div class="nav1">
          <div class="nav1-1">
            <p>电子邮件</p>
            <p>未设置</p>
          </div>
          <div class="nav1-3">
           <span class="iconfont icon-dayu"></span>
          </div>
      </div>

      <div class="nav1">
          <div class="nav1-1">
            <p>手机号</p>
            <p>{{tel}}</p>
          </div>
          <div class="nav1-2">
            <span>修改手机号</span>
          </div>
      </div>
      <div class="nav1">
          <div class="nav2-3">
            <p>账号绑定</p>

          </div>
          <div class="nav1-3">
           <span class="iconfont icon-dayu"></span>
          </div>
      </div>
      <p class="nav"><span>支付安全设置</span></p>
      <div class="nav1">
          <div class="nav2-3">
            <p>星礼卡安全设置</p>
          </div>
          <div class="nav1-3">
            <span class="iconfont icon-dayu"></span>
          </div>
      </div>
      <div class="xing">保障星礼卡在线支付的安全性</div>
       <p class="nav"><span>安全设置</span></p>
      <div class="nav1">
          <div class="nav2-3">
           <router-link to="/enit1"> <p>修改登录密码</p></router-link>

          </div>
          <div class="nav1-3">
            <span class="iconfont icon-dayu"></span>
          </div>
      </div>
      <div class="nav1">
          <div class="nav3-1">
            <p>指纹验证</p>
            <p>使用指纹来代替登录密码</p>
          </div>
          <div class="nav1-3">
          <span class="iconfont icon-dayu"></span>
          </div>
      </div>
      <div class="nav3">
          <div class="nav3-1">
            <p>口令密码</p>
            <p>开启后每次打开App和访问个人信息都将需要验证口令密码</p>
          </div>
          <div class="nav1-3">
            <span class="iconfont icon-dayu"></span>
          </div>
      </div>
      <p class="nav"><span>隐私设置</span></p>
     <div class="nav1">
              <div class="nav2-3">
                <p>权限设置</p>

              </div>
              <div class="nav1-3">
                <span class="iconfont icon-dayu"></span>
              </div>
          </div>
         <div class="nav3">
             <div class="nav3-1">
               <p>个性化推送</p>
               <p>开启后可以接受个性化推送消息，建议开启使用</p>
             </div>
             <div class="nav1-3">
               <span class="iconfont icon-dayu"></span>
             </div>
         </div>
        <div class="nav1">
                 <div class="nav2-3">
                   <p @click="zhuxiao">账户注销</p>

                 </div>
                 <div class="nav1-3">
                   <span class="iconfont icon-dayu"></span>
                 </div>
             </div>
  </div>
</template>
<script>
import {
    Toast
  } from 'vant';
  import axios from "axios";
import { Dialog } from 'vant';
  export default {
    name: "setlyb",
    data() {
      return {
        msg:true,
        checked:true,
        msg2:localStorage.getItem("userName"),
        tel:localStorage.getItem("uTel")
      }

    },
    methods:{
      fun(){
        this.msg=!this.msg
      },
      zhuxiao(){
          Dialog.confirm({
            title: '账户注销',
            message: '确认要注销账户吗？你将损失所有信息',
          })
            .then(() => {
              let ss=localStorage.getItem("userName");
              let str="/user/delUser/"+ss;
              axios({
               url: str,
               method: "post"
              }).then(res=>{
                if(res.data.code==200)
                {
                  Toast({
                    message: '账户注销成功',
                    position: 'top',
                  });
                  window.localStorage.clear();
                  this.$router.push("login");
                }
              })
            })
            .catch(() => {
              // on cancel
              console.log(2)
            });
      }
    }



  };
</script>

<style scoped>
/* @import 'vant/lib/button/style'; */
  @import url("../../assets/imglyb/font/iconfont.css");
  a{
	  color: black;
  }
  .box{
    width: 100%;
    height: 9.5rem;
    background-color: #FAFAFA;
    box-sizing: border-box;
    padding: 0 0.32rem;
  }
  .nav{
    padding: 0.15rem 0;
      font-weight: 700;
      box-sizing: border-box;
      height: 0.5rem;
  }
.nav1{
  width: 100%;
  height: 0.5rem;
  /* border: 1px solid black; */
  margin-top: 0.1rem;
}
.nav3{
  width: 100%;
  height: 0.7rem;
  /* border: 1px solid black; */
  margin-top: 0.1rem;
}
.nav1-1{
  width: 70%;
  float: left;

}
.nav3-1{
  width: 70%;
  float: left;
}
.nav3-1 p:nth-child(1)
{
  font-size: 0.12rem;
  font-weight: 700;
  color: black;
  height: 0.3rem;
  line-height: 0.3rem;
}
.nav3-1 p:nth-child(2)
{
  font-size: 0.08rem;
   color: rgba(0,0,0,.5);
  height: 0.2rem;
  line-height: 0.2rem;
}




.nav2-3{
  width: 70%;
  float: left;
}
.xing{
  width: 100%;
  height: 0.25rem;
  font-size: 0.06rem;
  margin-top: 0.02rem;
  text-align: left;
   color: rgba(0,0,0,.5);
  /* border: 0px solid black; */
}
.nav2-3 p{
  width: 100%;
  line-height: 0.5rem;
  height: 0.5rem;
  font-size: 0.10rem;
  font-weight: 700;
}
.nav1-1 p:nth-child(1)
{
  font-size: 0.08rem;
   color: rgba(0,0,0,.5);
  height: 0.2rem;
}
.nav1-1 p:nth-child(2)
{
  font-size: 0.15rem;
  color: rgba(0,0,0,.7);
  height: 0.2rem;
}
.nav1-2{
  width: 30%;
  height: 100%;
  float: left;
  position: relative;
}
.nav1-2 span{
  position: absolute;
  bottom: 0.1rem;
  font-size: 0.12rem;
  color: green;
  font-weight: 700;
  right: 0;

}
.nav1-3{
 width: 30%;
 height: 100%;
 float: left;
 display: flex;
 align-items: center;
  font-size: 0.12rem;
  text-align: right;
}
.nav1-3 span{
  width: 100%;
  display: block;

   font-size: 0.2rem;
  text-align: right;
}
</style>
