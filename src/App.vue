<template>
  <div id="app">
    <!-- 过渡动画 -->
      <tabbar v-show="true" style="position:fixed;">
        <tabbar-item selected link="/index">
          <img slot="icon" src="./assets/imgs/all.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/resume">
          <img slot="icon" src="./assets/imgs/survey.png">
          <span slot="label">简历</span>
        </tabbar-item>
        <tabbar-item link="/applied">
          <img slot="icon" src="./assets/imgs/inquiry-template.png">
          <span slot="label">已申请</span>
        </tabbar-item>
        <tabbar-item link="/home">
          <img slot="icon" src="./assets/imgs/bussiness-man.png">
          <span slot="label">我的</span>
        </tabbar-item>
        <tabbar-item link="/more">
          <img slot="icon" src="./assets/imgs/code.png">
          <span slot="label">更多</span>
        </tabbar-item>
      </tabbar>
      <transition>
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
  name: 'app',
  components:{
    Tabbar,
    TabbarItem
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body { 
  /* 整体颜色 */
  background-color: #F6F6F5 !important;
}
</style>
