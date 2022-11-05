<!-- views/detail/childcomponents/DetailShopInfo -->
<template>
  <div id="shopinfo">
    <div class="info-shop">
      <img :src="shopInfo.shopLogo" alt=""><span>{{shopInfo.name}}</span>
    </div>
    <div class="info-addtion">
        <div class="add-left">
<div class="left-total">
    <div>{{shopInfo.cFans|totalsell}}</div>
    <div>总销量</div>
</div>
<div class="left-all">
<div>{{shopInfo.cGoods}}</div>
<div>全部宝贝</div>
</div>
        </div>
        <div class="add-right">
            <table>
                <tr v-for="(item,index) in shopInfo.score" :key="index">
                    <td>{{item.name}}</td>
                    <td :class="{ scorecolor: (item.isBetter),green:!item.isBetter}">{{item.score}}</td>
                    <td :class="{ bgcolorred: (item.isBetter),bgcgreen:!item.isBetter}">{{item.isBetter|isbert}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="info-go">进店逛逛</div>
  </div>
</template>

<script>
export default {
    name: 'DetailShopInfo',
    props: {
        shopInfo: {
            type: Object,
            default:{}
        }
    },
    filters: {
        totalsell(number) {
        return (number/10000).toFixed(1)+'万'
        },
        isbert(be) {
        return be?'高':'低'
    }
}
}
</script>

<style>
#shopinfo{
    width:100%;
    margin-top:30px;
}
.info-shop img{
width:60px;
height:60px;
border-radius:50% 50%;
vertical-align: middle;
}
.info-shop{
font-size:30px;
padding-left:10px;
}
.info-shop span{
    margin-left:10px;
}
.info-addtion{
    width:100%;
    margin-top:40px;
display: flex;
justify-content: space-around;
height:70px;

}
.add-left{
    flex:1.3;
text-align: center;
    border-right:1px solid rgba(183,183,183,0.5);
    display:flex;
    justify-content: space-around;
}
.left-total,.left-all{
display:flex;
flex-direction: column;
justify-content: center;
    align-items: center;
}
.add-right{
    flex:1;
text-align: center;
margin-left: 10%;
}
.info-go{
    margin-top:10px;
}
.scorecolor{
    color:red;
}
.green{
    color:green
}
.bgcolorred{
    background-color: red;
    color:white
}
.bgcgreen{
    background-color: green;
    color:white
}
.info-go{
    background-color: rgba(183,183,183,0.5);
    width: 96px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    margin-left: 50%;
    transform: translate(-50%,-50%);
    margin-top: 30px;
    border-radius: 10% 10%;
}
</style>