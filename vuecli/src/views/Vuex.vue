<template>
  <div>
    vue
    <!-- {{$store.state.count}} -->
    {{ count }}
    <button @click="$store.commit('add', 1)">add+1</button>
    <button @click="add(6)">add+6</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["add"]),
  },
  created(){
    // 立即调用action中的getMovie函数
    this.$store.dispatch('getMovie');
  }
};
</script>

<style lang="scss" scoped>
</style>