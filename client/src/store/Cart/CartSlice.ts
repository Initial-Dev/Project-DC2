import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllItemsInCart } from "@/services";

const initialState = {
  items: [],
  totalPrice: 0,
  status: "idle",
};

export const FetchCart = createAsyncThunk("/cart", async () => {
  const response = await getAllItemsInCart();
  return await response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(FetchCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
      state.totalPrice = 111.99;
    });
  },
});

export default cartSlice.reducer;
