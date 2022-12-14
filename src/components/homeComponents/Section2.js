import React from "react";
import "../../App.css";

const Section2 = () => {
  return (
    <div id="favorite" class="section is-large is-widescreen">
      <div class="columns is-centered is-3 block">
        <div class="column is-half-desktop is-four-fifths-tablet block">
          <div className="grow">
            <div class="box">
              <h1 class="title block p-3 has-text-primary">Favorite Build</h1>
              <h2 class="subtitle block p-4">
                I've done quite a few projects but there are some that I loved
                so much I just had to build them twice, like Tweeter Man!
              </h2>
              <h3 class="subtitle block p-4">
                I encourage you to check it out at <a href="https://tweeterman.com/"><strong>tweeterman.com</strong></a>. It's simple, easy, and I use it all the time
                when I don't feel like coming up with original tweets!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
