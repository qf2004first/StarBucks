<template>
<div class="safe index_footerNav">
  <div class="erweimabg">
    <div>
      <img src="../../../assets/wjimg/erweima.jpg" alt="" srcset="">
    </div>
  </div>
    <ul>
      <li >
      <router-link to="/index" tag="div">
        <!-- <img src="../../../assets/wjimg/nav1_1.jpg" alt="" srcset="" v-if="navShow1"  key="1"> -->
         <img src="../../../assets/wjimg/nav1.jpg" alt="" srcset=""   >
          <p ref="p1" >首页</p>
         </router-link>
       <li>
      <router-link to="/welfare" tag="div">
             <!-- <img src="../../../assets/wjimg/nav2-2.jpg" alt="" srcset="" v-if="navShow2"  key="1"> -->
        <img src="../../../assets/wjimg/nav2.jpg" alt="" srcset="">
        <p ref="p2" >福利购</p>
          </router-link>
      </li>
       <li >
          <router-link to="/xiaoxi" tag="div">
          <!-- <img src="../../../assets/wjimg/nav3-2.jpg" alt="" srcset=""  v-if="navShow3"  key="1"> -->
         <img src="../../../assets/wjimg/nav3.jpg" alt="" srcset="">
        <p ref="p3" >星消息</p>
            </router-link>
      </li>
       <li >
            <router-link to="/menbers" tag="div">
           <!-- <img src="../../../assets/wjimg/nav4-2.jpg" alt="" srcset="" v-if="navShow4"  key="1"> -->
        <img src="../../../assets/wjimg/nav4.jpg" alt="" srcset="" >
        <p ref="p4">我</p>
             </router-link>
      </li>
    </ul>
</div>
   
</template>

<script>

import axios from "axios";

export default {
  name: "index_Nav",
  data(){
      return{
       
      }
  },
  
  mounted() {
  
  },
  methods: {
  }
};
</script>
<style  scoped>
.index_footerNav{
  width: 100%;
  height: 0.605rem;
  background-color: white;
}
.erweimabg{
  position: absolute;
  width: 0.575rem;
  height: 0.575rem;
  top: -0.275rem;
  left: 42.5%;
  background-color: #f7f7f7;
  border-radius: 50%;

}
.erweimabg > div{
  background-color: #4eac6d;
  width: 80%;
  height: 80%;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  
}
.erweimabg > div >img{
  width: 0.33rem;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 margin: auto;
}
.index_footerNav ul{
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}
.index_footerNav ul img{
  width: 0.335rem;
  height: 0.255rem;
  margin: auto;
  display: block;
}
.index_footerNav ul p{
  text-align: center;
}

</style>