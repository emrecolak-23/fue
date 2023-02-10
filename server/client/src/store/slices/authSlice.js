import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from '../thunks/fetchUser';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const authReducer = authSlice.reducer;
