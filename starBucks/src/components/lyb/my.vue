<template>
  <div class="a1">
    <p>Hello !</p>
    <span class="a3">登录星巴克App享受更多精彩服务</span></br>
    <button class="a2"><router-link to="Login">立即登录</router-link></button>
  </div>
</template>

<script>
  export default {
     name:"my",
     data:function(){
       return {

       }
     }
  }
</script>

<style scoped>
.a1{
  background: url(../../assets/imglyb/aa.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 3%;
}
a{
  color: white;
}
p{
  font-size: 0.3rem;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 0.5rem;
}
.a3{
  font-size: 0.15rem;
  color: #FFFFFF;
  line-height: 0.5rem;
}
.a2{
  width: 1rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: #01A863;
  color: #FFFFFF;
  outline: none;
  font-weight: bold;
}
</style>
