import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  photo: "",
  email: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.name = null;
      state.photo = null;
      state.email = null;
    },
  },
});

export const { getUserData, resetUser } = userSlice.actions;
export default userSlice.reducer;
