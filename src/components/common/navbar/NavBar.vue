
<template>
  <div id="navbar">
    <div class="content">
      <slot></slot>
    </div>
    </div>
</template>

<script>
export default {
name:'NavBar'
}
</script>

<style scoped>
.content{
  width:100%;
  height:48px;
  background-color: rgb(247, 29, 66);
  font-size:25px;
  font-weight: 600;
  color:#fff;
  text-align: center;
  line-height: 48px;
  position:fixed;
  top:0px;
}
#navbar{
  position:relative;
  height:48px;
  top:0px;
  z-index:999
}

</style>