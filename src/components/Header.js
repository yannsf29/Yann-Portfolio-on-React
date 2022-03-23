import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home"  className="header-wraper">
      <div className="main-info">
        <h1>Web Development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web design",
            "Web development",
            "Facebook Ads",
            "Social media",
            "Goole Adds",
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
