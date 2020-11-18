<template>
  <div class="container">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="store-info">
      <img class="store-img" :src="storeMsg.img" />
      <div class="store-msg">
        <div class="detail">
          <p><span>{{storeMsg.minute}}</span>分钟  <span>{{storeMsg.distance}}</span> </p>
          {{storeMsg.notice}}
          <p>{{storeMsg.full}}</p>
        </div>
      </div>
    </div>
    <!-- {{ $route.query.id }} -->
  </div>
</template>

<script>

    export default {
       props:['storeMsg']
    }
</script>

<style lang="scss" scoped>
.container {
  background: #2e2f3b;
  color: #fff;
  padding: 0.2rem;
  .back {
    font-size: 20px;
    margin-bottom: 0.2rem;
  }
  .store-info {
    display: flex;
    .store-img {
      width: 1.7rem;
      height: 1.26rem;
    }
    .store-msg {
      flex: 1;
      width: 0; /*不受子元素宽度撑大*/
      .detail {
        margin-left: .1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>