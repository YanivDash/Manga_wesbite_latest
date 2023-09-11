// import React from "react";
import { Link } from "react-router-dom";
import "./mangaCard.css";
import incrementView from "../../../apiCall/incrementView";

const ExMangaCard = (manga) => {
  const { id, mangaName, mangaCover, totalChapter, totalViews } = manga.data;

  return (
    <div id={id} className='manga_card_container'>
      <Link
        to={`/manga/${id}`}
        onClick={() => {
          incrementView({ id: id, totalViews: totalViews });
        }}
      >
        <div className='cover_name_conatiner'>
          <img src={mangaCover} alt={mangaName} className='manga_cover' />
          <div className='manga_name'>
            <p className='manga_name_text'>{mangaName}</p>
          </div>
        </div>
      </Link>

      <Link to={`/manga/${id}/${totalChapter}`}>
        <button className='btnChapter'>chapter {totalChapter}</button>
      </Link>
      <Link to={`/manga/${id}/${totalChapter - 1}`}>
        <button className='btnChapter'>chapter {totalChapter - 1}</button>
      </Link>
    </div>
  );
};

export default ExMangaCard;
