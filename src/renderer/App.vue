<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'wangyi-music-electron-vue'
  }
</script>

<style lang="scss">
  @import url(./assets/styles/common.scss);
  
  body {
    padding: 0;
    margin: 0;
    -webkit-user-select: none;
    height: 670px;
    overflow: hidden;
    font-family: 'Source Sans Pro',"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
