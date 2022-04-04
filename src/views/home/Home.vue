<template lang="">
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabContol1"
    class='tab-control' v-show='isTabFixed'/>
    <!-- 加: 就是传数字3,不加传的字符串3 -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad' />
      <recommend-view :recommends="recommends" />
      <fashion />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabContol2"/>
      <goods-list :goods="showGoods" />
    </scroll>

    <!-- 监听组件要加.native -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>


  </div>

</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommView.vue";
import Fashion from "./childComps/Fashion.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    HomeSwiper,
    RecommendView,
    Fashion,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    // 返回页面时加载位置
    this.$refs.scroll.refresh();

    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 离开页面时记录位置
    this.saveY = this.$refs.scroll.scroll.y;
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabContol2.currentIndex = index;
      this.$refs.tabContol1.currentIndex = index;
    },
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;

      // 决定tabContol是否吸顶(position:fixed)
      this.isTabFixed = position.y < -this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refresh();
    },
    swiperImageLoad() {
      // 所有的组件都有一个属性$el 用于获取组件中的元素
      // console.log(this.$refs.tabContol.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabContol2.$el.offsetTop;
    },

    // 网络请求相关的方法

    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log("error");
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 999;
}
</style>
