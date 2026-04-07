import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
  userLogin: {
    userInfo: userInfoFromStorage, // 给 userLogin reducer 赋值
  }
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,

  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;
