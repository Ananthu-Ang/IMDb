import React from "react";
import "../Pages/IMDbHeader.css";
import { LiaImdb } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md"; 



import { Link, Outlet } from "react-router-dom";

function IMDbHeader() {
  return (
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
        <div class="search-container">
          <input
            type="text"
            placeholder="Search Here..."
            class="search-input"
            onfocus="showDropdown()"
            onblur="hideDropdown()"
          />
          <CiSearch className="searchicon" />

          <div class="search-dropdown">
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
  );
}

export default IMDbHeader;
