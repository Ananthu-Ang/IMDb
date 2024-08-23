import React, { useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../Components/ImdbRoot.css";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function ImdbRoot() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Totaldiv">
      <div className="Headerdiv">
        <nav className="navbar">
          <div className="logo">
            <Link to={"/home"}>
              <LiaImdb className="imdb-logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="dropdown">
              <Link to={"/menu"}>Menu</Link>
              <div className="dropdown-content">
                <Link to={"/movies"}>Movies</Link>
                <Link to={"/tvshows"}>TV Shows</Link>
                <Link to={"/awards"}>Awards</Link>
              </div>
            </li>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search Here..."
                className="search-input"
              />
              <CiSearch className="searchicon" />

              <div className="search-dropdown">
                <Link to={"/all"}>All</Link>
                <Link to={"/titles"}>Titles</Link>
                <Link to={"/tvshows"}>TV Shows</Link>
                <Link to={"/celebs"}>Celebs</Link>
                <Link to={"/companies"}>Companies</Link>
              </div>
            </div>

            <li>
              <Link to={"/imdbpro"}>IMDbPro</Link>
            </li>
            <li>
              <Link to={"/watchlist"}>Watchlist</Link>
            </li>

            <li>
              <Link to={"/signin"}>SignIn</Link>
            </li>
            <li className="dropdown">
              <Link to={"/menu"}>
                EN <MdOutlineArrowDropDown />
              </Link>
              <div className="dropdown-content">
                <Link to={"/spanish"}>español</Link>
                <Link to={"/portugese"}>português</Link>
                <Link to={"/hindi"}>हिंदी</Link>
                <Link to={"/french"}>français</Link>
                <Link to={"/italy"}>italiano</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Body Part */}
      <div className="BodyDiv">
        <div className="carouseldiv">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Link to="/premalu-trailer">
                <img
                  className="preamaluimg"
                  src="Images/premalu.jpg"
                  alt="Premalu"
                  style={{ height: "70%", width: "90%" }}
                />
                <div className="carousel-caption-hover">
                  <h3>Premalu 2024 (2h 36m) </h3>
                  <p className="hoverP">Comedy/Romance</p>
                  <p className="hoverP">Language:Malayalam</p>

                  <p className="hoverP">Click to watch the Trailer</p>
                </div>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to="/kill-trailer">
                <img
                  className="Killimg"
                  src="Images/Kill.avif"
                  alt="Kill"
                  style={{ height: "70%", width: "90%" }}
                />
                <div className="carousel-caption-hover">
                  <h3>Kill 2023 (1h 45m) </h3>
                  <p className="hoverP">Action/Thriller</p>
                  <p className="hoverP">Language:Hindi</p>

                  <p className="hoverP">Click to watch the Trailer</p>
                </div>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to="/maharaja-trailer">
                <img
                  className="maharajaimg"
                  src="Images/maharaja.jpeg"
                  alt="Maharaja"
                  style={{ height: "70%", width: "90%" }}
                />
                <div className="carousel-caption-hover">
                  <h3>Maharaja 2024 (2h 21m) </h3>
                  <p className="hoverP">Action/Thriller</p>
                  <p className="hoverP">Language:Tamil</p>

                  <p className="hoverP">Click to watch the Trailer</p>
                </div>
              </Link>
            </Carousel.Item>
          </Carousel>
        </div>

        {/*Top 10 trending*/}

        <div className="trndingmlylm">
          <div className="top10items">
            <h1 className="top10heading">Top 10 on IMDb this week</h1>
            <div className="movies-container">
              <div class="movie1" style={{ width: "20rem" }}>
                <img
                  style={{ width: "18rem" }}
                  src="Images/deadpool.avif"
                  alt="Deadpool"
                  class="deadpool"
                />
                <h4 class="titlecard">Deadpool & Wolverine</h4>
                <button class="wtchnowbtn">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink" href="#">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie2" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem" }}
                  src="Images/HOD.jpg"
                  alt="HOD"
                  class="HouseofD"
                />
                <h4 class="titlecard2">House of Dragons</h4>
                <button class="wtchnowbtn2">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie3" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem" }}
                  src="Images/GOT.jpg"
                  alt="HOD"
                  class="GameofT"
                />
                <h4 class="titlecards3">Game of Thrones</h4>
                <button class="wtchnowbtn3">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie4" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem", height: "24rem" }}
                  src="Images/theBoys.jpg"
                  alt="TBoys"
                  class="TBoys"
                />
                <h4 class="titlecards4">The Boys</h4>
                <button class="wtchnowbtn4">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie5" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem", height: "24rem" }}
                  src="Images/From.jpg"
                  alt="FROM"
                  class="From"
                />
                <h4 class="titlecards5">From</h4>
                <button class="wtchnowbtn5">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*Trending Malayalam*/}
        <div className="top10">
          <div className="top10items">
            <h1 className="top10heading">Trending Malayalam Movies</h1>
            <div className="movies-container">
              <div class="movie1" style={{ width: "20rem" }}>
                <img
                  style={{ width: "16rem" }}
                  src="Images/aadujeevitham.jpg"
                  alt="GOAT Life"
                  class="GOT"
                />
                <h4 class="titlecardGOT">The GOAT Life</h4>
                <button class="wtchnowbtn">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink" href="#">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie2" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem" }}
                  src="Images/manjummelboys2.jpg"
                  alt="MB"
                  class="Mboys"
                />
                <h4 class="titlecard2">Manjummel Boys</h4>
                <button class="wtchnowbtn2">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie3" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem" }}
                  src="Images/golam.jpg"
                  alt="HOD"
                  class="Golam"
                />
                <h4 class="titlecardsG">Golam</h4>
                <button class="wtchnowbtn3">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie4" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem", height: "24rem" }}
                  src="Images/turbo.jpg"
                  alt="TBoys"
                  class="Turbo"
                />
                <h4 class="titlecardsT4">Turbo</h4>
                <button class="wtchnowbtn4">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
              <div class="movie5" style={{ width: "18rem" }}>
                <img
                  style={{ width: "16rem", height: "24rem" }}
                  src="Images/VS.jpg"
                  alt="FROM"
                  class="VS"
                />
                <h4 class="titlecardsVS5">Varshangalkku Shesham</h4>
                <button class="wtchnowbtn5">Watch Options</button>
                <br />
                <br />
                <Link class="trainerlink">
                  <FaCirclePlay />
                  Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Part */}
      <div className="Footerdiv">
        <div className="socialmd">
          <p>Follow Us On</p>
          <div className="icondiv">
            <FaTwitter /> <FaFacebook /> <BsInstagram /> <FaYoutube />{" "}
            <FaTiktok />
          </div>
        </div>
        <div className="frstline">
          <Link to={"/help"}>
            Help <LuArrowUpRight />
          </Link>
          <Link to={"/siteindex"}>
            Site Index <LuArrowUpRight />
          </Link>
          <Link to={"/imdbPro"}>
            IMDbPro <LuArrowUpRight />
          </Link>
          <Link to={"/boxoffcmojo"}>
            Box office Mojo <LuArrowUpRight />
          </Link>
          <Link to={"/license"}>
            License IMDb Data <LuArrowUpRight />
          </Link>
        </div>
        <div className="scndline">
          <Link to={"/prssroom"}>Press Room </Link>
          <Link to={"/ads"}>
            Advertising <LuArrowUpRight />
          </Link>
          <Link to={"/jobs"}>
            Jobs <LuArrowUpRight />
          </Link>
          <Link to={"/conditionuse"}>Condition of Use </Link>
          <Link to={"/privcyplcy"}>Privacy Policy </Link>
        </div>
        <div className="footerlastpart">
          <p>
            An <FaAmazon /> Company
          </p>
          <p>
            <FaRegCopyright /> 1990-2024 by IMDb.com, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImdbRoot;
