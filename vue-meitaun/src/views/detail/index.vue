<template>
  <div>
    <Head></Head>
    <!-- tab切换 -->
    <van-tabs v-model="active" animated>
      <van-tab :title="'点餐'">点餐页</van-tab>
      <van-tab :title="'评论'">
        <comment></comment>
      </van-tab>
      <van-tab :title="'商家'">
        <stoinformation></stoinformation>
      </van-tab>
    </van-tabs>
    {{ $route.query.id }}
  </div>
</template>

<script>
import Head from "./Head";
import comment from "./comment/index";
import stoinformation from "./information/stoInformation"

export default {
  components: {
    Head,
    comment,
    stoinformation
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