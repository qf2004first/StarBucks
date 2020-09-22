<template>
<div class="safe index_footerNav">
  <div class="erweimabg">
    <div>
      <img src="../../../assets/wjimg/erweima.jpg" alt="" srcset="">
    </div>
  </div>
    <ul>
      <li  @click="navClick1">
      <router-link to="/index" tag="div">
        <img src="../../../assets/wjimg/nav1_1.jpg" alt="" srcset="" v-if="navShow1"  key="1">
         <img src="../../../assets/wjimg/nav1.jpg" alt="" srcset=""   v-else key="2">
          <p ref="p1" key="3">首页</p>
         </router-link>
       <li @click="navClick2">
      <router-link to="/welfare" tag="div">
             <img src="../../../assets/wjimg/nav2-2.jpg" alt="" srcset="" v-if="navShow2"  key="1">
        <img src="../../../assets/wjimg/nav2.jpg" alt="" srcset="" v-else key="2">
        <p ref="p2" key="3">福利购</p>
          </router-link>
      </li>
       <li @click="navClick3">
           <div>
          <img src="../../../assets/wjimg/nav3-2.jpg" alt="" srcset=""  v-if="navShow3"  key="1">
         <img src="../../../assets/wjimg/nav3.jpg" alt="" srcset="" v-else key="2">
        <p ref="p3" key="3">星消息</p>
             </div>
      </li>
       <li @click="navClick4">
           <div>
           <img src="../../../assets/wjimg/nav4-2.jpg" alt="" srcset="" v-if="navShow4"  key="1">
        <img src="../../../assets/wjimg/nav4.jpg" alt="" srcset="" v-else key="2">
        <p ref="p4" key="3">我</p>
             </div>
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
          navShow1:true,
          flag1 : true,
           navShow2:false,
           flag2:false,
            navShow3:false,
           flag3:false,
            navShow4:false,
           flag4:false,
      }
  },
  
  mounted() {
  
  },
  methods: {
    navClick1(){
      if(this.flag1==false){
         this.$refs.p1.style.color = "black";
          this.navShow1 = !this.navShow1;
          this.flag1 = true;
      }
      if(this.navShow1==true && this.flag1==true){
         this.$refs.p1.style.color = "green";
         this.navShow2 =false;
         this.$refs.p2.style.color = "black";
          this.navShow4 = false;
         this.$refs.p4.style.color = "black";
         this.navShow3 =false;
         this.$refs.p3.style.color = "black";
         this.navShow3 = false;
         this.navShow4 = false;
         this.flag2 =false;
      }
     
    },
    navClick2(){
      if(this.flag2==false){
         this.$refs.p2.style.color = "green";
          this.navShow2 = !this.navShow2;
         this.navShow1=false;
         this.$refs.p1.style.color = "black";
         this.navShow3 = false;
         this.$refs.p3.style.color = "black";
          this.navShow4 = false;
         this.$refs.p4.style.color = "black";
         this.navShow4 = false;
         this.flag1 = false;
         this.flag2 = true;
         this.flag3 = false;
         this.flag4 = false;
      }
          if(this.navShow2==false){
        this.$refs.p2.style.color = "black";
      }
    },
    navClick3(){
       if(this.flag3==false){
         this.$refs.p3.style.color = "green";
          this.navShow3 = !this.navShow3;
         this.navShow1=false;
         this.$refs.p1.style.color = "black";
        this.navShow2=false;
         this.$refs.p2.style.color = "black";
          this.navShow4=false;
         this.$refs.p4.style.color = "black";
         this.navShow4 = false;
         this.flag1 = false;
           this.flag2 = false;
             this.flag4 = false;
         this.flag3 = true;
      }
          if(this.navShow3==false){
        this.$refs.p3.style.color = "black";
      }
    },
     navClick4(){
        if(this.flag4==false){
         this.$refs.p4.style.color = "green";
          this.navShow4 = !this.navShow4;
         this.navShow1=false;
         this.$refs.p1.style.color = "black";
        this.navShow2=false;
         this.$refs.p2.style.color = "black";
          this.navShow3=false;
         this.$refs.p3.style.color = "black";
         
         this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
         this.flag4 = true;
      }
          if(this.navShow4==false){
        this.$refs.p4.style.color = "black";
      }
    }
  },
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