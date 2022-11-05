<!-- //views/detail/childcomponents/DetailComment -->
<template>
  <div class="comment-info">
    <div class="info-title">
        <div>用户评价</div>
        <div>更多</div>
    </div>
    <div class="info-user">
        <img :src="shopcomments.user.avatar" alt="">
        <span>{{shopcomments.user.uname}}</span>
    </div>
    <div class="info-content">
        {{shopcomments.content}}
    </div>
    <div class="info-image" v-if="shopcomments.imgs!=undefined">
        <img :src="item" alt="" v-for="(item,index) in shopcomments.imgs" :key="index" >
    </div>
    <div class="info-add">
        {{shopcomments.created|createddate}}
        <span>{{shopcomments.style}}</span>
    </div>
  </div>
</template>

<script>
import {mixins} from '@/mixin/index.js'

export default {
    name: 'DetailComment',
    mixins:[mixins],
    props: {
        shopcomments: {
            type: Object,
            default: {}
        }
}
}
</script>

<style scoped>
.comment-info{
    color:grey;
    font-size:20px;
    padding:10px 8px;
}
.info-title{
    font-size:25px;
display:flex;
justify-content: space-between;
border-bottom:3px solid rgba(183,183,183,0.5);
padding:20px;
margin-bottom:15px;
}
.info-user img{
    width:40px;
    height:40px;
    border-radius: 50% 50%;
    vertical-align: middle;
    margin-right:10px;
}
.info-user{
    padding-bottom:15px;
}
.info-image{
width:100%;
    display:flex;
    justify-content: space-around;
}
.info-image img{
    width:200px;
    height:200px;
}
</style>