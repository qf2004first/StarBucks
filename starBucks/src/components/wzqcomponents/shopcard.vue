<template>
<div>
      <div class="head">
          <div>
            <p @click="houtui()"> &lt; </p>
            <p>星礼卡</p>
          </div>
      </div>
      <div class="content">
        <img :src="aaa"  alt="">
        <p>{{name}}</p>
      </div>
      <div class="money">
        <p>选择购买金额</p>
         <van-dropdown-menu class="jine" duration="0.3">
           <van-dropdown-item v-model="value1" :options="option1" class="caidan" />
         </van-dropdown-menu>
         <div class="hetong">
           <input type="checkbox" v-model="aa" @click="fun()">
           <p>
             <span>点击右下角按钮并购买星礼卡时，即代表您已经阅读，理解并接受</span>
             <span>星巴克单用途商业预付卡章程</span>
             <span>和</span>
             <span>星礼卡使用的特别规定</span>
             <!-- <button :style="bb" :disabled="cc" @click="zxc()">购买{{value1}}星礼卡</button> -->
             <router-link to="/index"><button :style="bb" :disabled="cc" @click="zxc()">购买{{value1}}星礼卡</button></router-link>
           </p>
         </div>

      </div>
</div>
</template>

<script>
  import axios from 'axios'
  props:['name','imgs']
  export default {
    props:["name","imgs"],
    data: function() {
      return {
        msg: [],
        aaa:"../../../static/wzqstatic/xinglika"+this.imgs+".jpg",
        value1: "￥200",
        aa:false,
        bb:"",
        cc:true,
        option1: [
          { text: '￥200', value: "￥200" },
          { text: '￥300', value: "￥300" },
          { text: '￥400', value: "￥400" },
          { text: '￥500', value: "￥500" },
          { text: '￥600', value: "￥600" },
          { text: '￥700', value: "￥700" },
          { text: '￥800', value: "￥800" },
          { text: '￥900', value: "￥900" },
        ]
      }
    },
    methods: {
      fun(){
        if(this.aa){
          this.bb="",
          this.cc=true
        }else{
          // this.bb="green"
          this.bb="background-color: #02b170",
          this.cc=false
        }
      },
      zxc(){
        console.log("sda")
      },
      houtui(){
        this.$router.go(-1)
      }

    },
    components: {

    }
    // created(){
    //   axios({
    //     url:"/books",
    //     params:{
    //       "id":this.$route.params.id
    //     }
    //   })
    //   .then(res=>this.book=res.data[0])
    // }
  }
</script>

<style scoped>
  .head{
    width: 100%;
    height: 1.1rem;
    /* background-color: red; */
    border-bottom: 3px solid #e6e6e6;
  }
  .head p:nth-child(1){
    font-size: 0.3rem;
  }
  .head p:nth-child(2){
    font-size: 0.35rem;
    line-height: 0.7rem;
  }
  .content{
    text-align: center;
    padding-top: 5%;
  }
  img{
    width: 90%;
    height: 2.5rem;

  }
  .content p{
    font-size: 0.2rem;
    margin-top: 3%;
    font-weight: bold;
  }
  .money{
    width: 85%;
    margin: 0 auto;
    line-height: 0.4rem;
    position: relative;
  }
  .jine{
    border-bottom: 2px solid #727272;
  }
  .caidan{
    width:1rem;
    background-color: #fff;
    height: 0.8rem;
    overflow: auto;
    position: absolute;
    margin-top: 0.025rem;
  }
  .hetong{
    position: absolute;
    top: 1.5rem;
    display: flex;
  }
 .hetong input{
/*    border-radius: 50%;
    width: 0.2rem;
    height: 0.2rem;
    color: #01A863; */
    margin-top: 0.1rem;
  }
  .hetong p{
    font-size: 0.15rem;
    line-height: 0.2rem;
  }
  .hetong p span:nth-child(2),
  .hetong p span:nth-child(4){
    color: #01A863;
  }
  .hetong button{
    position: absolute;
    bottom: -0.7rem;
    right: 0;
    padding: 0.2rem;
    border-radius: 0.3rem;
    background-color: #ababab;
    color: #fff;
    outline:none;
  }
</style>
