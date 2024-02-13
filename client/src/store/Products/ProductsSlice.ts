import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "@/services";

const initialState = {
  products: [],
  status: "idle",
};

export const FetchProducts = createAsyncThunk("/products", async () => {
  const response = await getAllProducts();
  return await response.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
