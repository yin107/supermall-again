<!-- views/detail/childcomponents/DetailTab -->
<template>
    <div class="box">
        <div class="tab-footer">
<div class="footer-left">
<div class="left-cont">
<div class="cont-serve"></div>
<div>客服</div>
</div>
<div class="left-cont">
    <div class="cont-shop"></div>
<div>店铺</div>
</div>
<div class="left-cont">
    <div class="cont-collet"></div>
<div>收藏</div>
</div>
</div>
<div class="footer-right">
<div class="right-add" @click="addgoods">加入购物车</div>
<div class="right-agree">确定</div>
</div>
  </div>
    </div>

</template>

<script>
export default {
    name: "DetailTab",
    methods: {
        addgoods() {
        this.$emit('addgoods')
    }
}
}
</script>

<style scoped>
.box{
    width:100%;
    height:58px;
    background-color: #fff;
}
.tab-footer{
    width:100%;
    height:58px;
    /* background-color: red; */
   position:fixed;
    bottom:0px;
    left:0px;
    right:0px;
    display: flex;
    justify-content: space-around;
    border-top:1px solid rgba(100,100,100,0.2);
    background-color: #fff;
    font-size:15px;

}
.footer-left{
    flex:1;
    display: flex;
    justify-content: space-evenly;
}
.footer-right{
    flex:1;
    display: flex;
    text-align: center;
    line-height:58px;
}
.right-add{
    flex:1;
background-color: rgb(192, 150, 72);
}
.right-agree{ flex:1;
    background-color: rgb(233, 89, 113);
}
.left-cont{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.cont-serve, .cont-shop,.cont-collet{
    width:30px;
    height:26px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px -61px;
    background-size: 26px
}
.cont-shop{
    background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px -115px;
    background-size: 26px
}
.cont-collet{
    background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px 3px;
    background-size: 26px
}
</style>