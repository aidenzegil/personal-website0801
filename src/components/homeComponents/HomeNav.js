import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import melon from "./homeMedia/watermelon.png";

const HomeNav = () => {
  //   document.addEventListener('DOMContentLoaded', () => {

  //       // Get all "navbar-burger" elements
  //       const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  //       // Add a click event on each of them
  //       $navbarBurgers.forEach( el => {
  //         el.addEventListener('click', () => {

  //           // Get the target from the "data-target" attribute
  //           const target = el.dataset.target;
  //           const $target = document.getElementById(target);

  //           // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //           el.classList.toggle('is-active');
  //           $target.classList.toggle('is-active');

  //         });
  //       });

  //     });
  return (
    <nav
      class="navbar is-fixed-top is-hidden-touch"
      style={{ width: "100vw", backgroundColor: "#E4FCF4" }}
    >
      <div class="navbar-start  ">
        <div class="navbar-brand">
          <div className="grow">
            <a href="http://aidenzegil.com">
              <img src={melon} alt="" />
            </a>
          </div>
        </div>
        <div class="field is-grouped">
          <Link
            class="navbar-item has-text-primary is-size-4-widescreen"
            to="intro"
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            class="navbar-item has-text-primary is-size-4-widescreen"
            to="favorite"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Favorite
          </Link>
          <Link
            class="navbar-item has-text-primary is-size-4-widescreen"
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
          <Link
            class="navbar-item has-text-primary is-size-4-widescreen"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <h1 class="navbar-link is-right has-text-primary is-arrowless is-size-3 mx-3">
            🍔
          </h1>

          <div class="navbar-dropdown is-right">
            <a
              class="navbar-item has-text-primary is-size-6-widescreen"
              href="/"
            >
              Home
            </a>
            <a
              class="navbar-item has-text-primary is-size-6-widescreen"
              href="aidenzegil.com/projects"
            >
              Projects
            </a>
            {/* <a
              class="navbar-item has-text-primary is-size-6-widescreen"
              href="/video"
            >
              Video
            </a> */}
            <hr class="navbar-divider"></hr>
            <div class="navbar-item has-text-primary is-size-6-widescreen">
              Version 0.0.3
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
