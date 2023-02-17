import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from '../thunks/fetchUser';
import { handleToken } from '../thunks/handleToken';
import { sendSurvey } from '../thunks/sendSurvey';

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

    builder.addCase(handleToken.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(handleToken.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(handleToken.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(sendSurvey.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(sendSurvey.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.credits = action.payload.credits;
    });
    builder.addCase(sendSurvey.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const authReducer = authSlice.reducer;
