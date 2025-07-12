import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../../data/productsData";

const initialState = {
  allProducts: productsData,
  products: [...productsData],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const lastProduct = state.allProducts[state.allProducts.length - 1] || {
        id: 0,
      };

      const newProduct = {
        id: lastProduct.id + 1,
        ...action.payload,
      };

      state.allProducts.push(newProduct);
      state.products.push(newProduct);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
