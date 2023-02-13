import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/authSlice';

import { reducer as formReducer } from 'redux-form';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});

export * from './thunks/fetchUser';
