<!-- views/home/childcomponent/HomeSwipper -->
<template>
  <div>
<swiper swipeid="swipe" ref="swiper" :autoPlay="3000" effect="slide">
    <div slot="swiper-con" v-for="(item,index) in swiperimg" :key="index" class="swiper-slide">
      <a :href="item.link"><img :src="item.image" alt=""></a>
    </div>
</swiper>
  </div>
</template>

<script>
import swiper from 'components/common/swiper/swiper'
export default {
    name: 'HomeSwipper',
    components: { swiper },
    props: {
        swiperimg: {
            type: Array,
            default() {
            return []
        }
    }
}
}
</script>

<style>
.swiper-slide{
    height:auto
}
</style>