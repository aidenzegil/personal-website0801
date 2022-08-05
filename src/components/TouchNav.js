import React from "react";

const TouchNav = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <nav
        className="navbar"
        class="navbar is-fixed-top"
        style={{ backgroundColor: "#E4FCF4" }}
        role="navigation"
        aria-label="main navigation"
      >
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          style={{ backgroundColor: "#E4FCF4" }}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/" className="navbar-item is-size-5 has-text-primary">
                Home
              </a>
              <a
                href="/projects"
                className="navbar-item is-size-5 has-text-primary"
              >
                Projects
              </a>
              {/* <a
                href="/video"
                className="navbar-item is-size-5 has-text-primary"
              >
                Video
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TouchNav;
