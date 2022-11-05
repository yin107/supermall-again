<!-- views/home/childcomponent/HomeRecommend -->
<template>
  <div id="recommend-info">
    <div class="info-content" v-for="(item,index) in HomeRecomenddata" :key="index">
<div class="content-img">
  <a :href="item.link"> <img :src="item.image" alt=""></a>  
</div>
    <div class="content-text">
        {{item.title}}
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        HomeRecomenddata: {
            type: Array,
            default:[]
        }
}
}
</script>

<style scoped>
#recommend-info{
    width:100%;
    height:140px;
    background-color: #ffff;
    display: flex;
    justify-content: space-between;

    border-bottom:5px solid rgba(179, 179, 188,0.5)
}

.content-img img{
    width:70px;
    height:70px;
}
.info-content{
    width:80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
</style>