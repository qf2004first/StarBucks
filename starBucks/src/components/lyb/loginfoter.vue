<template>
  <div>
    <div class="footer">
        <div class="footer-top">使用以下方式进行账号登录/注册</div>
        <div class="footer-bottom">
          <span><img src="../../assets/imglyb/tao.jpg"></span>
          <span><img src="../../assets/imglyb/timg.jpg"></span>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Lognfooter",
    data() {
      return {

      }

    }
 }
</script>

<style scoped>
  .footer {
    position: absolute;
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
    bottom: 1rem;
  }
  .footer-bottom{
    width: 50%;
    height: 1rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
  }
  .footer-top{
    width: 100%;
    font-size: 0.08rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  .footer-bottom span{
    display: block;
    width: 0.5rem;
     border-radius:50%;
     /* border: 1px solid black; */
    height: 0.5rem;
  }
  .footer-bottom span img{
    width: 100%;
     border-radius: 50%;
    height: 100%;
  }
</style>
