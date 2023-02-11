import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const handleToken = createAsyncThunk('user/token', async (token) => {
  const response = await axios.post('/api/stripe', token);

  return response.data;
});

export { handleToken };
