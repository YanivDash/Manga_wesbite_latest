import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbarCss/navbar.css";
import { RiLightbulbFlashLine, RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [light, setLight] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleInput = () => {
    navigate("/searched", { state: { data: input } });
  };

  return (
    <div className='navbar_container navbar_icons'>
      {" "}
      <div className='navbar_links_container'>
        <div className='navbar_manga'>
          <IoIosArrowDroprightCircle
            onClick={() => setMobileMenu(!mobileMenu)}
            className={
              mobileMenu
                ? "navbar_icon_inverted navbar_menu_slide navbar_icons"
                : "navbar_icon_simple navbar_menu_slide navbar_icons"
            }
          />
          <ul className='navbar_manga_lists'>
            <Link to='/'>
              <li className='navbar_manga_item'>Home</li>
            </Link>
            <Link to='/mostViewed'>
              <li className='navbar_manga_item'>Most-Viewed</li>
            </Link>
            <Link to='/latest'>
              <li className='navbar_manga_item'>Latest</li>
            </Link>
          </ul>
        </div>
        <div className='navbar_right'>
          <div>
            <div className='navbar_search'>
              <input
                required
                type='text'
                placeholder='Enter manga name'
                name='searchInput'
                onChange={(e) => setInput(e.target.value)}
              />
              <p>
                <IoSearchSharp
                  onClick={() => {
                    console.log(search);
                    if (input) {
                      handleInput();
                    }
                    if (search) {
                      console.log(
                        document.getElementById("small_screen_input")
                      );
                      document.getElementById("small_screen_input").focus();
                    }

                    setSearch(!search);
                  }}
                  className='navbar_icons'
                />
              </p>
            </div>
          </div>
          <p
            className={light ? "navbar_light" : undefined}
            onClick={() => setLight(!light)}
          >
            {" "}
            {light ? (
              <RiLightbulbFlashFill className='navbar_none navbar_icons navbar_glowing' />
            ) : (
              <RiLightbulbFlashLine className='navbar_none navbar_icons' />
            )}
          </p>
        </div>
      </div>
      {search ? (
        <input
          id='small_screen_input'
          className='navbar_search_input'
          type='text'
          placeholder='enter manga...'
          onChange={(e) => setInput(e.target.value)}
        />
      ) : undefined}
      <div
        className={
          mobileMenu
            ? "navbar_mobile_show navbar_mobile"
            : "navbar_mobile_hide navbar_mobile"
        }
      >
        <div className='navbar_mobile_manga'>
          <div className='navbar_mobile_left_inks'>
            <ul className='navbar_mobile_manga_lists'>
              <br />
              <Link to='/'>
                <li className='navbar_mobile_manga_item'>
                  <strong>Home</strong>
                </li>
              </Link>
              <hr />
              <Link to='/mostViewed'>
                <li className='navbar_mobile_manga_item'>Most-Viewed</li>
              </Link>
              <Link to='/latest'>
                <li className='navbar_mobile_manga_item'>Latest</li>
              </Link>
            </ul>
          </div>
          <div className='nvabar_mobile_manga_type'>
            <h3>Type :</h3>
            <br />
            <hr />
            <ul className='navbar_mobile_manga_type'>
              <li className='navbar_mobile_manga_item'>Manga</li>
              <li className='navbar_mobile_manga_item'>Manwha</li>
              <li className='navbar_mobile_manga_item'>Manhua</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
