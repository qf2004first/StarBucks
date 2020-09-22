<template>
  <div >
    <div><shoppinghead :num="num1"></shoppinghead></div>
    <shoppingcenter @chuan="fu" ></shoppingcenter>
  </div>
</template>

<script>
  import shoppinghead from '../../components/wzqcomponents/shoppinghead.vue'
  import shoppingcenter from '../../components/wzqcomponents/shoppingcenter1.vue'
  export default {
    props:["num"],
    data:function(){
      return {
        num1:""
      }
    },
    methods:{
        fu(a){
          console.log(a)
          this.num1=a
        }
    },
    components:{
      shoppinghead,shoppingcenter
    }
  }
</script>

<style scoped>
</style>
