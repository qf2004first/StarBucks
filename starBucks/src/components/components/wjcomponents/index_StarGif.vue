<template>
<div class="safe index_stargif">
    <p>星礼点亮每天</p>
  <div>

  </div>
  <div>
      
  </div>
</div>
   
</template>

<script>

import axios from "axios";

export default {
  name: "index_Nav",

  mounted() {
   
  },
};
</script>
<style  scoped>
.index_stargif > div{
    width: 100%;
    height: 1.55rem;
  
   margin-bottom: 0.075rem;
}
.index_stargif > div:first-of-type{
    background: url("../../../assets/wjimg/active_fk.jpg") no-repeat center;
    background-size: 3.5rem 1.55rem;
}
.index_stargif > div:nth-of-type(2){
    background: url("../../../assets/wjimg/active_zxs.jpg") no-repeat center;
    background-size: 3.5rem 1.55rem;
}

.index_stargif p{
    font-size: 0.15rem;
    font-weight: bold;
    margin-bottom: 0.05rem;
}

</style>