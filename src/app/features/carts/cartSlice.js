import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.value.find(
        (product) => product.productId === action.payload.id
      );
      if (existingProduct) {
        alert("already added");
      } else {
        state.value.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.value.find((product) => product.id === productId);
      if (product && product.quantity < 10) {
        product.quantity++;
      }
      return;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.value.find((product) => product.id === productId);

      if (product && product.quantity > 1) {
        product.quantity--;
      }
      return;
    },
    removeFormCart: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFormCart } =
  cartSlice.actions;
export default cartSlice.reducer;
