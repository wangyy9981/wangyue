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
};
</script>

<style lang="scss" scoped>
</style>