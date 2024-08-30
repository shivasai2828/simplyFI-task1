// src/Logo.js
import React from "react";
import "./index.css";

const Logo = () => {
  return (
    <div className="cover">
      <div className="diamond">
        <div className="line top"></div>
        <div className="line right"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
      </div>
      <div className="text">
        <h1>HTML&CSS</h1>
        <h2>design and build websites</h2>
      </div>
    </div>
  );
};

export default Logo;
