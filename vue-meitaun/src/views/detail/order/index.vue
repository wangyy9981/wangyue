<template>
  <div>
    <div class="order-container">
      <ul class="cate-box">
        <li v-for="obj in nav" :key="obj.id">{{ obj.name }}</li>
      </ul>
      <div class="pro-box">
        <div v-for="(obj,index) in goods" :key="index">
            <h2>{{obj.name}}</h2>
          <ul>
            <li class="pro-li" v-for="prod in obj.content" :key="prod.id">
                <img :src="prod.img" >
                <div class="pro-info">
                    <p>{{prod.name}}</p>
                    <p><span>月售{{prod.num}}</span>  <span>赞{{prod.up}}</span></p>
                    <p><span>￥{{prod.price}}</span> <span class="choice">+</span></p>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nav: [],
      goods: [],
    };
  },
  created() {
    axios
      .get(
        "http://admin.gxxmglzx.com/tender/test/get_nav?id=" +
          this.$route.query.id
      )
      .then((res) => {
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
        console.log(goods);
      })
      .catch((error) => {});
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  .cate-box {
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
    }
  }
  .pro-box {
    flex: 3;
    .pro-li{
        padding: .1rem;
        display: flex;
        img{
            width: 1.5rem;
        }
        .pro-info{
            flex: 1;
        }
        .choice{
            display: block;
            float: right;
            width: .3rem;
            border-radius: 50%;
            text-align: center;
            color: #f5f5f5;
            background-color: #ffb000;
        }
    }
  }
}
</style>