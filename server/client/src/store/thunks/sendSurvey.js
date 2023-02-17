import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const sendSurvey = createAsyncThunk('user/survey', async (formValues) => {
  const response = await axios.post('/api/surveys', formValues);
  return response.data;
});

export { sendSurvey };
