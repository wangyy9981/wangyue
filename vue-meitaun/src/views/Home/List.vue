<template>
  <div>
    <div class="store-List">
      <h2 class="store-title">附近商家</h2>
      <div class="List">
        <ul>
          <li class="store-li" v-for="obj in storeList" :key="obj.id">
            <img :src="obj.img" />
            <div class="store-inf">
              <p class="">{{ obj.name }}</p>
              <p class="">
                ***** 月销 <span>{{ obj.minute }}</span>
              </p>
              <p class="">
                {{ obj.num }} <span>{{ obj.distance }}</span>
              </p>
              <p>
                <span>起送{{ obj.per_capita }}</span>
                <span>配送{{ obj.fee }} </span><span>人均{{ obj.price }}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      storeList: [],
    };
  },
  methods: {
    getStorelist() {
      axios
        .get("http://admin.gxxmglzx.com/tender/test/get_store?current=0&size=5")
        .then((res) => {
          console.log(res);
          let result = res.data;
          if (result.errcode == 200) {
            this.storeList = result.data.list;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStorelist();
  },
};
</script>

<style lang="scss" scoped>
.store-List {
  h2 {
    text-align: center;
    font-size: 23px;
    margin: 10px 0;
  }
  .store-title::after,
  .store-title::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 1px;
    background: #666;
    vertical-align: middle;
    transform: scaleY(0.5);
  }
  .store-li {
    display: flex;
    justify-self: start;
    img {
      width: 1rem;
      //   height: .5rem;
    }
    .store-inf {
      flex: 1;
    }
  }
}
</style>