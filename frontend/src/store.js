import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;
