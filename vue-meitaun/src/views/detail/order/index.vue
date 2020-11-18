<template>
  <div>
    <div class="order-container">
      <div class="cate-box">
        <ul>
          <li
            class="cate-list"
            :class="{ active: index == nowPossition }"
            v-for="(obj, index) in nav"
            :key="obj.id"
            @click="change(index)"
          >
            {{ obj.name }}
          </li>
        </ul>
      </div>
      <div class="pro-box">
        <div class="pro-content">
          <div
            class="prod-cate-box"
            v-for="(obj, typeIndex) in goods"
            :key="typeIndex"
          >
            <h2>{{ obj.name }}</h2>
            <ul>
              <li
                class="pro-li"
                v-for="(prod, index) in obj.content"
                :key="prod.id"
              >
                <img :src="prod.img" />
                <div class="pro-info">
                  <p>{{ prod.name }}</p>
                  <p>
                    <span>月售{{ prod.num }}</span> <span>赞{{ prod.up }}</span>
                  </p>
                  <div>
                    <span>￥{{ prod.price }}</span>
                    <div class="add-box">
                      <span
                        class="choice-reduce"
                        v-show="prod.count > 0"
                        @click="$store.commit('reduce', { typeIndex, index })"
                        >-</span
                      >
                      <span class="choice-count" v-show="prod.count > 0">{{
                        prod.count
                      }}</span>
                      <span
                        class="choice-add"
                        @click="$store.commit('add', { typeIndex, index })"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      nowPossition: 0,
      pos: [], //记录所有分类div的位置prod-cate-box
      scrollY,
    };
  },
  methods: {
    change(index) {
      // 获取到跟index索引对应的 .prod-cate-box
      let prodCateList = document.getElementsByClassName("prod-cate-box");
      // console.log(prodCateList[index]);
      // ele 元素
      this.proScorll.scrollToElement(prodCateList[index]);
      this.nowPossition = index;
    },
    getPos() {
      let Pos = document.getElementsByClassName("prod-cate-box");
      // console.log(Pos)
      for (let i = 0; i < Pos.length; i++) {
        // console.log(i+1+"   :"+Pos[i].offsetTop);
        this.pos.push(Pos[i].offsetTop);
      }
      //  let H = 0 ;
      // for(let j=0; j<Pos.length; j++){
      //   if(j == 0){
      //     console.log(H);
      //   }else{
      //     H += Pos[j-1].offsetHeight;
      //     console.log(H);
      //   }
      // }
      // console.log("sadasdasdasdasdsadsadas");
    },
  },
  watch: {
    scrollY(val) {
      // console.log(val);
      let cateList = document.getElementsByClassName("cate-list");
      for (let i = 0; i < this.pos.length; i++) {
        if (val + 5 >= this.pos[i] && val + 5 < this.pos[i + 1]) {
          this.nowPossition = i;
          this.cateScorll.scrollToElement(cateList[i]);
          break;
        }
      }
    },
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
        this.$store.commit("save", this.goods);
        // console.log(goods);
        this.$nextTick(() => {
          this.cateScorll = new BetterScroll(".cate-box", {
            click: false,
            bounce: false,
          });
          this.proScorll = new BetterScroll(".pro-box", {
            click: false,
            bounce: false,
            probeType: 3,
          });
          this.proScorll.on("scroll", (position) => {
            //获得当前高度
            // console.log(position.x, position.y);
            this.scrollY = Math.abs(position.y);
            // console.log(this.scrollY);
          });
          this.getPos();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  padding-bottom: 50px;
  .cate-box {
    flex: 1;
    height: calc(100vh - 94px);
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
      &.active {
        background-color: #fff;
        color: red;
      }
    }
  }
  .pro-box {
    flex: 3;
    height: calc(100vh - 94px);
    .pro-content {
      position: relative;
    }
    .pro-li {
      padding: 0.1rem 0.1rem 0 0.1rem;
      display: flex;
      img {
        width: 1.5rem;
      }
      .pro-info {
        flex: 1;
      }
      .add-box {
        float: right;
        span {
          display: inline-block;
          text-align: center;
          vertical-align: middle;
        }
        .choice-add,
        .choice-reduce {
          width: 0.3rem;
          font-size: 0.3rem;
          border-radius: 50%;
          color: black;
          background-color: #ffb000;
        }
        .choice-reduce {
          background-color: #f5f5f5;
          border: 1px solid #ffc134;
        }
        .choice-count {
          font-size: 0.3rem;
          margin: 0 0.1rem;
        }
      }
    }
  }
}
</style>