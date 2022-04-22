import Vue from "vue";
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  // 抽
  // state: {
  //   cartList: []
  // },
  mutations,
  actions


  // 封装
  // mutations: {
  //   // mutations 唯一的目的就是修改state中的状态
  //   // mutatios中的每个方法尽可能完成的事件比较单一一点
  //   // 下面完成了数量+1或者添加新数据，两个都叫addCart，无法区别是做了+1操作还是添加新商品操作
  //   // 用actions

  //   // addCart(state, payload) {
  //   //   // payload新添加的商品
  //   //   let oldProduct = null

  //   //   for (let item of state.cartList) {
  //   //     if (item.iid === payload.iid) {
  //   //       oldProduct = item
  //   //     }
  //   //   }

  //   //   if (oldProduct) {
  //   //     oldProduct.count += 1
  //   //   } else {
  //   //     payload.count = 1
  //   //     state.cartList.push(payload)
  //   //   }
  //   // }

  //   // 拆成两个
  //   addCounter(state, payload) {
  //     payload.count++
  //   },
  //   addToCart(state, payload) {
  //     state.cartList.push(payload)
  //   }
  // },
  // actions: {
  //   addCart(context, payload) {
  //     // payload新添加的商品
  //     let oldProduct = null

  //     for (let item of context.state.cartList) {
  //       if (item.iid === payload.iid) {
  //         oldProduct = item
  //       }
  //     }

  //     if (oldProduct) {
  //       // oldProduct.count += 1
  //       context.commit('addCounter', oldProduct)
  //     } else {
  //       payload.count = 1
  //       // context.cartList.push(payload)
  //       context.commit('addToCart', payload)
  //     }
  //   }
  // }
})

// 3.挂载Vue实例上
export default store
