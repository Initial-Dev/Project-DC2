import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Louis Bellefemine",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
