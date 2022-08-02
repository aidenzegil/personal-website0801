import React from "react";
import pfp from "./media/myself.svg";
import "../../App.css";

const Section1 = () => {
  return (
    <div id="intro" class="section is-large is-widescreen">
      
        <div class="columns  is-desktop is-centered is-3 block">
          <div
            class="column is-centered is-two-fifths block m-auto"
            style={{ height: "100%" }}
          ><div className="grow">
            <div class="box" style={{ height: "100%" }}>
              <figure>
                <img
                  className="img-responsive"
                  class="is-centered"
                  src={pfp}
                  alt="pfp"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-two-fifths block m-auto">
          <div className="grow">
            <div class="box" style={{ height: "100%" }}>
              <h1 class="title block p-3 has-text-primary">Hey There!</h1>
              <h2 class="subtitle block p-4">
                I'm Aiden, a spontaneous thinker and creative builder. I build
                anything and everything! Whether it's coffee tables, saunas, or
                websites, I'm your guy!
              </h2>
              <h3 class="subtitle block p-4 ">
                You can typically find me climbing at Vital Brooklyn in the
                evenings and coding at a cafe during the day. I get excited
                about making old things look new and doing hipster stuff like
                yoga.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
