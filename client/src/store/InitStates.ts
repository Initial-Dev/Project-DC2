import { Store } from "@/store/configStore.ts";
import { FetchCart } from "@/store/Cart/CartSlice.tsx";

export const initState = (store: Store) => {
  store.dispatch(FetchCart());
};
