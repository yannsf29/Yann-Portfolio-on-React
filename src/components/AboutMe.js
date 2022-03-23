import React from "react";
import Author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Author} alt="Author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="about-heading">About Me</h1>
          <br></br>
          <br></br>
          <p className="about-p">
            Full-stack web developer with strong analytical skills dedicated to
            building and optimizing creative web applications that provide
            intuitive user experiences. I am passionate about full-stack web
            development and figuring out solutions to improve the usability and
            functionality of websites and systems. I am also easy going and
            enjoy collaborating with team members to get projects done in a
            timely manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
