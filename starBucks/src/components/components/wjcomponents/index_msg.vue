<template>
<div>
<ul class="safe index_msg">
    <p>每日精选</p>
     <li v-for="(msg,inx) in msg" :key="inx" >
      
        <img :src="'../../../../static/'+msg.Imgs" />
        <div>{{msg.msg}}</div>
        <p>{{msg.msgDate}}</p>
      </li>
</ul>
   </div>
</template>

<script>

import axios from "axios";

export default {
  name: "index_msg",
 
  data() {
    return {
    
      msg: []
    };
  },
  methods:{
    getMsg(){
      axios({
          url: "/starBucks_msg",
          method: "get",
          
        }).then(res => {
          this.msg = res.data;
       
         
        });
    }
  },
  
  created() {
    console.log("created");
  
    this.getMsg();
  }
};
</script>
<style  scoped>
li{
    list-style: none;
    height: 3.035rem;
   
    margin-bottom: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
img{
    width: 100%;
    height: 2.01rem;
}
li div{
    font-size: 0.155rem;
    /* font-weight: bold; */
}
li > p{
    font-size: 0.09rem;
    color: #464646;
}
ul> p{
    font-size: 0.15rem;
    font-weight: bold;
}
</style>