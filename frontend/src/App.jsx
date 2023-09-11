import {
  Home,
  CreateManga,
  MangaDetail,
  Navbar,
  SubHeader,
  MangaChapter,
  MostViewed,
  Login,
} from "./component";
import { Routes, Route, useLocation } from "react-router-dom";
import { fetchManga } from "../apiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allMangaAdd } from "./reducers/allMangaReducer";
import "./styles/appCss/app.css";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const manga = await fetchManga();
        dispatch(allMangaAdd(manga.data.result));
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {location.pathname != "/" && <Navbar />}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <SubHeader />
              <Navbar />
              <Home />
            </>
          }
        />
        <Route exact path='/mostViewed' element={<MostViewed />} />
        <Route exact path='/manga/:id' element={<MangaDetail />} />
        <Route exact path='/manga/:id/:chapter' element={<MangaChapter />} />
        <Route exact path='/createManga' element={<CreateManga />} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
