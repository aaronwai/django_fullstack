import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./reducers/productReducers"; // import
export const store = configureStore({
  reducer: {
      productList: productReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;
