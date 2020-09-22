<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:"App",
  data:function(){
    return {
    }
  }
}

</script>

<style>

          *{margin: 0; padding: 0;}
            li{list-style: none;}
            a{text-decoration:none;}
            i,em{font-style: normal;}
            b,strong{font-weight: normal;}
            h1,h2,h3,h4,h5,h6{font-size: 16px; font-weight: normal;}
            img{vertical-align: middle; border: none;}
            html{
              font-size: 26.6vw;
              height: 100%;
            }
            body{
              font-size: 16px;
              height: 100%;
              overflow: auto;
            }
.safe{
  width: 3.5rem;
  margin: auto;
}

</style>


