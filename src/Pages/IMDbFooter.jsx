import React from "react";
import { FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";


import { BsInstagram } from "react-icons/bs";
import "../Pages/Footer.css";

function IMDbFooter() {
  return (
    <div className="Footerdiv" >
      <div className="socialmd">
        <p >Follow Us On</p>
        <div className="icondiv">
          <FaTwitter /> <FaFacebook /> <BsInstagram /> <FaYoutube />{" "}
          <FaTiktok />
        </div>
      </div>
      <div className="frstline">
        <Link to={"/help"}>Help <LuArrowUpRight />
        </Link>
        <Link to={"/siteindex"}>Site Index <LuArrowUpRight /></Link>
        <Link to={"/imdbPro"}>IMDbPro<LuArrowUpRight /></Link>
        <Link to={"/boxoffcmojo"}>Box office Mojo <LuArrowUpRight /></Link>
        <Link to={"/license"}>License IMDb Data <LuArrowUpRight /></Link>
      </div>
      <div className="scndline">
        <Link to={"/prssroom"}>Press Room </Link>
        <Link to={"/ads"}>Advertising <LuArrowUpRight /></Link>
        <Link to={"/jobs"}>Jobs  <LuArrowUpRight /></Link>
        <Link to={"/conditionuse"}>Condition of Use </Link>
        <Link to={"/privcyplcy"}>Privacy Policy </Link>
      </div>
     <div className="footerlstprt">
     <p>An <FaAmazon /> Company
      </p>
      <p><FaRegCopyright /> 1990-2024 by IMDb.com, Inc.
      </p> 
     </div>
    </div>
  );
}

export default IMDbFooter;
