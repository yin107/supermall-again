<!-- components/common/backtotop/BackToTop -->
<template>
  <div id="backtotop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
name:'BackToTop'
}
</script>

<style scoped>
#backtotop{
    position:fixed;
    bottom:70px;
    right:10px;
    z-index:10;
    width:50px;
    height: 50px;
}
#backtotop img{
    width:100%
}
</style>