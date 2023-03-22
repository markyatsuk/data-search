import { createSlice } from "@reduxjs/toolkit";
import usersOperations from "./browse-operations";

export const usersSlice = createSlice({
  name: "accounts",
  initialState: {
    wallet: {
      accounts: [],
    },
  },
  extraReducers: {
    [usersOperations.getUsers.fulfilled](state, { payload }) {
      state.wallet.accounts = payload.transactions[1]?.total ?? 0;
    },
    [usersOperations.getUsers.rejected](state, { payload }) {
      state.wallet.accounts = state;
    },
  },
});

export default usersSlice.reducer;
