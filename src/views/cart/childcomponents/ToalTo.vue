<!-- views/cart/childcomponents/ToalTo -->
<template>
  <div class="To-content">
    <div class="content-check">
        <img src="~assets/img/cart/unchecked.png" alt="" @click="checkedallclick" v-show="!$store.state.checkedall">
        <img src="~assets/img/cart/checked.png" alt="" @click="checkedallclick" v-show="$store.state.checkedall">
        <span>全选</span>
    </div>
    <div class="content-total">合计：￥{{$store.state.totalprice.toFixed(2)}}</div>
    <div class="content-pay">付款</div>
  </div>
</template>

<script>
export default {
  name: 'ToalTo',
  data() {
    return {
    }
  },
  methods: {
    checkedallclick() {
    this.$store.commit('checkedallclick')
  }
}
}
</script>

<style scoped>
.To-content{
    width:100%;
    display:flex;
    justify-content: space-around;
    position:fixed;
    bottom:59px;
  border-top:2px solid rgba(183,183,183,0.5);
  text-align: left;
height:38px;
padding:5px 8px;
align-items: center;
}
.content-check img{
    width:30px;
    height:30px;
    vertical-align:text-bottom;
}
.content-check{
    width:25%
}
.content-total{
    width:50%
}
.content-pay{
    width:25%
}
</style>