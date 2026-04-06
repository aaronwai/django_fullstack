import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;
