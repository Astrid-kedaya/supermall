<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <keep-alive>
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
