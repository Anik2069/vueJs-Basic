export const storage = {
  state:{
    inventory:[],
    cart:[]
  },
  getters:{
    getInventory(state){
      return state.inventory;
    },
    getCart(state){
      return state.cart;
    }
  },
  mutations : {
    addtocart(state,payload) {
      state.cart.push(payload)
    },
    removeitem(state,payload){
      state.cart.splice(payload,1)
    },
    setInventorty(state,payload){
      state.inventory=payload
    },
    clearcart(state){
      state.cart = []

    }
  }







}
