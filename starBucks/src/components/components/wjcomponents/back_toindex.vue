<template>
   <router-link  to="/index" tag="div" class="backtoindex">
   x
   </router-link>
</template>

<script>
import Vue from 'vue';
import { Sticky } from 'vant';

Vue.use(Sticky);
import axios from "axios";

export default {
  name: "index_Nav",

  mounted() {
   
  },
};
</script>
<style  scoped>
.backtoindex{
    position: absolute;
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0.1rem;
    left: 0.1rem;
    text-align: center;
    color: white;
    z-index: 1000;
    line-height: 0.15rem;
}
</style>