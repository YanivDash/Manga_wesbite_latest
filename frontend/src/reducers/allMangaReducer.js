import { createSlice } from "@reduxjs/toolkit";

const allMangaSlice = createSlice({
  name: "allManga",
  initialState: {
    allMangas: [],
  },
  reducers: {
    allMangaAdd(state, action) {
      state.allMangas = action.payload;
    },
  },
});

export const allMangaReducer = allMangaSlice.reducer;

export const { allMangaAdd } = allMangaSlice.actions;
