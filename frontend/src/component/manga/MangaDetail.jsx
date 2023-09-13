import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/mangaDetailsCss/mangaDetails.css";

const MangaDetail = () => {
  let urlParams = useParams();
  let urlId = urlParams.id;
  window.scroll(0, 0);
  const mangas = useSelector((state) => state.allManga);
  let data = mangas.allMangas;

  const mangaDetails = data.find((item) => {
    if (item.id == urlId) return item;
  });

  if (mangaDetails) {
    const { mangaCover, mangaName, totalChapter } = mangaDetails;
    const chapters = [];
    let allChapters = totalChapter;
    while (allChapters >= 1) {
      chapters.push(allChapters);
      allChapters = allChapters - 1;
    }

    return (
      <div className='mangaDetails_container'>
        <div className='mangaDetails_header'>
          <img src={mangaCover} alt='mangaCover' />
          <div className='detailHeading'>
            <h1>{mangaName}</h1>
            <div className='detailChapterBtn'>
              <Link to={`/manga/${urlId}/${1}`}>
                <p>Read Now</p>
              </Link>
              <Link to={`/manga/${urlId}/${totalChapter}`}>
                <p>Read Latest</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='detailChapters'>
          <h1>Chapter List</h1>
          <div className='chapterList_cotainer'>
            {chapters.map((item, index) => {
              return (
                <Link key={index} to={`/manga/${urlId}/${item}`}>
                  <h2>chapter {item}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <h1>hello</h1>;
};

export default MangaDetail;
