export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload新添加的商品
      let oldProduct = null

      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }

      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve("当前数量+1")
      } else {
        payload.count = 1
        // context.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve("添加了新的商品")
      }
    })
  }
}
