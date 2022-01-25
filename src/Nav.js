import React, { useState, useEffect } from "react";
import bbb_logo2 from "./images/bbb_logo2.png";
import avatar from "./images/avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={bbb_logo2} alt="Bayou Big Screen Logo" />
      <img className="nav_avatar" src={avatar} alt="BBB Avatar" />
    </div>
  );
}

export default Nav;
