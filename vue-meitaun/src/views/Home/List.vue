<template>
  <div>
    <div class="store-List">
      <h2 class="store-title">附近商家</h2>
      <div class="List">
        <ul class="store-box">
          <li class="store-li" v-for="obj in storeList" :key="obj.id">
            <img :src="obj.img" />
            <div class="store-inf">
              <p class="sto-name">{{ obj.name }}</p>
              <p class="">
                <Star class="star-box" num="3"></Star>  月销 <span class="minute">{{ obj.minute }}分钟</span>
              </p>

              <p class="">
                {{ obj.num }} <span class="distance">{{ obj.distance }}</span>
              </p>
              <p>
                <span>起送{{ obj.per_capita }}</span
                ><span class="i"></span> <span>配送{{ obj.fee }} </span
                ><span class="i"></span><span>人均{{ obj.price }}</span>
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
import Star from '@/components/Star' 

export default {
  data() {
    return {
      storeList: [],
    };
  },
  components:{
        Star
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
    padding-right: 0.4rem;
    img {
      width: 1.52rem;
      margin: 10px;
      //   height: .5rem;
    }
    .store-inf {
      flex: 1;
      .sto-name {
        font-size: 0.25rem;
      }
      .minute,
      .distance {
        float: right;
      }
      .minute::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 5px;
        border: 1px solid black;
        transform: scalex(0.5);
        margin-left: 3px;
      }
      .star-box{
        display: inline-block;
      }
      .i {
        display: inline-block;
        width: 1px;
        height: 7px;
        border: 1px solid black;
        transform: scalex(0.5);
        margin: 0 4px;
      }
    }
  }
}
</style>