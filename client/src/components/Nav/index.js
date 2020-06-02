import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        ImgSlider
      </a>

      <ul>
        <a style={{color:'white'}} href="projects2">gallery</a>
        {/* <a style={{color:'white'}} href="projects2">projects2</a> */}

      </ul>
    </nav>
  );
}

export default Nav;