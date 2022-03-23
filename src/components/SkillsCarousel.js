import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/Javascript.png";
import image2 from "../images/rails.png";
import image3 from "../images/react.png";
import image4 from "../images/Ruby.png";

const SkillsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <>
        <img src={image1} alt="" />
        <div className="myCarousel">
            <br></br>
          <h2>Java Script</h2>
        </div>
      </>
      <>
        <img src={image4} alt="" />
        <div className="myCarousel">
            <br></br>
          <h2>Ruby</h2>
        </div>
      </>
        <>
        <img src={image3} alt="" />
        <div className="myCarousel">
            <br></br>
          <h2>React</h2>
        </div>
      </>
    
    </Carousel>
  );
};

export default SkillsCarousel;
