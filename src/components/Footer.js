import {Link} from "react-scroll"
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>San Diego, CA</p>
            </div>
            <div className="d-flex">
              <a href="tel:619-366-7343">(619)366-7343</a>
            </div>
            <div className="d-flex">
              <p>Yann.crennsf@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" offset={-110} className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="services" offset={-110} className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-110} className="footer-nav">Experience</Link>
                <br />
                <Link smooth={true} to="skills" offset={-110} className="footer-nav">Skills</Link>
                <br />
                <Link smooth={true} to="contacts" offset={-110} className="footer-nav">Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/yann.crenn.3/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/yann-crenn-23812b230/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
             
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Yann Crenn | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;