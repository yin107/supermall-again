<!-- views/detail/childcomponents/NavBar -->
<template>
  <div id="navbar">
    <div class="navbar-arr" @click="gotoback">
        <img src="~assets/img/detail/arrow-left.png" alt="">
    </div>
<div class="nav-content">
    <div  v-for="(item,index) in navcont" :key="index" :class="{colorred:currentindex==index}" @click.stop="itemclick(index)" >{{item}}</div>
</div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        navcont: {
            type: Array,
            default() {
            return []
        }
    }
    },
    data() {
        return {
currentindex:0
        }
    },
    methods: {
        gotoback() {
        this.$router.go(-1)
        },
        itemclick(index) {
            switch (index) {
                case 0:
                    {
                     this.$parent.$refs.scroll.scrollToElement(this.$parent.$refs.swiper.$el,true,true) //scrollToelement就实现不了  --不能写this.$parent.$refs.swiper
                 //    this.$parent.$refs.scroll.scrollTo(0,0) //注意里面的y需要是负值
                    } 
                    break;
                case 1:
                    {
                   //     this.$parent.$refs.scroll.scrollToElement(this.$parent.$refs.params)
                   let y=-this.$parent.$refs.params.$el.offsetTop//不能直接将这个变量写在scrollTo里面会出错
                        this.$parent.$refs.scroll.scrollTo(0,y)
                    }
                    break;
                    case 2:
                    {
                        if (this.$parent.$refs.comment!=undefined) {//有时候会没有商品的评论
                            let y=-this.$parent.$refs.comment.$el.offsetTop
                        this.$parent.$refs.scroll.scrollTo(0,y)
                        }
                        else {
                            let y=-this.$parent.$refs.params.$el.offsetTop
                        this.$parent.$refs.scroll.scrollTo(0,y)
                        }
                     //   this.$parent.$refs.scroll.scrollToElement(this.$parent.$refs.comment, true, true)
                    
                    }
                    break;
                    case 3:
                    {
                        if (this.$parent.$refs.recommend != undefined) {
                            let y=-this.$parent.$refs.recommend.$el.offsetTop
                        this.$parent.$refs.scroll.scrollTo(0,y)
                    }
                       // this.$parent.$refs.scroll.scrollToElement(this.$parent.$refs.recommend, true, true)
                       
                    }
                    break;
            }
            this.currentindex=index
    }
    },
    created() {
     //   this.$parent.$refs.scroll.scrollToElement(this.$parent.$refs.swiper.$el, true, true)  不能这样用，在创建阶段可能娶不到refs，el都还没有挂载
        
    },
    mounted() {
     this.$parent.$refs.scroll.scrollTo(0,0)  //scrollToElement不能这样用，在创建阶段可能娶不到refs，el都还没有挂载
        
    }
}
</script>

<style scoped>
#navbar{
    width:100%;
    height:48px;
border-bottom:1px solid rgba(183,183,183,0.5);
  display: flex;
  position:fixed;
  top:0px;
  z-index:10;
  background-color: #fff;
}
.navbar-arr{
    flex:2;
    text-align: center;
}
.navbar-arr  img{
    width:40px;
    height:40px;
    margin-top:4px;
}
.nav-content{
    flex:8;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    text-align: center;
    line-height: 48px;
    padding:0 18px ;
}
.colorred{
    color:red
}
</style>