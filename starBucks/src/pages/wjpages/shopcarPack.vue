<template>
<div id="app">
    <div class="back" @click="back()">
      &lt;
    </div>
      <img src="../../assets/wjimg/shop26.jpg" style="width:100%" />
      <div class="shopcar_packText">
      <p>星级套餐</p>
      <p>星巴克下午茶时间</p>
    </div>

    <div   class="shopcar_pac" >
      <div v-for="goodsInfo in goodsInfo">
         <img :src="goodsInfo.gPic" />
        <span class="shopcar_name">{{goodsInfo.gName}}</span>
        <span class="money"> ￥{{goodsInfo.gPrice}}</span>
        <router-link :to="{name:'shopcar_popup',params:{goodsId:goodsInfo.gId}}" tag="div">
        <div class="shopcar_add">+</div>
        </router-link>
      </div>
    </div>




  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "g0oodsInfo",
  props:["goodsId"],
  data(){
    return {
      goodsInfo:[],

    }
  },
  created(){

    // $router: vueRouter对象
    // console.log("this.$router",this.$router);
    // // $route :当前匹配到的路由对象
    // console.log("this.$route",this.$route);
    // 接收书籍的编号
    // console.log(this.$route.params.id);
    // 发送请求
// console.log(this.$route.params.goodsId)
    // console.log(this.$route.params.bookId);
    // console.log(this.$route.query.bookId);
    axios({
      url:"/goods/selectByflag",
      params:{
        // "id":this.$route.query.bookId
        "flags":this.$route.params.flags,
      }
    })
    .then(
         res=>{
           // console.log(res.data.map[String(this.$route.params.flags)])
           // this.goodsInfo = res.data.map[String(this.$route.params.flags)];
           console.log(res)
      this.goodsInfo = res.data;

         });

  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
    components:{

  }
};

</script>
<style scoped>
.shopcar_pac{
position: relative;
 /* border: 1px grey solid; */
 padding: 0.1rem;
 box-sizing: border-box;
}
.shopcar_pac img:first-of-type{
  width: 0.675rem;
  height: 0.675rem;
  border-radius: 50%;

}
.shopcar_add {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  position: absolute;
  /* background-color: blue; */
  background-color: white;
  text-align: center;
  font-size: 0.20rem;
  font-weight: bold;
  line-height: 0.2rem;
  left: 0.5rem;
  top: 0.5rem;
}
.shopcar_packText{
    position: absolute;
    top: 0.45rem;
    left: 0.2rem;
}
.shopcar_pac span:last-of-type{
  float: right;
  line-height: 0.7rem;
  margin-right: 0.3rem;
}
#app{
  background-color: wheat;
}
.back{
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  font-size: 0.2rem;
  font-weight: bold;
}
</style>
