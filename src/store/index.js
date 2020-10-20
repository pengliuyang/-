import Vue from 'vue'
import Vuex from 'vuex'
import { returnColumn } from "@/apis/request.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:sessionStorage.getItem('id'),
    name:"",
    bottomcolumnid:0,
    bgImgUrl:'',
    columnmessage:{
      id:"",
      english:'',
      columnName:"",
      data:[],
      showType:'',
      styleType:"",
      total:"",
      bgImgUrl:""
    }
  },
  mutations: {
    increment (state,payload) {
      // 变更状态
      state.columnmessage.bgImgUrl=payload.bgImgUrl;
    }
  },
  actions: {
    increment (context) {
      returnColumn().then(res=>{
        context.commit({
          type: 'increment',
          amount: res[0].bgImgUrl
        })
        console.log('state',res[0].bgImgUrl)
      })
     
    }
  },
  modules: {
  }
})
