<template>
  <div>
    <div class="store-List">
      <h3 class="store-title">附近商家</h3>
      <div class="List">
        <ul class="store-box">
          <li class="store-li" v-for="obj in storeList" :key="obj.id"
           @click="$router.push({path:'/detail',query:{id:obj.id}})"
           >
            <img :src="obj.img" />
            <div class="store-inf">
              <p class="sto-name">{{ obj.name }}</p>
              <p>
                <Star class="star-box" :num="parseFloat(obj.score)"></Star>
                {{ obj.score }}分 <span class="sell">月售{{ obj.num }}</span>
                <span class="minute">{{ obj.minute }}分钟</span>
              </p>

              <p class="inf-center">
                <span class="distance">{{ obj.distance }}</span>
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
    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" >
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star";

export default {
  data() {
    return {
      storeList: [],
      pageNum: 0,
      isShow:true,
      isFinish:false
    };
  },
  components: {
    Star,
  },
  methods: {
    getStorelist() {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10"
        )
        .then((res) => {
          // console.log(res);
          let result = res.data;
          if (result.errcode == 200) {
            // this.storeList = result.data.list;
            this.storeList = [...this.storeList, ...result.data.list];
            this.pageNum++;
            this.isShow=false;
            // console.log(result.data.total);
            // console.log(this.storeList);
            // console.log(this.storeList.length);
            if(this.storeList.length>=result.data.total){
              this.isFinish=true;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStorelist();
    window.onscroll = () => {
      let scrollTtop = document.documentElement.scrollTop; // 获滚动条滚动高度
      let clientHeight = document.documentElement.clientHeight; //可视区高度
      let scrollHeight = document.documentElement.scrollHeight; //整个页面的高度
      // console.log(scrollTtop, clientHeight, scrollHeight);
      if (Math.ceil(scrollTtop) + clientHeight >= scrollHeight && !this.isFinish) {
        this.isShow=true;
        this.getStorelist();
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.store-List {
  h3 {
    text-align: center;
    font-size: .7px;
    margin: 10px 0;
  }
  .store-title::after,
  .store-title::before {
    content: "";
    display: inline-block;
    width: 1.3rem;
    height: 1px;
    background: #666;
    vertical-align: middle;
    transform: scaleY(0.5);
  }
  .store-li {
    display: flex;
    justify-self: start;
    padding-right: 0.4rem;
    margin-bottom: .1rem;
    img {
      width: 1.4rem;
      margin: 0 .2rem .2rem .2rem;
    }
    .store-inf {
      flex: 1;
      .sto-name {
        font-size: 0.25rem;
        margin-bottom: .1rem;
      }
      p {
        font-size: 11px;
      }
      .inf-center {
        display: block;
        margin: 5px 0;
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
      .star-box {
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
.loading{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width:1.4rem;
  height:1.4rem;
}
</style>