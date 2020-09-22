<template>
  <div class="a">
    <div class="a-1">
      <div class="a-11" v-if="kong1" @click="kong1=false">
        <span style="font-size: 0.18rem;line-height: 100%;">我的订单</span>
        <span @click="qingkong()" style="font-size: 0.18rem;">清空</span>
      </div>
<!--       <ul class="a-12">
        <li>
            <img src="../../assets/wzqimg/waimai.jpg" alt="">
            <div>
              <h1>产品名字产品名字产品名字产品名字产品名字</h1>
              <button style="left: 0;">-</button>
              <span style="left: 0.35rem; bottom: 0.05rem;">21</span>
              <button style="left: 0.6rem;">+</button>
            </div>
            <p>
              <span>$28842</span></br>
              <span style="">$22</span>
            </p>
         </li>
       </ul> -->

       <ul class="a-12" v-for="(msg,index) in msgs" :key="index">
        <li >
            <img :src=msg.gPic  alt="">
            <div>
              <h1>{{msg.gName}}</h1>
              <h3 style="color: #888888;font-size: 0.06rem;">{{msg.sSize}}</h3>
              <h3 style="color: #888888;font-size: 0.06rem;">{{msg.sTemp}}</h3>
              <h3 style="color: #888888;font-size: 0.06rem;">{{msg.sTaste}} </h3>
              <button style="left: 0;"  @click="jian(index)">-</button>
              <span style="left: 0.35rem; bottom: 0.05rem;">{{msg.cNum}}</span>
              <button style="left: 0.6rem;" @click="jia(index)">+</button>
            </div>
            <p>
              <span>￥{{msg.cPrice}}</span><br/>
              <span style="">￥{{msg.cPrice*msg.cNum}}</span>
            </p>
         </li>
       </ul>


    </div>
    <div class="kong" v-if="kong">
      <img src="../../assets/wzqimg/kong.jpg" alt="">
      <p>购物车暂无可售产品</p>
      <h1>添加产品进购物车，在下单之前可在此修改或确认。</h1>
       <router-link to="/fk" tag="span" >
      <button>添加商品</button>
       </router-link>
    </div>
    <div class="a-2" v-if="kong1">
        <p>
            产品小计........................￥{{totalMoneyFn()}}<br/>
            <input type="checkbox" style="margin-top: 0.2rem;" v-model="tijiao">
            <span style="font-size: 0.12rem;">我已阅读，理解并同意接受<span style="font-weight: bold;">《星巴克服务使用条款》</span>。请您特别注意，上述使用条款不仅适用于您的本次订单服务，还适用于以后通过星巴克APP使用的所有服务。</span>
        </p>
    </div>
    <div class="a-3">
      <!-- <button @click="houtui()">添加商品</button> -->
        <router-link to="/fk" tag="span" >
       <button class="mm" >添加商品</button>
        </router-link>
      <button @click="tijiao3()">提交</button>
    </div>
    <div class="cc" v-if="tijiao2" @click="tijiao2=false">
      <span>提交前请先同意条款</span>
      <button>知道了</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data:function(){
      return {
        kong:false,
        kong1:true,
        tijiao:false,
        tijiao2:false,
        msgs:[
          // {name:"asdasd",danjia:12,shuliang:45,img:"dasdas"},
          // {name:"asdasd",danjia:124,shuliang:10,img:"dasdas"}
        ]
      }
    },
    methods:{
      jia(index){
        this.msgs[index].cNum++;
        let a=Number( localStorage.getItem("userID"));
        let params = new URLSearchParams();
         params.append('cNum',Number( this.msgs[index].cNum));
         params.append('cFlag',1);
         // params.append('uId',a);
         params.append('uId',1);
         params.append('cId',this.msgs[index].cId);//这里要改


          axios({
        url: "/car/insert",

        method:'post',
        data:params

         }).then(res => {})
      },
      jian(index){
        // if(this.msgs[index].shuliang>1){
        //   this.msgs[index].shuliang--
        // }
        if(this.msgs[index].cNum>1){
                  this.msgs[index].cNum--;
        let a=Number( localStorage.getItem("userID"));
        let params = new URLSearchParams();
         params.append('cNum',Number( this.msgs[index].cNum));
         params.append('cFlag',1);
         // params.append('uId',a);
         params.append('uId',1);
         params.append('cId',this.msgs[index].cId);//这里要改
          axios({
        url: "/car/carSub",

        method:'post',
        data:params

         }).then(res => {})

        }else{

          this.msgs.splice(index,1)
        }

        // if(this.msgs[index].cNum==0){

        //   let a1=Number( localStorage.getItem("userID"));
        //    let params1 = new URLSearchParams();
        //    params1.append('cId',this.msgs[index].cNum);//购物车ID
        //    params1.append('cFlag',0);
        //    params1.append('uId',a1);
        //    params1.append('cId',this.msgs[index].cId);//这里要改
        //     axios({
        //   // url: "/car/carSub",
        //   url: "http://10.12.156.143:8080/car/carSub",
        //   method:'post',
        //   data:params1

        //    }).then(res => {})
        // }







      },
      qingkong(){


        let a=Number( localStorage.getItem("userID"));
        let params = new URLSearchParams();
         // params.append('cNum',Number(this.msgs[index].cNum));//改
         params.append('cFlag',1);
         params.append('uId',1);


          axios({
        url: "car/deletecar",

        method:'post',
        data:params

         }).then(res => {})

        this.msgs=[],
        this.kong=true

      },
      kong3(){
        if(this.msgs.length==0){
          this.kong=true,
          this.kong1=false
        }
      },
      chuan(){
        this.$emit("chuan",this.msgs.length)
      },
      totalMoneyFn(){
          let money = 0;
          this.msgs.forEach(goods=>{
                  money += goods.cPrice*goods.cNum;
          })
          return money;
      },
      tijiao3(){
        if(this.tijiao==false){
            this.tijiao2=true
        }else{
          console.log("发送")

          let a=Number( localStorage.getItem("userID"));
          let params = new URLSearchParams();
           // params.append('cNum',Number(this.msgs[index].cNum));//改
           params.append('cFlag',1);
           params.append('cId',1);
           params.append('shopID',this.msgs[0].gId+"");

         
            axios({
          url: orders/insert,
          method:'post'
          // data:params

           }).then(res => {})







        }
      },
      houtui(){
        this.$router.go(-2)
      }
    },
    components:{

    },
    created(){
		let a=Number( localStorage.getItem("userID"));
      axios({
        url: "/car/show",

		method:'get',
		params :{ "cFlag":1 ,"uId":1,}

      }).then(res => {
        console.log(res.data.data )
        this.msgs = res.data.list ;
        this.$nextTick(() => {
          this.kong3();
          this.chuan()
        });
      });
    },
    mounted(){
      // this.kong3
    }

  }
