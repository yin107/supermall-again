<!-- views/cart/childcomponents/GoodItem -->
<template>
  <div class="goods-info">
<div class="info-content" v-for="(item,index) in itemgood" :key="index">
<div class="cont-left">
    <img src="~assets/img/cart/unchecked.png" alt="" class="icon"  v-show="!item.ischecked" @click="clickchecked(item)">
    <img src="~assets/img/cart/checked.png" alt="" class="icon" v-show="item.ischecked" @click="clickchecked(item)">
    <img :src="item.img" alt="" class="goodimg">
</div>
<div class="cont-right">
    <span class="right-title">{{item.title}}</span>
    <div class="right-cont">
        <p class="cont-price">{{item.price}}</p>
        <p>x{{item.count}}</p>
    </div>
</div>
</div>
  </div>
</template>

<script>
export default {
    name:'GoodsItem',
    props: {
        itemgood: {
            type: Array,
            default() {
                return []
            }
    }
    },
    data() {
        return {
            
        }
    },
    methods:{
        clickchecked(item) {
            this.$store.commit('reactchecked', item)
        }
    }
}
</script>

<style scoped>
.info-content{
    width:100%;
    height:120px;
    display:flex;
    justify-content: space-around;
    justify-items: center;
    border-bottom:1px solid grey;
    align-items: center
}
.cont-left {
  flex:40%;
display:flex;
justify-content: space-around;
align-items: center
}
.cont-left .icon{
width: 30px;
height:30px;
}
.cont-left .goodimg{
    width: 86px;
    height: 110px;
}
.cont-right{
    width:72px;
    height:120px;
    flex:60%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.right-cont .cont-price{
    color: red;
}
.right-cont{
    display:flex;
    justify-content: space-between;
}
.cont-right .right-title{
font-size:20px;
overflow: hidden;
text-overflow: ellipsis;
height:50px;
white-space: nowrap;
}
</style>