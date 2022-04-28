<template lang="">
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  computed: {
    // ...mapGetters(["cartLength", "cartList"])
    // 改名
    ...mapGetters({
      length: "cartLength",
    }),

    // 封装
    // cartLength() {
    //   // 封装getters
    //   // return this.$store.state.cartList.length
    //   return this.$store.getters.cartLength;
    // },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
