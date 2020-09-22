<template>
  <div>

      <passnav></passnav>
       <passpd></passpd>
  </div>
</template>

<script>
  import passpd from "../../components/lyb/passlyb.vue";
  import passnav from "../../components/lyb/passnav.vue"
  export default {

      name:"passwd",
      components:{
        passpd,passnav
      }
  }
</script>

<style>
</style>
