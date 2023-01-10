import React, { useState } from "react";
import "../style/NavBar.scss";

const NavBar = () => {
  const [nav, setnav] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="navItemBar">
          <div className="navItem">Events</div>
          <div className="navItem">Pricing</div>
          <div className="navItem">
            <img src="Image/Logo.svg" alt="" className="imgnavIcon" />
          </div>
          <div className="navItem">Features</div>
          <div className="navItem">Blog</div>
        </div>
        <div className="signDesign">
          <div className="signDesign-Signbtn">Sign Up</div>
          <div className="signDesign-Signbtn mainbtn">Sign In</div>
        </div>
      </div>
      <div className="navbarMobile">
        <div className="navItemImg" onClick={() => setnav(!nav)}>
          <img src="Image/Logo.svg" alt="" className="imgnavIcon" />
        </div>
        <div className={nav ? "navItemBar active" : "navItemBar"}>
          <div className="navItemBar-mobile">
            <div className="navItem">Events</div>
            <div className="navItem">Pricing</div>
            <div className="navItem">Features</div>
            <div className="navItem">Blog</div>
            <div className="navItem">Sign Up</div>
            <div className="navItem">Sign In</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
