<template>
  <div>
    <ul class="nList">
      <li class="list" v-for="obj in cateList" :key="obj.id">
        <img :src="obj.img" />
        <p>{{ obj.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cateList: [],
    };
  },
  methods: {},
  created() {
    axios
      .get("http://admin.gxxmglzx.com/tender/test/get_type")
      .then((res) => {
        console.log(res.data);
        let result = res.data;
        if (result.errcode == 200) {
          this.cateList = result.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.nList {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  .list {
    width: 20%;
    text-align: center;
    margin: 15px 0 0 0;
    box-sizing: border-box;
    p {
      margin-top: 5px;
      font-size: 18px;
    }
  }
}
</style>