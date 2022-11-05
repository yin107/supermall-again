<!-- views/home/childcomponent/TabControl -->
<template>
  <div id="tabcontrol">
    <div v-for="(item,index) in tabitem" :key="index" @click="itemclick(index)" :class="{changecolor:$store.state.currentindex==index}" class="control-item">{{item}}</div>
      
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        tabitem: {
            type: Array,
            default:[]
        }
    },
    data() {
        return {
            // currentindex:''
        }
    },
    methods: {
        itemclick(index) {
            this.$store.commit('Currentindex',index)
            this.$emit('itemclick',index)
    }
}
}
</script>

<style>
#tabcontrol{
height:40px;
width:100%;
display:flex;
justify-content:space-around;
font-size:20px;
line-height: 40px;
background-color: #fff;
}
.changecolor{
    color:red
}
.control-item{
    position:relative;
    top:0px;
   
}
.changecolor::after{
    content:'';
    position:absolute;
    left:-2px;
    right:-2px;
    bottom:0px;
    border:4px;
    height:4px;
    background-color: red;
}
</style>