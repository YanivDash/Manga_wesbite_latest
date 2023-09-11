import "../../styles/subheaderCss/subHeader.css";
import { BiGlassesAlt } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { TbBulbFilled } from "react-icons/tb";
import { RiUserFollowFill } from "react-icons/ri";
import { useState } from "react";

const SubHeader = () => {
  const [light, setLight] = useState(true);

  return (
    <div className='subHeader_container'>
      <div className='subHeader_left_links'>
        <a href=''>
          <p>
            <span className='subHeader_icons'>
              <BiGlassesAlt />{" "}
            </span>
            Read Random
          </p>
        </a>
        <a href=''>
          <p>
            <span className='subHeader_icons'>
              <SiBuymeacoffee />{" "}
            </span>
            Donate us
          </p>
        </a>
      </div>
      <div className='subHeader_right_links'>
        <p>
          <span className='subHeader_icons'>
            <RiUserFollowFill />{" "}
          </span>
          <strong>Follow us :</strong>
        </p>
        <a href=''>
          <p>
            {" "}
            <span className='subHeader_icons'>
              <AiFillTwitterCircle />{" "}
            </span>
            Twiter
          </p>
        </a>
        <a href=''>
          <p>
            {" "}
            <span className='subHeader_icons'>
              <SiDiscord />{" "}
            </span>
            Discord{" "}
          </p>
        </a>
        <a href=''>
          <p>
            <span className='subHeader_icons'>
              <AiFillInstagram />{" "}
            </span>
            Instagram{" "}
          </p>
        </a>
      </div>
      <div className='subHeader_Light_control'>
        <p onClick={() => setLight(!light)}>
          {" "}
          <span className='subHeader_icons'>
            <TbBulbFilled />{" "}
          </span>
          {light ? "Dark" : "Light"} mode
        </p>
      </div>
    </div>
  );
};

export default SubHeader;
