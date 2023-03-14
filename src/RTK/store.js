import { configureStore } from "@reduxjs/toolkit";
import moiveSlice from "../../../movies-app/src/RTK/slices/moiveSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moiveSlice,
  },
});

export default store;
