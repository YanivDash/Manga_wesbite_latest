import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MangaCard from "../home/MangaCard";
import { useEffect, useState } from "react";

const Searched = () => {
  const location = useLocation();
  const mangas = useSelector((state) => state.allManga);
  const receivedData = location.state?.data;
  let data = mangas.allMangas;
  let searchedData = [];

  data.forEach((element) => {
    let searchString = receivedData.toLowerCase();
    let dataString = element.mangaName.toLowerCase();
    if (dataString.includes(searchString)) {
      searchedData.push(element);
    }
  });

  return (
    <div className='home_container'>
      <div className='home_manga_container'>
        {searchedData.length > 0 ? (
          searchedData.map((item, index) => {
            return <MangaCard key={index} data={item} />;
          })
        ) : (
          <h3>nothing to show here</h3>
        )}
      </div>
    </div>
  );
};

export default Searched;
