<!-- src/components/common/tabbar/TabBar -->
<template>
        <div id="tabbar">
<Tab-bar-item path="/home">
    <div slot="item-img"><img src="~assets/img/tabbar/home.svg" alt=""></div>
    <div slot="item-img-active"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
    <div slot="item-text">首页</div>
</Tab-bar-item>
<Tab-bar-item path="/category">
    <div slot="item-img"><img src="~assets/img/tabbar/category.svg" alt=""></div>
    <div slot="item-img-active"><img src="~assets/img/tabbar/category_active.svg" alt=""></div>
    <div slot="item-text">分类</div>
</Tab-bar-item>
<Tab-bar-item path="/cart">
    <div slot="item-img"><img src="~assets/img/tabbar/shopcart.svg" alt=""></div>
    <div slot="item-img-active"><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></div>
    <div slot="item-text">购物车</div>
</Tab-bar-item>
<Tab-bar-item path="/profile">
    <div slot="item-img"><img src="~assets/img/tabbar/profile.svg" alt=""></div>
    <div slot="item-img-active"><img src="~assets/img/tabbar/profile_active.svg" alt=""></div>
    <div slot="item-text">我的</div>
</Tab-bar-item>
  </div>
    <!-- </div> -->

</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name: 'TabBar',
components:{TabBarItem}
}
</script>

<style scoped>
#tabbar{
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
    background-color: #fff
}

</style>