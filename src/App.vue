<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>

import HomePage from "./components/HomePage.vue"

export default {
  components:{
     HomePage,
  }
}
</script>


<style scoped lang="scss">
 #app{
   width:100%;
   height:100%;
 }
</style>
