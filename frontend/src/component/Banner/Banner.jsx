import { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

// import "./banner.css";
import "../../styles/bannerCss/banner.css";
const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const data = [
    {
      mangaCover:
        " https://w5.secondliferanker.com/wp-content/uploads/2020/03/Second-Life-Ranker-Manhwa.jpg",
      mangaName: "Second Life Ranker - Ranker who lives a second time",
      TotalChapter: 161,
    },
    {
      mangaCover:
        "https://toonily.net/wp-content/uploads/2021/06/e2f6a4008222723e6937df3013cde13a-209x300.png",
      mangaName: "The Heavenly Demon Can't Live a Normal Life",
      TotalChapter: 80,
    },
    {
      mangaCover:
        "https://toonily.net/wp-content/uploads/2021/02/fist-demon-of-mount-hua-193x278.jpg",
      mangaName: "Fist Demon of Mount Hua",
      TotalChapter: 145,
    },
  ];

  const { mangaCover, mangaName, TotalChapter } = data[currentBanner];

  return (
    <div key={currentBanner} className='banner_container'>
      <div className='banner_blur_img'>
        <img
          className='banner_blur_img_cover'
          src={mangaCover}
          alt={`${mangaCover}`}
        />
        <div className='banner_header'>
          <h1>{mangaName}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laborum optio voluptatibus distinctio nisi ipsum adipisci non quidem
            quas quam perspiciatis...
          </p>
          <div className='banner_button'>
            <div className='banner_read_button '>
              <button className='banner_read_button_read'>Read Now!</button>
              <button className='banner_read_button_chapter'>
                Chapter {TotalChapter}
              </button>
            </div>
          </div>
          <div className='banner_navigate'>
            <IoIosArrowDropleftCircle
              className='banner_navigate_icons'
              onClick={() => {
                currentBanner >= 2
                  ? setCurrentBanner(0)
                  : setCurrentBanner(currentBanner + 1);
              }}
            />
            <IoIosArrowDroprightCircle
              className='banner_navigate_icons'
              onClick={() => {
                currentBanner <= 0
                  ? setCurrentBanner(2)
                  : setCurrentBanner(currentBanner - 1);
              }}
            />
          </div>
        </div>
        <div className='banner_manga_img'>
          <img
            className='banner_manga_img_cover'
            src={mangaCover}
            alt={`${mangaCover}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
