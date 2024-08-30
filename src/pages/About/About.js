import { IoSunny } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";

import Header from "../../components/Header";
import "../../styles/About.scss";
import imageAbout from "../../assets/sunny.jpg";
import imageAbout2 from "../../assets/about-2.jpg";
import imageAbout3 from "../../assets/about-6.jpg";
import imageAbout4 from "../../assets/about-4.jpg";
import imageAbout5 from "../../assets/about-5.jpg";
import Footer from "../../components/Footer";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="home-header">
        <Header />
      </div>

      <div className="about-hero">
        <h4 className="hero_title">About Us</h4>
        <p className="hero_desc">
          Home <MdArrowForwardIos className="about_icon" />{" "}
          <span>About Us</span>
        </p>
      </div>
      <div className="about-container">
        <div className="about-intro flex-7-3" data-aos="zoom-out-up">
          <h4 className="f-7">
            We providing quick and accurate information
            <IoSunny className="about_icon" />
          </h4>
          <p className="f-3">
            WeatherHub aims to become a top mobile weather app, meeting the
            needs of millions of users globally
          </p>
        </div>

        <div className="flex-7-3 about_result ">
          <div className="f-7" data-aos="fade-right">
            <img className="about_result-image" src={imageAbout} alt="about" />
          </div>
          <div className="f-3 about_result-lists" data-aos="fade-left">
            <div className="result-item">
              <h2>15+</h2>
              <h5>Years of experience</h5>
            </div>
            <div className="result-item">
              <h2>98%</h2>
              <h5>Forecast accuracy</h5>
            </div>
            <div className="result-item">
              <h2>100%</h2>
              <h5>Satisfaction rate</h5>
            </div>
          </div>
        </div>
        <div className="about_img-lists">
          <div className="flex-7-3 about_img-item">
            <div className="f-7 " data-aos="fade-right">
              <img src={imageAbout2} alt="about" />
            </div>
            <div className="f-3" data-aos="fade-left">
              <img src={imageAbout5} alt="about" />
            </div>
          </div>
          <div
            className="flex-7-3 about_img-item"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="f-7" data-aos="fade-left">
              <img src={imageAbout4} alt="about" />
            </div>
            <div className="f-3" data-aos="fade-right">
              <img src={imageAbout3} alt="about" />
            </div>
          </div>
        </div>

        <div className="flex-7-3 about_core" data-aos="zoom-in-up">
          <div className="f-7 core_content">
            <h4>Our core vision</h4>
            <p>
              Our vision is to become a global weather app, with the ability to
              provide highly accurate weather forecasts, user-friendly features,
              and intelligent integrations to meet the growing demands of our
              users. <br />
              <br />
              By continuously innovating, we aim to set the standard for weather
              apps worldwide.
            </p>
          </div>
          <div className="f-7 core_content">
            <h4>Our main mission</h4>
            <p>
              The mission of WeatherApp is to become the premier weather app,
              delivering accurate, reliable, and easy-to-understand weather
              information to our users. <br />
              <br />
              We believe that timely access to weather information will help
              people better plan and prepare for their daily activities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
