<template lang="">
  <div class="recommend">
    <div v-for="item in recommends" class="recommed-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommed-item {
  flex: 1;
}
.recommed-item img {
  width: 70px;
  margin-bottom: 10px;
}
</style>
