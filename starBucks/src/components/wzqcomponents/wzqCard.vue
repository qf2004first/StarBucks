<template>
  <div >
  <div class="card">
    <img src="../../assets/wzqimg/card1.jpg" alt="">
    <div class="card1">
      <p>经典会员星礼包</p>
      <h2>全能神卡在这里</h2>
      <span>快捷升级</span><span>经典系列</span><span>￥98</span>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/wzqimg/card1.jpg" alt="">
    <div class="card1">
      <p>经典会员星礼包</p>
      <h2>全能神卡在这里</h2>
      <span>快捷升级</span><span>经典系列</span><span>￥98</span>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/wzqimg/card1.jpg" alt="">
    <div class="card1">
      <p>经典会员星礼包</p>
      <h2>全能神卡在这里</h2>
      <span>快捷升级</span><span>经典系列</span><span>￥98</span>
    </div>
  </div>


  </div>
</template>

<script>
</script>

<style scoped>
  .card{
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
  }
  .card img{
    width: 50%;
    /* width: 1.9rem; */
    height: 1.55rem;
    margin-right: 0.1rem;
  }
  .card1{
    width: 50%;
    position: relative;
  }
  .card p{
    font-size: 0.17rem;
    font-weight: bold;
  }
  .card h2{
    line-height: 0.5rem;
    font-size: 0.14rem;
    color: #727272;
  }
  .card span{
    font-size: 0.01rem;
    display: inline-block;
    width: 0.6rem;
    height: 0.2rem;
    border: 1px solid #01a863;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: #01a863;
  }
  .card span:nth-child(4){
    left: 0;
  }
  .card span:nth-child(3){
    left: 0.6rem;
  }
  .card span:nth-child(5){
    background-color: #01a863;
    color: #F7F7F7;
    height: 0.3rem;
    right: 0;
    line-height: 0.3rem;
    border-radius: 0.15rem;
    width: 0.5rem;
  }
</style>
