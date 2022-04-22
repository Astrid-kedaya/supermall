<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <!-- 排除详情页防止数据不刷新,名字是export的name属性 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/mainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
.tab-bar {
  z-index: 999;
}
</style>
