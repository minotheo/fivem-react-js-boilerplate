import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

export const mainSlice = createSlice(
  {
    initialState,
    name: 'mainSlice',
    reducers: {
      setIsVisible: (state, action) => {
        state.isVisible = action.payload;
      },
    },
  },
);

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;