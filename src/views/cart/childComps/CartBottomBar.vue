<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
      <div class="price">合计：{{ totalPrice }}</div>
      <div class="calculate">去计算({{ checkLength }})</div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price * item.count + preValue;
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      // return !(this.$store.state.cartList.filter(item => !item.checked).length )
      return !this.$store.state.cartList.some((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        // 原来全部选中
        // 改变store中的cartList的属性，要用mutations ，自己改一下（老师用map可以直接修改）
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.check-content {
  display: flex;
  height: 40px;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 22px;
  height: 22px;
  margin-right: 5px;
}
.price {
  margin-left: 50px;
}
.calculate {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: red;
  color: #fff;
}
</style>
