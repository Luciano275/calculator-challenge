import { createSlice } from "@reduxjs/toolkit";

interface INITIAL_STATE_INTERFACE {
  screen: string;
}

type payloadInterface = {
  payload: string;
};

const initial_state: INITIAL_STATE_INTERFACE = {
  screen: "",
};

export const reduxSlice = createSlice({
  name: "screen",
  initialState: initial_state,
  reducers: {
    changeScreen: (state, action: payloadInterface) => {
      state.screen += action.payload;
    },
    deleteScreen: (state, action) => {
      state.screen = state.screen.slice(0, -1);
    },
    clearScreen: (state, action) => {
      state.screen = initial_state.screen;
    },
  },
});

export const { changeScreen, deleteScreen, clearScreen } = reduxSlice.actions;
export default reduxSlice.reducer;
