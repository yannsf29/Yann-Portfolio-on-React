import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home"  className="header-wraper">
      <div className="main-info">
        <br></br>
        <br></br>
        <br></br>
        <h1>Web Development and websites promotions</h1>
        <br></br>
        <br></br>
        <Typed
          className="typed-text"
          strings={[
            "Web design",
            "Web development",
            "Facebook Ads",
            "Social media",
            "Google Adds",
          ]}
          typespeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
