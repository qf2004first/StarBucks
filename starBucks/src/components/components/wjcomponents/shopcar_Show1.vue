<template>
<div style="margin-top:20px">

<van-index-bar :index-list="indexList" >
<div style="float:left">

  <van-index-anchor index="星级套餐" >星级套餐</van-index-anchor>
    <div v-for="(goods,index) in type1" :key="goods.gId" >
       <router-link :to="{name:'ShopcarPack1',params:{flags:index}}" tag="div">
    <van-cell  style="height:0.705rem">
     <!-- <img src="../../../assets/wjimg/lc1.jpg" alt="" srcset="" style="border-radius:0;height:100%;width:1.185rem;"> -->
     <img :src="goods.gPic"  style="border-radius:0;height:100%;width:1.185rem;"/>

     <div style="position:absolute;right:0.24rem;top:0"> {{goods.gName}}</div>
     </van-cell>
       </router-link>
</div>

   <van-index-anchor index="本周推荐">本周推荐</van-index-anchor>
 <div v-for="goods in type2" :key="goods.gId" >
 <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
    <van-cell :title=goods.gName>
     <img :src="goods.gPic" />
       <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
     <div class="shooCarAdd" >+</div>
       </router-link>
      ￥{{goods.gPrice}}</van-cell>
      </router-link>
</div>

   <van-index-anchor index="本店特供">本店特供</van-index-anchor>
 <div v-for="goods in type3" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

  <van-index-anchor index="星善食">星善食</van-index-anchor>
    <div v-for="goods in type4" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

  <van-index-anchor index="饮品">饮品</van-index-anchor>
  <div v-for="goods in type5" :key="goods.gId" >
   <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
      <van-cell :title=goods.gName>
       <img :src="goods.gPic" />
         <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
       <div class="shooCarAdd" >+</div>
         </router-link>
        ￥{{goods.gPrice}}</van-cell>
        </router-link>
  </div>

  <van-index-anchor index="咖啡搭子组合">咖啡搭子组合</van-index-anchor>
   <div v-for="goods in type6" :key="goods.gId" >
    <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
       <van-cell :title=goods.gName>
        <img :src="goods.gPic" />
          <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
        <div class="shooCarAdd" >+</div>
          </router-link>
         ￥{{goods.gPrice}}</van-cell>
         </router-link>
   </div>

 <van-index-anchor index="浓缩咖啡">浓缩咖啡</van-index-anchor>
 <div v-for="goods in type7" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

  <van-index-anchor index="冷萃咖啡">冷萃咖啡</van-index-anchor>
  <div v-for="goods in type8" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

   <van-index-anchor index="星冰乐">星冰乐</van-index-anchor>
 <div v-for="goods in type9" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

     <van-index-anchor index="茶瓦纳">茶瓦纳</van-index-anchor>
  <div v-for="goods in type10" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

   <van-index-anchor index="巧克力与其他饮品">巧克力与其他饮品</van-index-anchor>
  <div v-for="goods in type11" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

   <van-index-anchor index="星巴克冲煮咖啡">星巴克冲煮咖啡</van-index-anchor>
 <div v-for="goods in type12" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

   <van-index-anchor index="在家做咖啡">在家做咖啡</van-index-anchor>
 <div v-for="goods in type13" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

   <van-index-anchor index="瓶装饮品">瓶装饮品</van-index-anchor>
  <div v-for="goods in type14" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

  <van-index-anchor index="食品">食品</van-index-anchor>
  <div v-for="goods in type15" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

  <van-index-anchor index="星享小点">星享小点</van-index-anchor>

    <div v-for="(goods,index) in type16" :key="goods.gId" >
  <div v-for="goods in type16" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

  <!-- <van-index-anchor index="烘培">烘培</van-index-anchor>
  <div v-for="goods in type17" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

 <van-index-anchor index="三明治简餐">三明治简餐</van-index-anchor>
 <div v-for="goods in type18" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

 <van-index-anchor index="沙拉轻食与酸奶">沙拉轻食与酸奶</van-index-anchor>
  <div v-for="goods in type19" :key="goods.gId" >
     <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
        <van-cell :title=goods.gName>
         <img :src="goods.gPic" />
           <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
         <div class="shooCarAdd" >+</div>
           </router-link>
          ￥{{goods.gPrice}}</van-cell>
          </router-link>
    </div>

   <van-index-anchor index="包装食品">包装食品</van-index-anchor>
 <div v-for="goods in type20" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div>

   <van-index-anchor index="蛋糕">蛋糕</van-index-anchor>
 <div v-for="goods in type21" :key="goods.gId" >
  <router-link :to="{name:'shopcarDetile1',params:{goodsId:goods.gId}}" tag="div" >
     <van-cell :title=goods.gName>
      <img :src="goods.gPic" />
        <router-link :to="{name:'shopcar_popup1',params:{goodsId:goods.gId}}" tag="div">
      <div class="shooCarAdd" >+</div>
        </router-link>
       ￥{{goods.gPrice}}</van-cell>
       </router-link>
 </div> -->


