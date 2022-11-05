<!-- views/detail/childcomponents/DetailShopsImage -->
<template>
  <div class="images-info">
    <div class="line-left">
        <div class="left-line"></div>
    </div>
   <div class="info-text">
    {{shopsInfo.desc}}
   </div>
   <div class="line-right">
    <div class="right-line"></div>
   </div>
 <div class="info-add">{{shopsInfo.key}}</div>
 <div class="info-images" v-for="(item,index) in shopsInfo.skus" :key="index">
<img :src="item" alt="">
 </div>
  </div>
</template>

<script>
export default {
    name: 'DetailShopsImage',
    props: {
        shopsInfo: {
            type: Object,
            default: {}
        }
}
}
</script>

<style scoped>
.info-images img{
    width:100%;
}
.images-info{
    font-size:20px;
    color:grey;;
    margin-top:30px;
    padding-left:8px;
    padding-right:8px;
}
.info-images{
    margin-top:10px;
}
.info-text{
    padding:10px 0px;
}
.line-left{
    width: 2px;
    height: 2px;
    border-radius: 50% 50%;
    background-color: black;
    color: black;
    position: relative;
    top: 0px;
    border: 2px solid;

}
.left-line{
    width: 75px;
    border: 1px solid grey;
    position: absolute;
    left: 3px;
}
.line-right{
    width: 2px;
    height: 2px;
    border-radius: 50% 50%;
    background-color: black;
    color: black;
    position: relative;
    top: -2px;
    right: -99%;
    border: 2px solid;
}
.right-line{
    width: 75px;
    border: 1px solid grey;
    position: absolute;
    right: 3px;
}
</style>