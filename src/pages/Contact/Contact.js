import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdArrowForwardIos } from "react-icons/md";
import "../../styles/Contact.scss";
import imgContact from "../../assets/about-5.jpg";
function Contact() {
  return (
    <>
      <div className="home-header">
        <Header />
      </div>

      <div className="about-hero">
        <h4 className="hero_title">Contact Us</h4>
        <p className="hero_desc">
          Home <MdArrowForwardIos className="about_icon" />
          <span>Contact Us</span>
        </p>
      </div>
      <div className="contact-container">
        <h4 className="contact_title">Contact us for a personal experience</h4>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="contact-mb">
              <label for="name" className="contact-form-label">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ..."
                className="contact-form-input"
              />
            </div>

            <div className="contact-mb">
              <label for="email" className="contact-form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email ..."
                className="contact-form-input"
              />
            </div>

            <div className="contact-mb">
              <label for="message" className="contact-form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                className="contact-form-input input-mess"
              ></textarea>
            </div>

            <div>
              <button className="contact-btn">Submit</button>
            </div>
          </form>
          <div className="contact-img">
            <img src={imgContact} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
