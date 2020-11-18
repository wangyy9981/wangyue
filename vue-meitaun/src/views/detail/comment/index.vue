<template>
  <div>
    <div class="s-wrapper">
      <div>
        <!-- header -->
        <commentHead :list="list"></commentHead>
        <!-- list -->
        <commentList :list="list" @update="change"></commentList>
      </div>
    </div>
  </div>
</template>

<script>
import commentHead from "./commentHead";
import commentList from "./commentList";
import BetterScroll from "better-scroll";
import axios from "axios";

export default {
  data() {
    return {
      list: {},
    };
  },
  components: {
    commentHead,
    commentList,
  },
  methods: {
    getComment(typeId) {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_info?id=" +
            this.$route.query.id +
            "&type=" +
            typeId
        )
        .then((res) => {
          this.list = res.data.data;
          this.$nextTick(() => {
            let be = new BetterScroll(".s-wrapper", {
              click: true,
              bounce: false,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    change(id) {
      this.getComment(id);
    },
  },
  created() {
    this.getComment(1);
  },
};
</script>

<style lang="scss" scoped>
.s-wrapper {
  height: calc(100vh - 44px) ;
}
</style>