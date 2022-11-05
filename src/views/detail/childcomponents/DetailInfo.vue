<!-- views/detail/childcomponents/DetailInfo -->
<template>
  <div id="Detail-info">
   <div class="info-title">
    {{GoodsInfo.title}}
   </div>
   <div class="info-price">
    <span class="price-now">
        {{GoodsInfo.price}}
    </span><span class="price-old"  v-if="GoodsInfo.oldprice">
        {{GoodsInfo.oldprice}}
</span>
    <span class="price-desc" v-if='GoodsInfo.discountDesc'>
        {{GoodsInfo.discountDesc}}
    </span>
</div>
 <div class="info-addition">
    <div v-for="(item,index) in GoodsInfo.columns" :key="index">{{item}}</div>
 </div>
 <div class="info-service">
    <div class="service1">
        <img :src="GoodsInfo.services[0].icon" alt="">
    <span > {{GoodsInfo.services[0].name}}</span>   
    </div>
    <div class="service2">
        <img :src="GoodsInfo.services[1].icon" alt="">
       <span >{{GoodsInfo.services[1].name}}</span> 
    </div>
 </div>
  </div>
</template>

<script>
export default {
    name: 'DetailInfo',
    props: {
        GoodsInfo: {
            type: Object,
            default: {}
    }
}
}
</script>

<style scoped>
#Detail-info{
    width:100%;
 border-bottom:5px solid rgba(183,183,183,0.5)
}
.info-title{
    padding:5px 5px ;
    font-size:25px;
}
.info-price{
padding-left:10px;
padding-top:10px;
}
.price-now{
    font-size:25px;
    color:red;
}
.price-old{
position:relative;
top:-10px;
color:grey;
text-decoration: line-through;
padding-right:10px;
}
.price-desc{
    background-color:pink;
    font-size:15px;
    color:#fff;
    border-radius:30% 30%;;
    padding:5px 5px;
}
.info-addition{
display:flex;
justify-content: space-around;
color:grey;
font-size:15px;
margin-top:25px;
padding-bottom:5px;
border-bottom:1px solid  rgba(183,183,183,0.5)
}
.info-service{
    display:flex;
    justify-content: space-around;
    font-size:25px;
    margin-top:25px;
    padding-bottom:20px;
    border-bottom:5px solid  rgba(183,183,183,0.5);
    color:grey
}
.info-service img{
    width:20px;
    height:20px;
    vertical-align:baseline;
}
</style>