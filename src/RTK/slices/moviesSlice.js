import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "moiveSlice/fetchMoives",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=$17ea84198119ca8fa79af86fc84ae662&page=${page}&language=en-US&vote_count.gte=10`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoivebyID = createAsyncThunk(
  "moiveSlice/fetchMoivebyID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=17ea84198119ca8fa79af86fc84ae662`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  moives: [],
  singalMoive: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.moives = action.payload;
    });
    builder.addCase(fetchMoivebyID.fulfilled, (state, action) => {
      state.singalMoive = action.payload;
    });
  },
});

export default movieSlice.reducer;
