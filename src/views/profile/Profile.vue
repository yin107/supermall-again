<template>
  <div>我的
    <test v-show="isshow" @btnclick="click"></test>
    <test v-show="!isshow" @btnclick="click"></test>
    <span @click="clickspan">ishsow转换</span>
  </div>
</template>

<script>
import test from 'views/profile/childcomponent/test'
export default {
  name: 'Profile',
  components: { test },
  data() {
    return {
      isshow:false
    }
  },
  methods: {
    click(rr) {
      console.log(rr);
    },
    clickspan() {
    this.isshow=!this.isshow
  }
  },
  
}
</script>

<style>

</style>