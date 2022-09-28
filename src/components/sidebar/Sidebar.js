import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programmer_life </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hello_world </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div> */}
      <h1>
        <Link smooth to="/#start" className="h1_links">
          ChangWoo Jeong
        </Link>
      </h1>

      {/* <img src={logo} /> */}
      <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
          rel="opener noreferrer"
          target="_blank"
          className="fa fa-envelope"
        ></a>{" "}
        jcw9828@gmail.com{" "}
      </p>

      <ul className="sidebar-nav">
        {/* <li className="sidebar-nav-items">
          <Link smooth to="/#about" className="links">
            About
          </Link>
        </li> */}
        <li className="sidebar-nav-items">
          <a href="https://velog.io/@wooya" className="links">
            Blog
          </a>
        </li>
        {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
      </ul>

      <div className="flip-card-back">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-icons">
            {" "}
            <a
              href="https://github.com/togongs"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-github fa-lg"
            ></a>
          </li>
          {/* <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li> */}
          {/* <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://twitter.com/Sachin_Mittal98"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-twitter fa-lg"
              ></a>
            </li> */}
          {/* <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.instagram.com/decent_sachin.mittal/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-instagram fa-lg"
              ></a>
            </li> */}
          <li className="sidebar-nav-icons">
            {" "}
            <a
              href="mailto:jcw9828@gmail.com"
              rel="opener noreferrer"
              target="_blank"
              className="fa fas fa-envelope fa-lg"
            ></a>
          </li>
          {/* <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.facebook.com/profile.php?id=100011989067867"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-facebook fa-lg"
              ></a>
            </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
