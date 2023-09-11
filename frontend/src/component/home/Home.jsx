import { useState } from "react";
import MangaCard from "./MangaCard";
import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const mangas = useSelector((state) => state.allManga);

  let data = mangas.allMangas;
  if (!data) setLoading(true);

  return (
    <div className='home_container'>
      <Banner />
      <div className='home_manga_container'>
        {loading ? (
          <h3>Loading...</h3>
        ) : data.length > 0 ? (
          data.map((item, index) => {
            return <MangaCard key={index} data={item} />;
          })
        ) : (
          <h3>nothing to show here</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
