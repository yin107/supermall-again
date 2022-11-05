<!-- views/detail/Detail -->
<template>
  <div>
    <Nav-bar :navcont="navcont" ref="navbar"></Nav-bar>
    <scroll class="wrapper"
          :pullup="true"
          :pulldown="true"  
          ref="scroll"
          :data=" iid"
          :listenScroll="true"
          @scroll="scroll"
         >
    <Detail-swiper :swiperimg="swiperdata" v-if="swiperdata.length" ref="swiper"></Detail-swiper>
    <Detail-info :GoodsInfo="GoodsInfo" v-if="Object.keys(GoodsInfo).length" ></Detail-info>
    <Detail-shop-info :shopInfo="shopInfo" v-if="Object.keys(shopInfo).length"></Detail-shop-info>
    <Detail-shops-image :shopsInfo ='shopsInfo'  v-if="Object.keys(shopsInfo).length" ></Detail-shops-image>
    <Detail-params :shopparams="shopparams" v-if="Object.keys(shopparams).length" ref="params"></Detail-params>
<Detail-comment :shopcomments="shopcomments" v-if="Object.keys(shopcomments).length" ref="comment"></Detail-comment>
<Goods-item :goodsmessage="recommentgood" ref="recommend"></Goods-item>
    </scroll>
<Detail-tab   @addgoods="addgood"></Detail-tab>
<Back-to-top v-show="isback" @click.native="willgototop"></Back-to-top>
<div class="toast" v-show="istoast">{{$store.state.toastmess}}</div>
  </div>
</template>

<script>
import {mixins} from '@/mixin/index.js'

import BackToTop from 'components/common/backtotop/BackToTop'
import BScroll from 'better-scroll'
import scroll from 'components/common/scroll/scroll'
import {getdetaildata,getrecommend} from 'network/detail.js'
import NavBar from 'views/detail/childcomponents/NavBar'
import DetailSwiper from 'views/detail/childcomponents/DetailSwiper'
import DetailTab from 'views/detail/childcomponents/DetailTab'
import DetailInfo from 'views/detail/childcomponents/DetailInfo'
import DetailShopInfo from 'views/detail/childcomponents/DetailShopInfo'
import DetailShopsImage from 'views/detail/childcomponents/DetailShopsImage'
import DetailParams from 'views/detail/childcomponents/DetailParams'
import DetailComment from 'views/detail/childcomponents/DetailComment'
import GoodsItem from 'components/content/homegoods/GoodsItem'
export default {
    name: 'Detail',
    components: { NavBar,DetailTab,DetailSwiper,DetailInfo ,DetailShopInfo,DetailShopsImage,DetailParams,BScroll,scroll,DetailComment,GoodsItem,BackToTop},
    data() {
        return {
            navcont: ['商品', '参数', '评论', '推荐'],
            iid: null,
            swiperdata: [],
            GoodsInfo: {},
            shopInfo: {},
            shopsInfo: {},
            shopparams: {},
            shopcomments: {},
            recommentgood: [],
            isback: false,
            istoast: false,

        }
    },
    mixins:[mixins],

    computed: {
        nowgood() {
            return {
                title: this.GoodsInfo.title,
                    price: this.GoodsInfo.oldprice,
                img: this.swiperdata[0],
                    iid:this.iid
        }
                  
}
    },
    created() {
        this.iid = this.$route.params.iid
        getdetaildata(this.iid).then(res => {
            let result1 = res.data.result
            this.swiperdata = result1.itemInfo.topImages
            let result2=result1.itemInfo
            this.GoodsInfo = {
                title: result2.title,
                price: result2.price,
                oldprice: result2.oldPrice,
                discountDesc: result2.discountDesc,
                columns: result1.columns,
                services:result1.shopInfo.services
            }
            let result3=result1.shopInfo
            this.shopInfo = {
                score: result3.score,
                shopLogo: result3.shopLogo,
                name: result3.name,
                cFans: result3.cFans,
                cGoods:result3.cGoods
    
            }
            let result4=result1.detailInfo
            this.shopsInfo = {
                skus: result4.detailImage[0].list,
                desc: result4.desc,
                key:result4.detailImage[0].key
            
            }
            this.shopparams = {
                info: result1.itemParams.info.set,
    rule: result1.itemParams.rule
            }
            if (result1.rate.list != undefined) {
                let result5=result1.rate.list[0]
            this.shopcomments = {
                content:result5.content,
                created:result5.created,
                user: result5.user,
                imgs:result5.images,
    style:result5.style
                }    
            }
           
        })
        getrecommend().then(res => {
            this.recommentgood=res.data.data.list
        })
    },
    mounted() {
      
    },
    methods: {
        scroll(pos) {
                  // 回到顶部按钮的显示与隐藏
      if (-pos.y > 1676) {
      this.isback=true
      }
      else {
      this.isback=false
     }
            if (-pos.y < this.$refs.params.$el.offsetTop) {
                this.$refs.navbar.currentindex=0
            }
            if (this.$refs.comment!=undefined) {
                if (-pos.y > this.$refs.params.$el.offsetTop && -pos.y<this.$refs.comment.$el.offsetTop) {
                this.$refs.navbar.currentindex=1
            }
            } else {
                if (-pos.y > this.$refs.params.$el.offsetTop && -pos.y<this.$refs.recommend.$el.offsetTop) {
                this.$refs.navbar.currentindex=1
            }
            }
            if (this.$refs.comment != undefined) {
                if (-pos.y > this.$refs.comment.$el.offsetTop&&-pos.y<this.$refs.recommend.$el.offsetTop) {
                this.$refs.navbar.currentindex=2
            }
            }
            if (-pos.y > this.$refs.recommend.$el.offsetTop) {
                this.$refs.navbar.currentindex=3
            }
         
        },
        addgood() {
            this.$store.commit('add', this.nowgood)
            this.istoast=true
            setTimeout(() => {
                this. istoast=!this. istoast
            },3000)
        }
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
  bottom: 59px;
  overflow: hidden;
}
.toast{
    height:30px;
    font-size:18px;
    background-color: rgba(122,122,122,0.4);
   position:fixed;
   z-index:99;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%)
}
</style>