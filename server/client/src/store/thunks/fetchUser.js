import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUser = createAsyncThunk('user/fetch', async () => {
  const response = await axios.get('/api/current-user');

  return response.data || false;
});

export { fetchUser };
