<template>
  <div>
    <div style="border-bottom: 1px solid #707070; padding: 2%;">
      <p style="font-size: 0.25rem;color: #707070;" @click="houtui()">X</p>
      <input  type="search" v-model="sousuo" @keyup.enter="fun()"><span @click="qingqiu()">搜索 </span>
      <ul v-for="msg in msgs">
        <li style="margin-bottom: 9%;">{{msg.gName}}</li>
      </ul>
    </div>
    <div v-if="lishis.length>0?true:false">
      <div>
        <span>历史搜索</span><span style="float: right;" @click="lishis=[]">清空</span>
      </div>
      <p v-for="(lishi,idx) in lishis" class="lishi" :key="idx">{{lishi}}</p>
    </div>
    <div style="float: left;">
      <p>热门搜索</p>
      <p v-for="(remen,index) in remens" class="remen" @click="fun1(index)" :key="index">{{remen}}</p>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data: function() {
      return {
        msgs:[],
        bb: false,
        sousuo: "",
        remens: ['南瓜丝绒拿铁', '秋意橙橙玛奇朵', '拿铁', '美式', '焦糖玛奇朵', '冷翠冰咖啡', '提拉米苏', '咸香小点'],
        lishis: [],
      }
    },
    watch:{
      sousuo:function(){
          if(this.sousuo==""){
            this.msgs=[]
          }else{
            axios({

          method: 'get',
          url: 'goods/selectBylike',
          params: {
            "name": this.sousuo
          }
        }).then((res) => {
          console.log(res.data.list)
          this.msgs=res.data.list
        })


          }


      }
    },
    methods: {
      fun() {
        this.lishis.unshift(this.sousuo);
        this.sousuo = ""
        // this.qingqiu()
      },
      fun1(index) {
        this.lishis.unshift(this.remens[index]);
        this.sousuo = this.remens[index]
      },
      houtui() {
        this.$router.go(-1)
      },
      qingqiu() {
        console.log(this.sousuo)
        // axios({

        //   method: 'get',
        //   url: 'goods/selectBylike',
        //   params: {
        //     "name": this.sousuo
        //   }
        // }).then((res) => {
        //   console.log(res.data.list)
        //   this.msgs=res.data.list
        // })
      }
    }
  }
</script>

<style scoped>
  input {
    width: 85%;
    color: #01A863;
    border: none;
    border-bottom: 3px solid #01A863;
    outline: none;
  }

  span {
    color: #01A863;
  }

  .remen {
    float: left;
    background-color: #ecd6b4;
    margin-right: 0.15rem;
    margin-left: 0.15rem;
    margin-bottom: 0.15rem;
    color: #000000;
    padding: 0.03rem;
    border-radius: 0.1rem;
    font-size: 0.14rem;
    box-sizing: border-box;
  }

  .lishi {
    float: left;
    background-color: #E6E6E6;
    margin-right: 0.15rem;
    margin-left: 0.15rem;
    margin-bottom: 0.15rem;
    color: #000000;
    margin-top: 0.03rem;
    padding: 0.025rem;
    font-size: 0.14rem;
    border-radius: 0.1rem;
  }
</style>
