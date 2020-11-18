<template>
  <div class="shop-cart">
    <div class="cart" :class="{ active: $store.getters.total.sum > 0 }">
      <span class="iconfont icon-gouwuche"></span>
      <span class="total" v-show="$store.getters.total.sum > 0">{{
        $store.getters.total.sum
      }}</span>
    </div>
    <div class="fee" :class="{ active: $store.getters.total.sum <= 0 }">
      <p v-show="$store.getters.total.sum > 0">
        总价{{ $store.getters.total.sumPrice }}
      </p>
      <p>另需配送费{{ storeMsg.fee }}元</p>
    </div>
    <div class="price" :class="{ active: $store.getters.total.sumPrice - storeMsg.price >= 0 }">
      <p v-if="$store.getters.total.sumPrice - storeMsg.price < 0">{{ storeMsg.price }}元起送</p>
      <p v-if="$store.getters.total.sumPrice - storeMsg.price >= 0">去结算</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["storeMsg"],
};
</script>

<style lang="scss" scoped>
.shop-cart {
  width: 100%;
  height: 1rem;
  background: #3b3b3c;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  .cart {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #656565;
    text-align: center;
    line-height: 1rem;
    position: absolute;
    left: 0.3rem;
    bottom: 0.2rem;
    &.active {
      background: #f8c74e;
      .icon-gouwuche {
        color: #333;
      }
    }
    .total {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 0;
      background: #f00;
      color: #fff;
      text-align: center;
      line-height: 0.4rem;
    }
    .icon-gouwuche {
      font-size: 28px;
      color: #c4c4c4;
      font-weight: 700;
    }
  }
  .fee {
    flex: 3;
    margin-left: 1.5rem;
    height: 1rem;
    color: #fff;
    &.active {
      line-height: 1rem;
    }
  }
  .price {
    flex: 1;
    color: #999;
    height: 0.8rem;
    width: 1.5rem;
    line-height: 0.8rem;
    text-align: center;
    padding-right: 0.1rem;
    margin-top: 0.1rem;
    border-radius: 1rem;
    &.active {
      background: #f8c74e;
      color: #333;
    }
  }
}
</style>