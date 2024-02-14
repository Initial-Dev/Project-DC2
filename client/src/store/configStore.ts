import { AuthSlice } from "@/store/Authentication";
import { CartSlice } from "@/store/Cart";
import { ProductsSlice } from "@/store/Products";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: CartSlice,
    products: ProductsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
