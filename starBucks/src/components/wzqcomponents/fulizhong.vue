<template>
  <div>
    <div class="box2">
      <p>星礼卡</p>
      <span>充值就能用,限时活动积星快25%</span>
    </div>
    <div class="box3">
     <router-link to="/shopcard/鱼尾纹纪念卡/2"><img src="../../../static/wzqstatic/xinglika2.jpg" ></router-link>
     <router-link to="/shopcard/美人鱼特别款/5"><img src="../../../static/wzqstatic/xinglika5.jpg" ></router-link>
     <router-link to="/shopcard/鱼尾款/1"><img src="../../../static/wzqstatic/xinglika1.jpg" ></router-link>
     <router-link to="/shopcard/拥抱咖啡/3"><img src="../../../static/wzqstatic/xinglika3.jpg" ></router-link>
     <router-link to="/shopcard/新版咖啡和茶/4"><img src="../../../static/wzqstatic/xinglika4.jpg" ></router-link>
    </div>
    <!--    <div class="box3" v-for="img in imgs">
      <img src="../../static/img/"+img.name+".jpg" alt="">

    </div> -->
  </div>
</template>

<script>
  export default {

    data: function() {
      return {
        msg: []
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

<style scoped>
  .box2 {
    width: 100%;
    height: 1.1rem;
  }

  p {
    line-height: 0.7rem;
    font-size: 0.27rem;
  }

  span {
    line-height: 0.35rem;
    font-size: 0.15rem;
    color: #888888;
  }

  .box3 {
    display: flex;
    width: 100%;
    overflow: auto;
  }

  img {
    width: 2.4rem;
    height: 1.5rem;
    border-radius: 0.05rem;
    margin-right: 0.05rem;
  }
</style>
