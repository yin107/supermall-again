<template>
    <div>
        <button @click="btnclick">123</button>
    </div>
  </template>
  
  <script>
  export default {
      name: 'test',
      methods:{
          btnclick() {
          this.$emit('btnclick','woshi')
      }
  }
  }
  </script>
  
  <style>
  
  </style>