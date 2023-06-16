import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.photos.unshift({id: nanoid(), url: action.payload});
    }
  }
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;