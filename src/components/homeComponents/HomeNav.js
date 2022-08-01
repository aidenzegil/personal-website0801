import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const HomeNav = () => {
  return (
    <nav class="navbar is-fixed-top" style={{width: '100vw'}}>
      <div class="field is-grouped">
        <Link
          class="navbar-item"
          to="intro"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Intro
        </Link>
        <Link
          class="navbar-item"
          to="favorite"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Cool
        </Link>
        <Link
          class="navbar-item"
          to="skills"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          class="navbar-item"
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
        <div class="navbar-end">
      <div class="navbar-item has-dropdown is-right is-hoverable">
        <h1 class="navbar-link is-arrowless">
          Pages
        </h1>

        {/* <div class="navbar-dropdown">
        <Link class="navbar-item" to="/home">Home</Link>
        <Link class="navbar-item" to="/projects">Projects</Link>
        <Link class="navbar-item" to="/video">Video</Link>
          <hr class="navbar-divider"></hr>
          <div class="navbar-item">
            Version 0.0.1
          </div>
        </div> */}
      </div>
    </div>
      </div>
    </nav>
  );
};

export default HomeNav;
