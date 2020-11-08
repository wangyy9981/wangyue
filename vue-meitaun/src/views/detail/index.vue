<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <Head></Head>
      <!-- tab切换 -->
      <van-tabs v-model="active" animated sticky color="#ffb000">
        <van-tab :title="'点餐'">点餐页</van-tab>
        <van-tab :title="'评论'">
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">
          <stoinformation></stoinformation>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Head from "./Head";
import comment from "./comment/index";
import BetterScroll from "better-scroll";
import stoinformation from "./information/stoInformation";

export default {
  components: {
    Head,
    comment,
    stoinformation,
  },
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click: true,
        bounce: false,
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>