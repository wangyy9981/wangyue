<template>
  <div>
    <div class="bg"></div>
    <div class="info-box">
      <span
        :class="{active:typedId==obj.id}"
        v-for="obj in list.label"
        :key="obj.id"
        @click="
          $emit('update', obj.id);
          typedId = obj.id;
        "
        >{{ obj.name }} {{ obj.count }}</span
      >
    </div>
    <div>
      <ul class="li-box">
        <li class="info-li" v-for="obj in list.rate" :key="obj.id">
          <div class="info-img">
            <img :src="obj.portrait" />
          </div>
          <div class="desc">
            <p>{{ obj.name }} <span>{{ obj.time }}</span></p>
            {{ obj.content }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      typedId: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 0.2rem;
  margin-top: 0.2rem;
  background-color: #f5f5f5;
}
.info-box {
  padding: 0.2rem;
  span {
    display: inline-block;
    padding: 0.1rem 0.24rem;
    border: 1px solid #bbb;
    border-radius: 0.28rem;
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
     &.active{
        background: #fffbf1;
        border:1px solid #ffb000;
        color: #ffb000;
      }
  }
}
.li-box {
  margin: 0.2rem;
  .info-li {
    padding: 0.1rem 0;
    // border-top: 1px solid #999;
    display: flex;
  }
  .info-img {
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
  }
  .desc {
    padding-left: 0.15rem;
    span {
      float: right;
    }
    p {
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>