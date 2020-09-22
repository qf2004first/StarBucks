<template>
<div id="app">
  <div class="det">
    <div class="back" @click="back()">
      &lt;
    </div>
       <img :src="goodsInfo.gPic" />
      <p>{{goodsInfo.gName}}</p>
      <p>{{goodsInfo.gInfo}}</p>

    </div>
    <router-link tag="div" class="shopcarbtn" :to="{name:'shopcar_popup',params:{goodsId:goodsInfo.gId}}">
      按喜好定制 ￥{{goodsInfo.gPrice}}
    </router-link>
      <div class="footernav">
  <shopcar-footer />
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import shopcarFooter from "../../components/components/wjcomponents/shopcar_footer"
export default {
  name: "goodsInfo",
  props:["goodsId"],
  data(){
    return {
      goodsInfo:[]
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
      url:"/goods/selectOne",
      params:{
        // "id":this.$route.query.bookId

        "id":this.$route.params.goodsId,

      }
    })
    .then(
         res=>{
           // console.log(res)
           console.log(this.$route.params.goodsId);
           // this.goodsInfo=res.data.data;
          this.goodsInfo = res.data.data;
         });

  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
    components:{
    shopcarFooter
  }
};

</script>
<style scoped>
.det img{
  width: 100%;
}
.det p:first-of-type{
  margin: 0.15rem ;
  font-size: 0.21rem;
  font-weight: bold;
}
.det p:nth-of-type(2){
  font-size: 0.18rem;
  padding: 0.15rem;
}
.shopcarbtn{
  width: 1.875rem;
  height: 0.535rem;
  background-color: #4eac6d;
  color: white;
  text-align: center;
  line-height: 0.535rem;
  font-size: 0.2rem;
  float:right;
  border-radius: 40px;
}
.footernav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.605rem;
  z-index: 100;
}
.back{
  font-size: 0.15rem;
  position: absolute;
  color: black;
  top: 0.15rem;
  left: 0.15rem;
}
</style>
