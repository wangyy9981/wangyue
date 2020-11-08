<template>
  <div class="container">
    <div class="back" @click="$router.go(-1)">&lt;</div>
    <div class="store-info">
      <img class="store-img" :src="Store.img" />
      <div class="store-msg">
        <div class="detail">
          <p><span>{{Store.minute}}</span>分钟  <span>{{Store.distance}}</span> </p>
          {{Store.notice}}
          <p>{{Store.full}}</p>
        </div>
      </div>
    </div>
    <!-- {{ $route.query.id }} -->
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                Store:''
            }
        },
        methods:{
            getStore(){
                axios.get( "http://admin.gxxmglzx.com/tender/test/get_store_id?id="+this.$route.query.id)
                .then((res)=>{
                    this.Store=res.data.data;
                    console.log(this.Store);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
        created(){
            this.getStore();
        }
    }
</script>

<style lang="scss" scoped>
.container {
  background: #2e2f3b;
  color: #fff;
  padding: 0.2rem;
  .back {
    font-size: 20px;
    margin-bottom: 0.2rem;
  }
  .store-info {
    display: flex;
    .store-img {
      width: 1.7rem;
      height: 1.26rem;
    }
    .store-msg {
      flex: 1;
      width: 0; /*不受子元素宽度撑大*/
      .detail {
        margin-left: .1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>