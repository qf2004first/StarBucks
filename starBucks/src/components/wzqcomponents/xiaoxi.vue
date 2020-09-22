<template>
  <div>
     <div class="main_center">
      <div >
        <h1>星消息</h1>
        <span :class="cc" @click="cc='hh',cc1='',oo=true">星咨询</span><span :class="cc1" @click="cc1='hh',cc='',oo=false">我的消息</span>
      </div>
      <div class="mm" v-if="oo" >
          <ul class="safe index_msg" v-for="msg in msgs">
              <li v-for="(msg,inx) in msgs" :key="inx" >

                  <img :src="msg.mpic" />
                  <div>{{msg.mmassage}}</div>
                  <p>{{msg.mtime}}</p>
                </li>


          </ul>
      </div>
      <div v-else-if="true">
        <img src="../../../static/wzqstatic/xiaoxi.jpg" alt="" style="width: 100%;height: 100%;">
      </div>
     </div>
      <div class="footernav">
        <index-footer-nav />
        </div>
  </div>
</template>

<script>
  import axios from "axios";
   import indexFooterNav from "../../components/components/wjcomponents/index_footerNav"
  export default {
    name: "index_msg",

    data() {
      return {
         cc:"hh",
         cc1:"",
         oo:true,
        msgs: []
      };
    },
    methods:{
      // getMsg(){
      //   axios({
      //       url: "/starBucks_msg",
      //       method: "get",

      //     }).then(res => {
      //       this.msg = res.data;


      //     });
      // }
    },
    components:{
        indexFooterNav
    },

    created() {
      // console.log("created");

      // this.getMsg();
      axios({
          url: "massage/findAll",
          method: "get",


        }).then(res => {
          console.log("bgggg")
          console.log(res.data)
          this.msgs=res.data.list
        })
    }
  };
</script>

<style scoped>
  h1{
    font-weight: bold;
    font-size: 0.25rem;
    margin: 2%;
    margin-bottom: 0.25rem;
    padding-top: 0.3rem;
  }
  span{
    display: inline-block;

    padding: 0.1rem;
    margin-right: 0.15rem;
  }
  .hh{
    border-bottom: 3px solid #01A863;
  }
  li{
      list-style: none;
      /* height: 3.035rem; */
      display: flex;

      flex-direction: column;
      justify-content: space-evenly;
      background-color: #FFFFFF;
      margin-bottom: 0.25rem;
      /* padding-bottom: 0.25rem; */
      border-radius: 0.15rem;
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
      margin-left: 0.05rem;
  }
  ul> p{
      font-size: 0.15rem;
      font-weight: bold;
  }
  .mm{
    background-color: #f7f7f7;
    margin-top: 0.25rem;
  }
  .safe{
    width: 94%;
    margin: 0 auto;
    padding-bottom: 0.1rem;

  }
  .footernav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.605rem;
  z-index: 100;
}
.main_center{
  margin-bottom: 0.605rem;
}
</style>
