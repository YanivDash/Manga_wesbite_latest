import { createSlice } from "@reduxjs/toolkit";

const chapterImgSlice = createSlice({
  name: "chapterImg",
  initialState: {
    chapterImg: [],
  },
  reducers: {
    addChapterImg(state, action) {
      state.chapterImg = action.payload;
    },
  },
});

export const chapterImgSliceReducer = chapterImgSlice.reducer;

export const { addChapterImg } = chapterImgSlice.actions;
