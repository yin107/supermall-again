<!-- src/views/home -->
<template>
  <div>
    <Nav-bar>购物街</Nav-bar>
    <Tab-control :tabitem="tabitem" @itemclick="clickchose" v-show="isshow" class="ishowtab"></Tab-control>
    <scroll class="wrapper"
          :pullup="true"
          :pulldown="true"  
          ref="scroll"
          :data="totalmessage"
          :listenScroll="true"
          @scrollToEnd="scrollToEnd"
          @scroll="scroll"
         >
    <Home-swipper :swiperimg="HomeImageBanner"></Home-swipper>
    <Home-recommend :HomeRecomenddata="HomeRecomenddata"></Home-recommend>
    <Feature></Feature>
    <Tab-control :tabitem="tabitem" @itemclick="clickchose" v-show="!isshow"></Tab-control>
   <Goods-item :goodsmessage="goodsmessage"></Goods-item>
</scroll>
<Back-to-top v-show="isback" @click.native="willgototop"></Back-to-top>
  </div>
</template>

<script>
import {getmultidata,getdata} from 'network/home.js'
import NavBar from 'components/common/navbar/NavBar'
import BackToTop from 'components/common/backtotop/BackToTop'
import GoodsItem from 'components/content/homegoods/GoodsItem'
import HomeSwipper from 'views/home/childcomponent/HomeSwipper'
import HomeRecommend from 'views/home/childcomponent/HomeRecommend'
import Feature from 'views/home/childcomponent/Feature'
import TabControl from 'views/home/childcomponent/TabControl'
import BScroll from 'better-scroll'
import scroll from 'components/common/scroll/scroll'
import {mixins} from '@/mixin/index.js'
export default {
  name: 'View-Home',
  components: { NavBar,HomeSwipper,HomeRecommend,Feature,TabControl,GoodsItem,BScroll,scroll,BackToTop },
  data() {
    return {
      HomeImageBanner: [],
      HomeRecomenddata: [],
      tabitem: ['流行', '新款', '精选'],
      chose:'pop',
      totalmessage: {
        'pop': {page: 0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page: 0,list:[]}
      },
      isshow: false,
      isback: false
    }
  },
  mixins:[mixins],
  computed: {
    goodsmessage() {
  return this.totalmessage[this.chose].list
}
  },
  created(){
    // request({url:'/home/multidata'}).then(res=>{console.log(res);}) 进一步封装到一个单独的文件中
    getmultidata().then(res => {
      let data = res.data.data
      this.HomeImageBanner = data.banner.list
      this.HomeRecomenddata=data.recommend.list
    })
//页面开始先把第一页的数据获取过来
    this.getdata('pop')
    this.getdata('new')
    this.getdata('sell')
  }, 
  methods: {
    getdata(type) {
      const page=this.totalmessage[type].page+1
      getdata(type, page).then((res) => {
        this.totalmessage[type].list.push(...res.data.data.list)
        this.totalmessage[type].page+=1
      })
    },
    clickchose(index) {
      switch (index) {
        case 0:
          this.chose = 'pop'
          break;
        case 1:
          this.chose = 'new'
          break;
        case 2:
          this.chose = 'sell'
          break;
}
    },
    scrollToEnd() {
      //到底之后需要加载更多的数据，将page+1，并且重新调用getdata，type就是当前的chose
      this.getdata(this.chose)
    },
    scroll(pos) {
      if (-pos.y > 598) {

       this.isshow=true
      }
      else {
      this.isshow=false
      }
      // 回到顶部按钮的显示与隐藏
      if (-pos.y > 1676) {
      this.isback=true
      }
      else {
      this.isback=false
     }
    },
    // willgototop() {
    //   this.$refs.scroll.scrollTo(0,0)
    // }
  },
  mounted(){

}
}
</script>

<style scoped>
  .wrapper{
    position: absolute;
height: calc(100% - 48px - 59px);
  left: 0;
  right: 0;
  top:44px;
  bottom: 2.09rem;
  overflow: hidden;
}
.ishowtab{
  position:fixed;
  top:48px;
  z-index:99;
height:40px
}
</style>