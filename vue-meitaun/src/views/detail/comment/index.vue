<template>
  <div>
    <!-- header -->
    <commentHead :list="list"></commentHead>
    <!-- list -->
    <commentList :list="list" @update="change"></commentList>
  </div>
</template>

<script>
import commentHead from "./commentHead";
import commentList from "./commentList";
import axios from "axios";

export default {
  data(){
    return{
      list:{}
    }
  },
  components: {
    commentHead,
    commentList
  },
  methods:{
    getComment(typeId){
      axios.get("http://admin.gxxmglzx.com/tender/test/get_info?id="+this.$route.query.id+"&type="+typeId)
      .then((res)=>{
        this.list=res.data.data;
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    change(id){
      this.getComment(id);
    }
  },
  created(){
    this.getComment(1);
  }
};
</script>

<style lang="scss" scoped>
</style>