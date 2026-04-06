import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;
