import { createSlice } from '@reduxjs/toolkit';

import { fetchSurveys } from '../thunks/fetchSurveys';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    data: [],
    isLoading: false,
    error: false,
  },
  extraReducers(builder) {
    builder.addCase(fetchSurveys.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSurveys.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSurveys.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const surveyReducer = surveySlice.reducer;
