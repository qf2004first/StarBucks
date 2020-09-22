<template>
 <div class="box1">
     <p>福利购</p>
      <i :class="msg" @click="fun()">购买星礼卡/包</i>
      <i :class="msg1" @click="fun1()">我的星礼卡</i>
      <h1 v-if="show">绑定会员星礼包/星礼卡</h1>
 </div>

</template>

<script>
  export default {
    data:function(){
      return {
        msg:"border",
        msg1:"",
        show:false
      }
    },
    methods:{
      fun(){
        this.msg="border",
        this.msg1="",
        this.show=false;
        this.$emit("myclick",1)
      },
      fun1(){
        this.msg="",
        this.msg1="border",
        this.show=true
        this.$emit("myclick",2)
      }
    },
    components:{

    }
  }

</script>

<style scoped>

 .box1{
    width: 100%;
    height: 1.54rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    position: fixed;
    padding-left: 0.1rem;
    z-index: 100;
  }
  p{
    width: 100%;
    font-size: 0.375rem;
    line-height: 1.05rem;
    font-weight: bold;

  }
  i{

    line-height: 0.5rem;
    padding-bottom: 0.13rem;
    padding-left: 0.1rem;
    font-weight: bold;

  }
  h1{
    position: absolute;
    top: 0;
    right: 0;
    color: #42B983;
    font-size: 0.09rem;
    margin-right: 5%;
  }
  .border{
    border-bottom: 5px solid #42B983;
  }
</style>
