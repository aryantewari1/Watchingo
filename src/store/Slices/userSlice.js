import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isSignUp: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setSignUp: (state, action) => {
      state.isSignUp = action.payload;
    },
  },
});

export const { addUser, removeUser, setSignUp } = userSlice.actions;
export default userSlice.reducer;
