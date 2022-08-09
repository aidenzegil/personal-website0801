import React from "react";
import circle from "./projectsMedia/CircleLand.png";
import tweeterman from "./projectsMedia/TweeterMan.png";
import tweetermanAPI from "./projectsMedia/TweetGenAPI.png";
import notes from "./projectsMedia/Notes.png";
import daregen from "./projectsMedia/DareGen.png";
import mousegame from "./projectsMedia/MouseGame.png";
import cssbackground from "./projectsMedia/CSSBackground.png";
import jssnake from "./projectsMedia/JSSnake.png";
import melon from "./projectsMedia/watermelon.png";

const Projects = () => {
  return (
    <div id="projects">
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
                href="/projects"
              >
                Projects
              </a>
              <hr class="navbar-divider"></hr>
              <div class="navbar-item has-text-primary is-size-6-widescreen">
                Version 0.0.3
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ margin: "5%", marginTop: "10%" }}>
        <div class="columns is-flex-direction-row block is-flex-wrap-wrap block is-justify-content-space-evenly">
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block is-centered">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Tweeter Man</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={tweeterman} class="block" />
                </figure>
                <div class="block">
                  <a href="https://tweeterman.com/" class="block">
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  A thread generator that takes an inital tweet and then
                  generates a specified number of threads using GPT-3
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - Vue.js - CSS - SASS - Bulma - HTML
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/tweet-gen-web"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Circle Landing Page</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={circle} />
                </figure>
                <div class="block">
                  <a
                    href="https://fancy-sfogliatella-ab92ef.netlify.app/"
                    class="block"
                  >
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  A funny landing page inspired by CircleAI. Also... melon.
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - CSS - HTML
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/circle-landing"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">CSS Background</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={cssbackground} />
                </figure>
                <div class="block">
                  <a
                    href="https://lighthearted-kleicha-a1af90.netlify.app/"
                    class="block"
                  >
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  I was frustrated that I couldn't find a fun interactive
                  background one afternoon and decided to make one myself! This
                  is the result.
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - CSS
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/freestyle"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Dare Generator</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={daregen} />
                </figure>
                <div class="block">
                  <a href="https://daregenerator.com/" class="block">
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  A collaborative random dare generator. Go ahead and add a few
                  more dares to the database! This was also my first project.
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - Firebase - CSS - SASS - HTML - Figma
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/Dare_Generator"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Notes</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={notes} />
                </figure>
                <div class="block"></div>
                <p class="subtitle block">
                  A note taking application that connects to a firebase
                  database. Copy the project and add your own firebase
                  configuration to make your own!
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - CSS - Firebase
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/notes-web"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Mouse Game</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={mousegame} />
                </figure>
                <div class="block">
                  <a
                    href="https://spontaneous-stardust-cf3ffb.netlify.app/"
                    class="block"
                  >
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  Was bored one day and wanted a game that I could play but
                  never win. Beware, this game is extremely frustrating past
                  level 5.
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  React.js - CSS - SASS - HTML
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/mouse-game"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">Tweeter Man API</p>
                <figure class="image is-5by block">
                  <img alt="img" src={tweetermanAPI} />
                </figure>
                <div class="block"></div>
                <p class="subtitle block">The API for Tweeterman</p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>{" "}
                  Python - FastAPI
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/tweet-gen-api"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half-desktop is-one-third-widescreen is-half-tablet block">
            <div className="grow">
              <div class="box">
                <p class="title block has-text-primary	">JavaScript Snake</p>
                <figure class="image is-5by3 block">
                  <img alt="img" src={jssnake} />
                </figure>
                <div class="block">
                  <a
                    href="https://main--lovely-sunburst-4f4529.netlify.app/"
                    class="block"
                  >
                    <button class="button is-primary">Live Preview</button>
                  </a>
                </div>
                <p class="subtitle block">
                  A classic JavaScript game made in React with arrays.
                </p>
                <p class="subtitle block">
                  <p>
                    <strong class="has-text-primary">Skills:</strong>
                  </p>
                  React.js - CSS - HTML
                </p>
                <a
                  class="button is-primary block"
                  href="https://github.com/aidenzegil/Js-snake"
                >
                  <i class="fa fa-github block fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
