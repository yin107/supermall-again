<!-- //src/views/cart/Cart.vue -->
<template>
  <div>
    <Nav-bar>购物车</Nav-bar>
    <scroll class="wrapper"
          :pullup="true"
          :pulldown="true"  
          ref="scroll"
          :data="null"
          :listenScroll="true"
         >
    <Good-item :itemgood="goods"></Good-item>
    </scroll>
<Toal-to></Toal-to>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import scroll from 'components/common/scroll/scroll'
import GoodItem from 'views/cart/childcomponents/GoodItem'
import NavBar from 'components/common/navbar/NavBar'
import ToalTo from 'views/cart/childcomponents/ToalTo';
export default {
  name: 'Cart',
  components: { NavBar, ToalTo,GoodItem,BScroll,scroll },
  computed: {
    goods() {
    return this.$store.state.addgoods
  }
}
}
</script>

<style scoped>
  .wrapper{
    position: absolute;
height: calc(100% - 48px - 59px - 50px);
  left: 0;
  right: 0;
  top:44px;
  bottom: 59px;
  overflow: hidden;
}
</style>