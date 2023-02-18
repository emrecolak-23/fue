import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const fetchSurveys = createAsyncThunk('surveys/fetch', async () => {
  const res = await axios.get('/api/surveys');

  return res.data.reverse();
});

export { fetchSurveys };
