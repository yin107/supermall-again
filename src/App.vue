<!-- src/App.vue -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
   <Tab-bar v-show="$route.meta.isshow"></Tab-bar>
  </div>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
export default {
  name: 'App',
  components: {TabBar
  }
}
</script>

<style>
@import 'assets/css/normalize.css';

</style>
