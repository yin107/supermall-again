<!--//componnets/common/tabbar/TabBarItem.vue -->
<template>
  <div class="tabbaritem" >
    <!-- slot上面除了name属性外，最好不要再绑定其他的属性，如果要绑定其他属性的话，就在外面包裹一层div -->
<div class="item-box" @click="boxclick">
    <div v-show="!isActive">
        <slot name="item-img" ></slot>
    </div>
    <div v-show="isActive">
        <slot name="item-img-active"></slot>
    </div>
    <div class="text" :class="{isActive:isActive}"> 
        <slot name="item-text" ></slot>
    </div>
</div>
  </div>
</template>

<script >
export default {
    name: 'TabBarItem',
    data() {
    return {

        }
    },
    computed: {
        isActive() {
            return this.path==this.$route.path
        }
    },
    props: {
        path: {
            type: String,
            default:'/home'
        }
    },
    methods: {
        boxclick() {
            if(this.$route.path!==this.path) //当不等于的时候才进行跳转
                this.$router.replace(this.path)//路由跳转
    }
}
}
</script>

<style scoped>
.tabbaritem{
    height:58px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.tabbaritem img{
    width:28px;
    height:28px;
}
.isActive{
    color:red
}
</style>