import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalQuantity: 0,
    totalCost: 0,
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
        state.totalCost += Number(existingItem.cost.substring(1));
        // console.log("total Cost: ", state.totalCost)
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
        state.totalCost += Number(cost.substring(1));
        // console.log("total Cost: ", state.totalCost)
      }
      state.totalQuantity++;
      // console.log("total Quantity: ", state.totalQuantity)
    },

    removeItem: (state, action) => {      
      // console.log("remove item: ", action.payload.quantity);
      state.totalQuantity -= action.payload.quantity;
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      //   console.log("update Quantity: ", quantity);
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // console.log("original total Quantity: ", state.totalQuantity)
        const adjustQuantity = quantity - itemToUpdate.quantity;
        state.totalQuantity += adjustQuantity;
        itemToUpdate.quantity = quantity;
        // console.log("updated total Quantity: ", quantity, " ->", state.totalQuantity)
        state.totalCost += Number(itemToUpdate.cost.substring(1)) * adjustQuantity;
        // console.log("total updated Cost: ", state.totalCost)
      }
    },

    clearCart(state) {
      state.totalCost = 0;
      state.totalQuantity = 0;
      state.items = [];
    },

  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
