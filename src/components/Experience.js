import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-Present</h3>
            <h2>Full-Stack Developer</h2>
            <h2>Ripe Metrics, San Diego, CA</h2>
            <p>
              Full-stack development on React using Redux Knowledge about
              testing frameworks, like Jest Able to write, test, ship, and
              maintain clean production code within a collaborative and
              version-controlled (git) codebase A deep understanding of
              functional and object-oriented programming
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> June 2021 to September 2021</h3>
            <h2>Full-Stack Developer</h2>
            <h2>Learn Academy - San Diego, CA</h2>
            <p>
              months of coding education learned back-end and front-end web
              development built web applications from the ground up using React
              / Ruby on Rails identified and eliminated website bugs to improve
              user experience
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> June 2021 to September 2021</h3>
            <h2>Full-Stack Developer Freelance</h2>
            <h2>Curb 360 - Encinitas, CA</h2>
            <p>
              Designed and developed a web-based application with React
              Excellent problem-solving skills Ability to plan and implement
              complex data models Effective communication, including the ability
              to translate and explain technical issues to non-technical team
              members Able to write, test, ship, and maintain clean production
              code within a collaborative and version-controlled (git) codebase
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
