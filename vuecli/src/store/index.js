import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    list:[]
  },
  mutations: {
    add(state,num){
      state.count+=num;
    },
    addList(state,arr){
      state.list=arr;
    }
  },
  actions: {
    getMovie({commit}){
      console.log('调用了');
      axios.get('https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a')
      .then((res)=>{
        console.log('成功了');
        // 通过 commit 调用 mutations 中的 addlist函数给 state中的list数组赋值
        commit('addList',res.data.subject_collection_items);
      })
      .catch((error)=>{
        console.log('失败了');
      })
    }
  },
  modules: {
  }
})
