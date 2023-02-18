import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/authSlice';
import { surveyReducer } from './slices/surveySlice';

import { reducer as formReducer } from 'redux-form';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    survey: surveyReducer,
  },
});

export * from './thunks/fetchUser';
export * from './thunks/sendSurvey';
export * from './thunks/fetchSurveys';
