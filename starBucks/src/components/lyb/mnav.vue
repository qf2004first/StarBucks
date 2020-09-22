<template>
  <div>
    <div class="nav">
          <div class="nav-top">
            <div class="nav-top-1">
              <span><img src="../../assets/imglyb/01.jpg"></span>
            </div>
            <div class="nav-top-2">
              <p>{{userName}}</p>
              <p>银星级会员 2020/12/06</p>
            </div>
            <div class="nav-top-3">
              <span class="iconfont icon-Mask"></span>
             <router-link to="set"> <span class="icon-shezhi iconfont"></span></router-link>
            </div>
            <div class="xing">
              <div class="xing-1">
                <div class="xing-1-top">
                    <div class="xing-1-top-1">
                      <p class="top-a1"><span>2</span>&nbsp;<span class="iconfont icon-xingxing"></span></p>         <p  class="top-a2">积分4颗<span  class="iconfont icon-xingxing"></span>可升级获取好礼</p>
                    </div>
                     <div class="xing-1-top-2">
                       <div class="top-a3">会员权益</div>
                     </div>
                </div>
                <div class="xing-1-bottom">
                    <van-progress :percentage="50" stroke-width="8" />
                </div>
              </div>
            </div>
          </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";

import { Progress } from 'vant';
  export default {
    name: "mnav1",
    data() {
      return {
        userName:localStorage.getItem("userName")
      }

    }
 }
</script>

<style scoped>
  @import url("../../assets/imglyb/font/iconfont.css");
  .xing{
    width: 100%;
    height: 1.5rem;
    position: absolute;
    bottom: -1.0rem;
    left: 0;
  }
  .xing-1{
    width: 95%;
    height: 1.5rem;
    margin: 0 auto;
    background-color: white;
    border-radius: 0.1rem;
    /* border: 1px solid black; */
  }
  .xing-1-top{
    width: 100%;
    height: 0.9rem;
    /* background-color: #0077AA; */
  }
  .xing-1-top-1{
    width: 70%;
    height: 0.9rem;
    padding-left: 0.1rem;

    float: left;
  }
  .top-a1{

    font-size: 0.4rem;
  }
  .top-a2{

    font-size: 0.1rem;
  }
  .top-a3{
    width: 90%;
    height: 0.3rem;
    border: 1px solid #999;
    border-radius: 0.4rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.12rem;
  }
  .top-a1 .iconfont{
    font-size:0.35rem;
  }
  .xing-1-top-2{
    width: 30%;
    height: 0.9rem;
    float: left;
    padding-top: 0.15rem;
    box-sizing: border-box;
  }

.xing-1-bottom{
  width: 90%;
  height: 0.5rem;
  margin: 0 auto;
  /* background-color: black; */
}


  .nav-top-3 .iconfont{
    color: white;
    font-size: 0.25rem;
  }
  .nav{
    width: 100%;
    height: 2rem;
    /* background-color:rgba(0,0,0,.4); */
    background: url(../../assets/imglyb/16983806_p0.png) no-repeat;
    background-size: 100% 100%;

    padding: 0 0.2rem;
    padding-top: 0.4rem;
    box-sizing: border-box;
    position: relative;
  }
  .nav-top{
    width: 100%;
    height: 1rem;
    padding: 0 0.01rem;
    /* background-color: #3ABA85; */
  }
  .nav-top-1{
    width: 20%;
    height: 1rem;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    float: left;
  }
  .nav-top-1 span{

    width: 0.55rem;
    height:0.55rem;
    display: block;
    border-radius: 50%;
  }
  .nav-top-1 span img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .nav-top-2{
    width: 50%;
    height: 1rem;
    float: left;
    padding-left: 0.03rem;
    box-sizing: border-box;
    padding-top: 0.25rem;
  }
  .nav-top-2 p{
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.12rem;
      letter-spacing: 0.002rem;
      color: white
  }
  .nav-top-2 p:nth-child(1){
    font-size: 0.20rem;
    color: white;
    letter-spacing: 0.005rem;
    font-weight: 500;
  }
  .nav-top-3{
    width: 30%;
    height: 1rem;
    float: left;
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-around;
  }
</style>
