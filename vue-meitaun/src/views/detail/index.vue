<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <Head :storeMsg="storeMsg"></Head>
      <!-- tab切换 -->
      <van-tabs v-model="active" animated sticky color="#ffb000">
        <van-tab :title="'点餐'">
          <Order></Order>
        </van-tab>
        <van-tab :title="'评论'">
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">
          <stoinformation></stoinformation>
        </van-tab>
      </van-tabs>
    </div>
    <shopCart :storeMsg="storeMsg" v-if="active == 0"></shopCart>
  </div>
</template>

<script>
import Head from "./Head";
import comment from "./comment/index";
import Order from "./order/index";
import BetterScroll from "better-scroll";
import stoinformation from "./information/stoInformation";
import shopCart from "./order/shopCart";
import axios from "axios";

export default {
  components: {
    Head,
    comment,
    stoinformation,
    Order,
    shopCart,
  },
  data() {
    return {
      active: 0,
      storeMsg: {},
    };
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click: true,
        bounce: false,
      });
    }, 1500);

    axios.get(
        "http://admin.gxxmglzx.com/tender/test/get_store_id?id=" +
          this.$route.query.id
      )
      .then((res) => {
        this.storeMsg = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  // overflow: hidden;
}
</style>