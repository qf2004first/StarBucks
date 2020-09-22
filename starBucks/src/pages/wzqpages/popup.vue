<template>
 <div>
    <div  class="a">
      <p class="cc" @click="houtui()">X</p>
       <img :src="goodsInfo.gPic" class="logo"/>
      <h1 >
        <span>{{goodsInfo.gName}}</span><br/>
        <span style="font-size: 0.15rem;padding-top:0.1rem;">{{goodsInfo.gInfo}}</span>
      </h1>
    </div>
    <div  class="b">
      <div class="b-1" style="margin-bottom: 0.1rem;">
        <span>数量</span>
        <div>
          <button >-</button>
          <span>{{shuliang}}</span>
          <button >+</button>
        </div>
      </div>
      <div class="b-2" style="margin-bottom: 0.1rem;">
        <p>杯型</p>
         <div class="b-22" v-for="(msg,index) in msgs"  :key="index">
              <div @click="fun1(index)" :class="{back:index==num}">

                 <img :src="'../../../static/wzqstatic/'+index+'.png'" alt="">
                 <p>{{msg.a}}</p>
                 <p>{{msg.b}}</p>
               </div>

         </div>
      </div>

      <div style="margin-bottom: 0.1rem;">
          <span>温度</span>
          <div  class="b-23" v-for="(msg1,index) in msgs1" :key="index">
              <p @click="fun2(index)" :class="{back:index==num1}">{{msg1}}</p>
          </div>
      </div>

      <div style="margin-bottom: 0.1rem;margin-top: 1rem;">
          <span>口味</span>
          <div  class="b-23" v-for="(msg2,index) in msgs2" :key="index">
            <p @click="fun3(index)" :class="{back:index==num2}">{{msg2}}</p>
          </div>
      </div>
    </div>





    <div class="c" >
      <button @click="houtui()">重新定制</button>


      <button @click="tianjia()" >添加至购物车</button>



    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: "goodsInfo",
    props:["goodsId"],
    data:function(){
      return {
        mnb:0,
        beixing:"大杯",
        wendu:"热",
        kouwei:"标准",
        shuliang:1,
        num:1,
        num1:1,
        num2:0,
        msgs:[
          {"a":"中杯","b":"355ml"},
          {"a":"大杯","b":"473ml"},
          {"a":"超大杯","b":"592ml"},
        ],
        msgs1:["特别热","热","微热"],
        msgs2:["标准","多糖","少糖"],
      goodsInfo:[],

      }
    },
    created() {
      console.log(this.$route.params.goodsId)

    axios({
      url:"/goods/selectOne",
      params:{

        "id":this.$route.params.goodsId
      }
    })
    .then(
         res=>{
             this.goodsInfo = res.data.data;
         });

    },
    methods:{
      fun1(index){
        this.num=index
        this.beixing=this.msgs[index].a
      },
      fun2(index){
        this.num1=index
        this.wendu=this.msgs1[index]
      },
      fun3(index){
        this.num2=index
        this.kouwei=this.msgs2[index]
      },
      jian(){
        if(this.shuliang>1){
          this.shuliang--
        }
      },
      houtui(){
        this.$router.go(-1)
      },
      //接口1
      tianjia(){
        let params = new URLSearchParams();
        let a=Number( localStorage.getItem("userID"));
        params.append('uId', a);
        params.append('cFlag', 0);
        params.append('cId', this.$route.params.goodsId);
        params.append('sSize', this.beixing);
        params.append('sTemp', this.wendu);
        params.append('sTaste', this.kouwei);
        axios({
          url:"/car/insert",
          method:'post',
          data:params
        })
        .then(res=>{
               this.$router.push("shopcar_bag")
             });


      }
    },
    components:{
    }
  }
</script>

<style scoped>
.a{
    width: 100%;
    height: 1.25rem;

    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    border-bottom: 3px solid #e0e0e0;

    display: flex;
  }
  .cc{
    font-size: 0.24rem;
    margin-top: 0.15rem;
    margin-left: 0.15rem;
  }
  .logo{
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    margin-top: 0.35rem;
    margin-left: 0.15rem;
    margin-right: 0.15rem;
  }
  .a h1{
    margin-top: 0.3rem;
    line-height: 0.2rem;
  }

  .a h1 span{
    font-size: 0.24rem;
    color: #000;
  }
  .a h1 span:nth-child(3){
    color: #898989;
  }
 .b{
    margin-top: 1.25rem;
    padding: 5%;
  }
  .b-1{
  width: 100%;
  display: flex;
  }


  .b-1 div{
    /* float: right; */
    margin-left: 2.1rem;
  }
  .b-1 div button{
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    color: #898989;
    outline: none;
    font-weight: bold;
    font-size: 0.2rem;
    background-color: #FFFFFF;
  }

  .b-22{
/*    display: flex;
    justify-content: space-around; */
    float: left;
  }
  .b-22 div{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 0.15rem;

    text-align: center;
    color: #858585;
  }
  .b-22 div img{
    width: 0.265rem;
    /* height:100%; */
    border-radius: 0;
    margin-top: 0.1rem;
    color: #858585;
  }
  .b-22 div p{
    font-size: 0.15rem;
  }
  .b-22 div p:nth-child(3){
    font-size: 0.11rem;
  }
  .b-23{
/*   display: flex;
    flex-wrap: wrap;
    justify-content: space-around; */
    /* float: left; */
    margin-left: 0.4rem;
    text-align: center;
    line-height: 0.5rem;
  }
  .b-23 p{
    height: 0.5rem;
    width: 50%;
    color: #757575;
    font-size: 0.15rem;
    border-radius: 0.1rem;
    float: left;
  }
  .back{
    background-color: #E6E6E6;
    font-weight: bold;
  }


 .c{
    width: 100%;
    height: 1.25rem;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    border-top: 3px solid #e0e0e0;
  }
  .c button:nth-child(1){
    width: 1.2rem;
    height: 0.45rem;
    border-radius: 0.2rem;
    outline: none;
    color: #51a687;
    border: 2px solid #51a687;
    background-color: #FFFFFF;
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 5%;
  }
    .c button:nth-child(2){
      width: 2.15rem;
      height: 0.65rem;
      border-radius: 0.4rem;
      background-color: #51a687;
      color: #FFFFFF;
      position: absolute;
      top: 20%;
      left: 40%;
      outline: none;
    }
</style>
