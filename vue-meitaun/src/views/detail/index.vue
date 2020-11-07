<template>
  <div>
    <Head></Head>
    <!-- tab切换 -->
    <van-tabs v-model="active" animated>
      <van-tab :title="'点餐'">点餐页</van-tab>
      <van-tab :title="'评论'">
        <comment></comment>
      </van-tab>
      <van-tab :title="'商家'">商家页</van-tab>
    </van-tabs>
    {{ $route.query.id }}
  </div>
</template>

<script>
import Head from "./Head";
import comment from "./comment/index";

export default {
  components: {
    Head,
    comment,
  },
  data() {
    return {
      active: 0,
    };
  },
  
};
</script>

<style lang="scss" scoped>
</style>