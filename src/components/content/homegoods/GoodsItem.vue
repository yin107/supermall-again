<!-- components/content/homegoods/GoodsItem -->
<template>
  <div id="goods-info">
   <Goods v-for="(item,index) in goodsmessage" :key="index" class="info-item" @click.native="goodsclick(item)">
    <div class="item-image">
       <img :src="item|showimage" alt="" >
    </div>
    <div class="item-text">
        <div class="text-title">{{item.title}}</div>
        <div class="text-addition">
        <span class="addition-price">{{item.price}}</span>
        <span class="addition-collect">{{item.cfav}}</span>
        </div>
    </div>
   </Goods>
  </div>
</template>

<script>
import Goods from 'components/common/goods/Goods'
export default {
    name: 'GoodsItem',
    components: { Goods },
    props: {
        goodsmessage: {
            type: Array,
            default:[]
        }
    },
    methods: {
        goodsclick(item) {
   this.$router.push(`/detail/${item.iid}`)
   //this.$router.push('/detail/'+item.iid)
}
    },
    filters: {
        showimage(item) {
        return item.showLarge? item.showLarge.img:item.image
    }
   }
}
</script>

<style scoped>
#goods-info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.info-item{
width:180px;
height:306px;
}
.item-image{
    width:180px;
height:267px;

}
.item-image img{
    width:100%;
    height:100%;border-radius: 10px 10px;
}
.item-text .text-title{
    font-size:15px;
    width:100%;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.addition-price{
    color:red;
    margin-right:25px;
}
.addition-collect{
    position:relative;
    top:0px;
    font-size:15px;

}
.addition-collect::before{
    content:'';
    position:absolute;
    left:-21px;
    top:4px;
    width:14px;
    height:14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;


}
</style>