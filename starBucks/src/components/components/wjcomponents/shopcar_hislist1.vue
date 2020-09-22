<template>

<div class="safe shopcar_title">
<p>我的订单</p>
<div class="hr"></div>

    <div class="shopcar_listEmpty" v-if="msgs.length>0?false:true" >
        <img src="../../../assets/wjimg/his_empty.jpg" alt="" srcset="" style="width:100%">
    </div>

    <ul v-for="msg in msgs" >
        <li>
            <img :src=msg.gPic   srcset="">
            <span>{{msg.gName}}</span>
            <span>￥{{msg.gPrice}}</span>
            <div>再来一单</div>
        </li>
    </ul>

</div>
</template>

<script>
import shopcarShow from "../wjcomponents/shopcar_Show"
import Vue from 'vue';
import { Sticky } from 'vant';
import axios from "axios";
Vue.use(Sticky);


export default {
  name:"App",
  data:function(){
    return {
        msgs:[]
    }
  },
  created() {
    let a=Number( localStorage.getItem("userID"));
  axios({
    url:"orders/selectOne",
    params:{
      "cId":1,
      "cFlag":1
    }
  })
  .then(
       res=>{
         console.log("hghg",res)
           this.msgs = res.data.data;
       });

  },
  components:{

  }
}
</script>
<style  scoped>
.hr{
    background-color: #e4e4e4;
    height: 2px;
    width: 100%;
}
.shopcar_title > p{
color: #656565;
font-weight: bold;
padding: 0.1rem;
}
li > img{
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    vertical-align: middle;
}
li{
    padding: 0.1rem;
   box-shadow: 13px 2px 3px black ;
}
li > div{
    float: right;
     background-color: #4eac6d;
     border-radius: 20px;
     color: white;
     font-size: 0.125rem;
     width: 0.55rem;
     height: 0.2rem;
     text-align: center;

}
</style>
