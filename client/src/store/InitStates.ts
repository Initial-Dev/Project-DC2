import { Store } from "@/store/configStore.ts";
import { FetchCart } from "@/store/Cart/CartSlice.ts";
import { FetchProducts } from "@/store/Products/ProductsSlice.ts";

export const initState = (store: Store) => {
  store.dispatch(FetchCart());
  store.dispatch(FetchProducts());
};
