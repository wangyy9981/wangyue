import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prodList: []
  },
  mutations: {
    save(state,list) {
      state.prodList=list;
    },
    add(state,{typeIndex,index}){
      let prods=state.prodList[typeIndex].content[index];
      if(prods.count){
        Vue.set(prods, 'count', prods.count + 1)
      }
      else{
        Vue.set(prods, 'count', 1)
      }
    },
    reduce(state,{typeIndex,index}){
      let prods=state.prodList[typeIndex].content[index];
        Vue.set(prods, 'count', prods.count - 1)
    }
  },
  getters:{
    total(state){
      let sum=0;
      let sumPrice=0;
      state.prodList.forEach((element) => {
        element.content.forEach((prod)=>{
          if(prod.count>0){
            sum+=prod.count;
            sumPrice+=prod.count*prod.price;
          }
        })
      });
      return {sum,sumPrice};
    }
  },
  actions: {},
  modules: {}
})
