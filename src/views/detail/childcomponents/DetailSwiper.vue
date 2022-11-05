<template>
  <div>
    <swiper swipeid="swipe" ref="swiper" :autoPlay="3000" effect="slide" class="swiper2">
    <div slot="swiper-con" v-for="(item,index) in  swiperdata" :key="index" class="swiper-slide">
      <img :src="item" alt="">
    </div>
</swiper>
  </div>
</template>

<script>
import swiper from 'components/common/swiper/swiper'
export default {
    name: 'DetailSwiper',
    components: { swiper },
    props: {
        swiperimg: {
            type: Array,
            default() {
            return []
        }
    }
    },
    computed: {
        swiperdata() {
            return this.swiperimg
        }
    },

}
</script>

<style scoped>
.swiper-slide{
    height:auto
}
.swiper2{
    height:367px;
}
</style>