</script>

<style scoped>
*{
  box-sizing: border-box;
}
  .a{
    width: 100%;
    background-color: #f7f7f7;
    padding: 2%;
  }
  .a-1{
    width: 98%;
    background-color: #fff;

  }
  .a-11{
    padding: 2%;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 2px solid #e1e1e1;
  }
  .a-11 span{
    font-size: 0.2rem;
    color: #707070;
  }
  .a-11 span:nth-child(2){
    float: right;
  }
  .a-12{
    padding: 3%;
    font-weight: bold;
  }
  .a-12 li{
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.4rem;
  }
  .a-12 li img{
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
  }
  .a-12 li div{
    width: 2.5rem;
    height: 1rem;
    margin-left: 0.1rem;
     position: relative;
  }
  .a-12 li div h1{
    font-size: 0.15rem;
  }

  .a-12 li div button{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: #ffffff;
    outline:none;
    font-size: 0.2rem;
    position: absolute;
    bottom: 0;
  }
   .a-12 li div span{
     position: absolute;
     bottom: 0;
   }
  .a-12 li p{
  position: relative;
  height: 1rem;
  }
  .a-12 li p span:nth-child(3){
    position: absolute;
    bottom: 0;
  }
  .kong{
    width: 100%;
  }
  .kong img{
    width: 100%;
    height: 3rem;
  }
  .kong p{
    font-size: 0.23rem;
    font-weight: bold;
    line-height: 0.3rem;
  }
  .kong h1{
    font-size: 0.15rem;
    line-height: 0.25rem;
    color: #9e9e9e;
  }
  .kong button{
    width: 1.2rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.2rem;
    color: #36b888;
    font-weight: bold;
    border: 1px solid #36b888;
    outline:none;
  }
  .a-2{
    width: 98%;
    height: 1.5rem;
    background-color: #FFFFFF;
    margin-top: 0.1rem;
    margin-bottom: 1rem;
  }
  .a-2 p{
    width: 80%;
    background-color: #FFFFFF;
    padding: 2%;
    float: right;
    height: 1.5rem;

  }
  .a-3{
    /* margin-top: 0.15rem; */
    position: fixed;
    background-color: #f7f7f7;
    bottom: 0;
    width: 100%;
    margin-left:-2%;
  }
  .mm{
    width: 1.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.3rem;
    background-color: #FFFFFF;
    outline:none;
    color: #000;
    font-weight: bold;
    /* position: absolute; */
    margin-left: 0.4rem;

  }
    .a-3 button:nth-child(2){
      width: 1rem;
      height: 0.65rem;
      text-align: center;
      line-height: 0.65rem;
      border-radius: 0.5rem;
      background-color: #01A863;
      outline:none;
      color: #fff;
      font-weight: bold;
      font-weight: 0.2rem;
      margin-left: 0.6rem;
    }
    .cc{
      width: 80%;
      height: 1rem;
      position: absolute;
      top: 50%;
      background-color: #C3BFBC;
      left: 10%;
      padding: 5%;
      font-weight: bold;
      border-radius: 0.2rem;
    }
    .cc button{
      width: 0.6rem;
      height: 0.25rem;
      text-align: center;
      line-height: 0.25rem;
      background-color: #01A863;
      color: #FFFFFF;
      border-radius: 0.15rem;
      position: absolute;
      bottom: 5%;
      right: 5%;
      outline:none;
    }
</style>
