<template>
  <div class="c">
    <div class="a">
      <span @click="houtui()" style="font-size: 0.3rem;">∨</span>
      <span>购物袋({{num}})</span>
      <div class="a-1">
        <p style="color: #c3bfbc;font-size: 0.1rem;">自取门店</p>
        <i>
          <p>星巴克（旺座现代城）</p>
          <p>∨</p>
          <h1>北京市三里屯优衣库试衣间</h1>
        </i>
      </div>
      <ul class="a-2">
        <li>
            <input type="radio" name="mm" checked>
            <img src="../../assets/wzqimg/waimai.jpg" alt="">
            <p>
              <span>即可取单</span><br/>
              <span>2-8分钟领取</span>
            </p>
        </li>
        <li>
            <p>
              <span>选择取单时间</span><br/>
              <span> Ⅴ选择时间</span>
            </p>
            <img src="../../assets/wzqimg/waimai2.jpg" alt="">
            <input type="radio" name="mm">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["num"],
    methods:{
      houtui(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
/*  .c{
    width: 100%;
    background-color: #2d2926;
  } */
*{margin: 0; padding: 0;box-sizing: border-box; }
.a{
  color: #fff;
  width: 100%;
  height: 1.9rem;
  color: #fff;
  padding: 2%;
  background-color: #2d2926;
}
.a span:nth-child(2){
  margin-left: 30%;
}
.a-1{
  margin-top: 0.3rem;
}
.a-1 i p:nth-child(1){
  float: left;
}
.a-1 i p:nth-child(2){
  float: right;
}
.a-1 i h1{
  float: left;
  width: 100%;
  border-bottom: 1px solid #fff;
  font-size: 0.07rem;
}
.a-2{
  width: 100%;
  float: left;
  color: fff;
  display: flex;
  justify-content: space-between;
}
.a-2 li{
  display: flex;
  margin-top: 0.15rem;
}
.a-2 input{
  width: 0.2rem;
  height: 0.2rem;
  line-height: 100%;
  margin-top: 0.15rem;
}
.a-2 li img{
  font-size: 0.4rem;
  height: 0.4rem;
}
.a-2 p span:nth-child(1){
  color: #c3bfbc;
  font-size: 0.06rem;
}
.a-2 p span:nth-child(2){
  font-size: 0.07rem;
}
</style>
