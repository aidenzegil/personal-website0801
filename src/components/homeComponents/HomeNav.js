import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import melon from "./media/watermelon.png"

const HomeNav = () => {
  return (
    <nav class="navbar is-fixed-top is-hidden-touch" style={{width: '100vw', backgroundColor: '#E4FCF4'}}>
        <div class="navbar-brand">
            <a href="http://aidenzegil.com">
                <img src={melon} alt=""/>
            </a>
        </div>
      <div class="field is-grouped">
        <Link
          class="navbar-item has-text-primary is-size-3-widescreen"
          to="intro"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Intro
        </Link>
        <Link
          class="navbar-item has-text-primary is-size-3-widescreen"
          to="favorite"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Enjoy
        </Link>
        <Link
          class="navbar-item has-text-primary is-size-3-widescreen"
          to="skills"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          class="navbar-item has-text-primary is-size-3-widescreen" 
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
        <div class="navbar-end">
      {/* <div class="navbar-item has-dropdown is-right is-hoverable">
        <h1 class="navbar-link is-arrowless has-text-primary">
          Pages
        </h1>

        <div class="navbar-dropdown">
        <Link class="navbar-item" to="/home">Home</Link>
        <Link class="navbar-item" to="/projects">Projects</Link>
        <Link class="navbar-item" to="/video">Video</Link>
          <hr class="navbar-divider"></hr>
          <div class="navbar-item">
            Version 0.0.1
          </div>
        </div> 
      </div>  */}
    </div>
      </div>
    </nav>
  );
};

export default HomeNav;
