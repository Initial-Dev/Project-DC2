import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllItemsInCart } from "@/services";
import { _CartItem } from "@/types";

const initialState: {
  items: Array<_CartItem>;
  status: string;
} = {
  items: [],
  status: "idle",
};

export const FetchCart = createAsyncThunk("/cart", async () => {
  const response = await getAllItemsInCart();
  return await response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.itemId !== action.payload,
      );
    },
    removeOneAmountFromItem: (state, action) => {
      const item = state.items.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});

export default cartSlice.reducer;
