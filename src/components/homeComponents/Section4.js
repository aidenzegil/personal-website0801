import React from "react";
import "../../App.css";

const Section4 = () => {
  return (
    <div id="contact" class="section is-large is-widescreen">
      <div class="columns is-desktop is-centered">
        <div class="column is-half m-auto">
          <div className="grow">
            <div class="box" style={{ height: "100%" }}>
              <h1 class="title has-text-primary">Get In Touch</h1>
              <h2 class="subtitle block">
                Reach out to me on any of the following!
              </h2>
                {/* <div class="field is-horizontal level-item ">
                  <p class="control has-icons-left">
                    <input
                      class="input is-primary"
                      type="email"
                      placeholder="Email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                  <button class=" button is-primary is-outlined" type="submit">
                    Submit
                  </button>
                </div> */}
              <div class="level block">
                <span class="level-item">
                  <a
                    class="button is-primary"
                    href="https://twitter.com/AidenZegil"
                  >
                    <i class="fa fa-twitter fa-2x" />
                  </a>
                </span>
                <span class="level-item">
                  <a
                    class="button is-primary"
                    href="https://www.linkedin.com/in/aiden-zegil-0906a4235/"
                  >
                    <i class="fa fa-linkedin fa-2x" />
                  </a>
                </span>
                <span class="level-item">
                  <a
                    class="button is-primary"
                    href="https://www.instagram.com/aiden_zegil/"
                  >
                    <i class="fa fa-instagram fa-2x" />
                  </a>
                </span>
                <span class="level-item">
                  <a
                    class="button is-primary"
                    href="https://github.com/aidenzegil"
                  >
                    <i class="fa fa-github block fa-2x" />
                  </a>
                </span>
              </div>
              <div class="level icon-text">
                <div class="level-item">
                  <span>
                    <i class="fa fa-phone has-text-success" />
                  </span>
                  <span>+1 (315) 800-2371</span>
                </div>
              </div>
              <div class="level icon-text">
                <div class="level-item">
                  <span>
                    <i class="fa fa-envelope has-text-success" />
                  </span>
                  <h1>aidenzegil@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