</div>
</div>
</van-index-bar>
</div>
</div>

</template>
<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor , Cell } from 'vant';
import { Sticky } from 'vant';
import axios from "axios";
Vue.use(Sticky);

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      indexList: ["星级套餐", "本周推荐", "本店特供", "星善食",  "饮品", "咖啡搭子组合", "浓缩咖啡", "冷萃咖啡", "星冰乐","茶瓦纳", "巧克力与其他饮品", "星巴克冲煮咖啡", "在家做咖啡", "瓶装饮品", "食品", "星享小点"],
      type1:[],
      type2:[],
      type3:[],
      type4:[],
      type5:[],
      type6:[],
      type7:[],
      type8:[],
      type9:[],
      type10:[],
      type11:[],
      type12:[],
      type13:[],
      type14:[],
      type15:[],
      type16:[],

    }
  },
  mounted() {

  },
  created() {
    this.getGoods();
  },
  methods: {
      getGoods(){
      axios({
          url: "/goods/selectByType?tid=1&tid=2&tid=3&tid=4&tid=5&tid=6&tid=7&tid=8&tid=9&tid=10&tid=11&tid=12&tid=13&tid=14&tid=15&tid=16",
          method: "get"
          ,

        }).then(res => {
          // console.log(res)
         this.type0 =  res.data.map["0"];
         this.type1 =  res.data.map["1"];
         this.type2 =  res.data.map["2"];
         this.type3 =  res.data.map["3"];
         this.type4 =  res.data.map["4"];
         this.type5 =  res.data.map["5"];
         this.type6 =  res.data.map["6"];
         this.type7 =  res.data.map["7"];
         this.type8 =  res.data.map["8"];
         this.type9 =  res.data.map["9"];
         this.type10 =  res.data.map["10"];
         this.type11 =  res.data.map["11"];
         this.type12 =  res.data.map["12"];
         this.type13 =  res.data.map["13"];
         this.type14 =  res.data.map["14"];
         this.type15 =  res.data.map["15"];
         this.type16 =  res.data.map["16"];
         // console.log()


        });
    },
    send_goodsid(id){

    },
    add_goods(id){

    }
  },
}

</script>
<style  >

@import url("../../../assets/css/index.css");


.van-index-bar__sidebar {
    width: 0.8rem;
    padding-right: 0.3rem;
    left: 0 ;
    text-align: left;
    position: sticky;
    top: 0;
    transform: translateY(0);
    float: left;
}
.van-cell{
    width: 2.4rem;

    margin-bottom: 0.075rem;
}
.van-cell__title{
  width: 2.4rem;
  position: relative;
}
.van-index-anchor{
    width: 2.4rem !important;



}
.van-cell__value{
  flex: none;
  width: 0.4rem;
  text-align: left;
  position: static;
  color: black;
}
.van-cell__title  span{
  margin-left:0.5rem;
 font-weight: bold;
}
.van-index-bar__index {
    padding: 0.015rem;
    font-size: 0.12rem;
    line-height: 22px;
    background-color: #f7f7f7;
    color: #8e8e8e;
}
.van-index-bar{

    height: 42.5rem;

}
.van-index-bar__index--active{
  background-color: #e5e5e5;
  color: #6d6d6d;
  font-weight: bold;
}
.van-index-anchor--sticky{
  color: black;
}

</style>
<style  scoped>
img{
  position: absolute;
  left: 0.15rem;
  top: 0;
  width: 0.43rem;
  height: 0.43rem;

  border-radius: 50%;
}
.shooCarAdd{
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  background-color:white;
  color: black;
  text-align: center;
  line-height: 0.15rem;
  position: absolute;
  top: 0.27rem;
  left: 0.45rem;
  box-shadow: 3px 18px 21px black ;
}
</style>
