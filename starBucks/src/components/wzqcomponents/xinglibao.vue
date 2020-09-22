<template>
  <div class="fuli">
    <div class="box2">
        <p>{{ac}}</p>
        <span>{{discount}}</span>
    </div>
    <img src="../../assets/wzqimg/biaoti.jpg" alt="">
  </div>
</template>

<script>
  export default {
    props:["ac","discount"]

  }
</script>

<style scoped>
  .box2{
    width: 100%;
    height: 1.1rem;
  }
  p{
    line-height:0.7rem;
    font-size: 0.27rem;
  }
  span{
    line-height: 0.35rem;
    font-size: 0.15rem;
    color: #888888;
  }
.fuli img{
    height: 1.15rem;
    width: 98%;
    border-radius: 0.1rem;
  }
</style>
