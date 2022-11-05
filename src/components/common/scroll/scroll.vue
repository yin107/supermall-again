<!-- components/common/scroll/scroll -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)
import ObserveImage from '@better-scroll/observe-image'
  BScroll.use(ObserveImage)
export default {
    name: "scroll",
    props: {//这些都是从父组件中拿到的
           /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
        probeType: {
            type: Number,
            default:3//probe 侦测 0:不实时的侦测滚动，1：不侦测实时位置  2：可以实时政策位置，在滚动的过程中侦测，而手指离开后的惯性滚动不侦测  3：只要是滚动，就都会侦测
        },
          /**
       * 点击列表是否派发click事件
       */
    click: {
        type: Boolean,
        default:true,
        },
          /**
       * 是否开启横向滚动
       */
        scrollX: {
            type: Boolean,
        default:false
        },
         /**
       * 是否派发滚动事件
       */
        listenScroll: {
            type: Boolean,
        default:false
        },
           /**
       * 列表的数据
       */
        data: {
            // type: Array,
        default:null
        },
          /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
        pullup: {
            type: Boolean,
            default:false
        },
         /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
        pulldown: {
            type: Boolean,
        default:false
        },
          /**
       * 是否派发列表滚动开始的事件
       */
        beforeScroll: {
            type: Boolean,
        default:false
        },
         /**
       * 当数据更新后，刷新scroll的延时。
       */
        refreshDelay: {
            type: Number,
        default:20
        }
    },
    mounted() {
    //     console.log(this.data);
    //     this.$nextTick(() => {
    //      _initScroll()
    // })  //..不要用$nextTick会出错
     // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
      // console.log(2);
        this._initScroll()
      },1000)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
            return
            }
             // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          observeImage: true, // 开启 observe-image 插件
          observDom: true,
              observerImage:true,
                probeType: this.probeType,
                click: this.click,
                scrollX: this.scrollX,
          scrollbar: true,
          pullUpLoad: true,
          mouseWheel: {//鼠标滚轮
      speed: 20,
      invert: false,
            easeTime: 300,
            disableMouse: false,
      disableTouch:false
    }
            })
              // 是否派发滚动事件
        if (this.listenScroll) {
              // console.log(2);
          this.scroll.on('scroll', (pos) => {
                  // console.log(pos);
                this.$emit('scroll',pos)
            })
            }
                   // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
              // console.log(3);
                this.scroll.on('scrollEnd', () => {//不用scrollEnd
                    //   // 滚动到底部
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                      // console.log(5);
                      this.$emit('scrollToEnd')
                        //处理完成后，必须调用finish 只有调用后我们才能再次触发上拉加载时间
                        this.scroll.finishPullUp()
                    }
            })
            }
               // 是否派发顶部下拉事件，用于下拉刷新
            if (this.pulldown) {
                this.scroll.on('touchEnd', (pos) => {
                    if (pos.y > 50) {
                    this.$emit('pulldown')
                }
            })
            }
          // 是否派发列表滚动开始的事件
          if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
        },
        disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      // scrollTo(x, y, time=300) {
      //   this.scroll.scrollTo(x, y, time)
      // },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
          // 这里监听的是props传入的data，而不是钩子中的data
      // 在该组件并没有使用传进来的data，但很有必要传进来，因为当外部组件通过异步获取数据前，		better-scroll就已经初始化好了，但此时初始化的可滚动的高度是还没有拿到服务器数据就初始化好的
      //那么当数据加载好后，就需要让better-scroll调用refresh()函数刷新一下可滚动的高度，这一步很重要，否则无法滚动。
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
}
</script>

<style scoped>

</style>