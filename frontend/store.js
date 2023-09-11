import { configureStore } from "@reduxjs/toolkit";
import { allMangaReducer } from "./src/reducers/allMangaReducer";
import { chapterImgSliceReducer } from "./src/reducers/chapterImgReducer";

export const store = configureStore({
  reducer: {
    allManga: allMangaReducer,
    chapterImg: chapterImgSliceReducer,
  },
});
