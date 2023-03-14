import { configureStore } from "@reduxjs/toolkit";
import moiveSlice from "./slices/moviesSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moiveSlice,
  },
});

export default store;
