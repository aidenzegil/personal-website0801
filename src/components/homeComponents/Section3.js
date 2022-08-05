import React from "react";
import "../../App.css";

const Section3 = () => {
  return (
    <div id="skills" class="section is-large is-widescreen">
      <div class="columns  is-desktop is-centered is-3 block">
        <div class="column is-two-fifths-widescreen is-half-desktop is-four-fifths-tablet block m-auto">
          <div className="grow">
            <div class="box" style={{ height: "100%" }}>
              <h1 class="title block p-3 has-text-primary">My Skills</h1>
              <h2 class="subtitle block p-4">
                Most of what I've done is Front End. I work mostly in react but
                I have tried out Vue.js and I gotta say I kind of like it, not
                enough to casually make the switch from React.js, but enough that
                I wouldn't mind if I had to.
              </h2>
              <h3 class="subtitle block p-4">
                Here's a visual representation of what I think my skill level is
                at! I have touched a lot of things and want to get better at
                working with APIs and databases. So if you have a challenge send
                it my way!
              </h3>
            </div>
          </div>
        </div>
        <div
          class="column is-centered is-two-fifths-widescreen is-half-desktop is-four-fifths-tablet block m-auto"
          style={{ height: "100%" }}
        >
          <div className="grow">
            <div class="box" style={{ height: "100%" }}>
              <div class="  block">
                <h1 class=" ">React.js</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="80"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Vue.js</h1>
                <progress
                  class="progress level-item is-warning is-small"
                  value="30"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">CSS</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="60"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">SASS</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="60"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Python</h1>
                <progress
                  class="progress level-item is-danger is-small"
                  value="13"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Ruby</h1>
                <progress
                  class="progress level-item is-danger is-small"
                  value="10"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Firebase</h1>
                <progress
                  class="progress level-item is-warning is-small"
                  value="50"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Netlify</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="70"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="  block">
                <h1 class=" ">Design</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="65"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="is-left block">
                <h1 class="is-left">Bulma</h1>
                <progress
                  class="progress level-item is-warning is-small"
                  value="35"
                  max="100"
                >
                  80%
                </progress>
              </div>
              <div class="is-left">
                <h1 class="is-left">Git</h1>
                <progress
                  class="progress level-item is-success is-small"
                  value="75"
                  max="100"
                >
                  80%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
