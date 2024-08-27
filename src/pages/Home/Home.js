import {
  FormControl,
  Button,
  Input,
  InputLabel,
  useTheme,
} from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineDoubleArrow } from "react-icons/md";

import imageCelendar from "../../assets/celendar.png";
import imageUsa from "../../assets/city-florida.jpg";
import imageThunder from "../../assets/thunder.jpg";
import "../../styles/pageHome.scss";
import CardNews from "../../components/CardNews";
import CardWeather from "../../components/CardWeather";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import imgPost1 from "../../assets/post1.jpg";
import imgPost2 from "../../assets/post2.png";
import imgPost3 from "../../assets/post3.png";
function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const backgroundColor = theme.palette.background.main;
  const textColor = theme.palette.text.primary;
  const styleButton = {
    color: textColor,
    backgroundColor: backgroundColor,
  };
  const dataCardWeather = [
    {
      country: "Ha Noi",
      temperature: "30",
      wind: "16",
      humidity: "79",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog-day.svg",
      weather: "Sunny",
    },
    {
      country: "Florida",
      temperature: "22",
      wind: "5",
      humidity: "71",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
      weather: "Cloudy",
    },
  ];
  const dataCountries = [
    {
      name: "Việt Nam",
      image: "https://flagcdn.com/vn.svg",
      placeId: "socialist-republic-of-vietnam-1562822",
    },
    {
      name: "Korea",
      image: "https://flagcdn.com/kr.svg",
      placeId: "republic-of-korea-1835841",
    },
    {
      name: "Norway",
      image: "https://flagcdn.com/no.svg",
      placeId: "kingdom-of-norway",
    },
    {
      name: "Brazil",
      image: "https://flagcdn.com/br.svg",
      placeId: "brazil-4254884",
    },
    {
      name: "Australia",
      image: "https://flagcdn.com/au.svg",
      placeId: "australia-plains-2077455",
    },
    {
      name: "Russia",
      image: "https://flagcdn.com/ru.svg",
      placeId: "russian-federation",
    },
    {
      name: "Egypt",
      image: "https://flagcdn.com/eg.svg",
      placeId: "arab-republic-of-egypt",
    },
    {
      name: "France",
      image: "https://flagcdn.com/fr.svg",
      placeId: "francescas-3017375",
    },
    {
      name: "New Zealand",
      image: "https://flagcdn.com/nz.svg",
      placeId: "new-plymouth",
    },
    {
      name: "Italy",
      image: "https://flagcdn.com/it.svg",
      placeId: "italian-republic",
    },
  ];
  const dataNews = [
    {
      title: " Climate change: Facing Earth’s greatest challenge",
      image: imgPost1,
      date: "/ Aug 27, 2024",
      role: "Admin",
    },
    {
      title: " Storms to bring numerous risks in central US",
      image: imgPost2,
      date: "/ Aug 28, 2024",
      role: "Admin",
    },
    {
      title: " The dangers of nighttime heat",
      image: imgPost3,
      date: "/ Aug 29, 2024",
      role: "User",
    },
  ];
  const handleWeatherCountry = (placeID) => {
    navigate(`/dashboard/${placeID}`);
  };
  return (
    <div>
      <div className="home-header">
        <Header />
      </div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h4 className="hero-title">
            Weather forecasts for thousands of locations around the world
          </h4>
          <p className="hero-desc">
            Stay ahead of the weather with our comprehensive forecasts for
            locations worldwide. Plan your day, week or trip with confidence.
          </p>
          <Button className="hero-btn">
            Get Started
            <IoIosArrowRoundForward className="icon" />
          </Button>
        </div>
        <div className="hero-weather">
          <CardWeather data={dataCardWeather[0]} />
        </div>
      </div>

      <section className="about-wrapper">
        <div className="about-info">
          <h4 className="home-title">
            Your #1 source of any weather forecasts and updates.
          </h4>
          <p className="home-desc">
            Stay updated of any weather changes with WeahterHub. <br />
            <br />
            We are an expert team specializing on everything that concerns
            weather data. Since 2010, our website has been providing accurate
            and detailed weather forecasts available on any device.
          </p>
        </div>
        <div className="about-image">
          <img src={imageCelendar} alt="celendar" />
        </div>
      </section>

      <section className="forecast">
        <h5 className="home-title">World weather forecast</h5>
        <p className="home-desc">Please select a country</p>
        <div className="countries-wrapper">
          {dataCountries.map((item, index) => (
            <div
              key={index}
              className="country"
              style={styleButton}
              onClick={() => handleWeatherCountry(item.placeId)}
            >
              <div className="country_container">
                <img className="flag" src={item.image} />
                <span>{item.name}</span>
              </div>
              <MdOutlineDoubleArrow className="country-icon" />
            </div>
          ))}
        </div>
      </section>
      <section className="new-wrapper">
        <h4 className="home-title">Weather forecast news</h4>
        <p className="home-desc">
          Get the best weather news from our team of meteorologists and learn
          how the weather changes the lives all over the globe.
        </p>
        <div className="new-cards">
          {dataNews.map((item, index) => (
            <CardNews key={index} dataPost={item} />
          ))}
        </div>
      </section>

      <section className="about-wrapper">
        <div className="about-info">
          <h4 className="home-title">Avoid weather surprises</h4>
          <p className="home-desc">
            WeatherHub provides a road trip planner tool with accurate weather
            forecast information to optimize travel plans.
            <br />
            <br />
            A successful road trip requires careful planning to ensure travelers
            can enjoy a fun and safe journey. A road trip planner with weather
            is an essential tool to help with this planning. This tool provides
            up-to-date weather information for any given route.
            <br />
            <br />
            It allows travelers to make informed decisions about their travel
            plans at any given time.
          </p>
        </div>
        <div className="about-image weather">
          <img src={imageUsa} alt="florida" />
        </div>
        <div className="about-card">
          <CardWeather data={dataCardWeather[1]} />
        </div>
      </section>

      <section className="about-wrapper wrapper-reverse">
        <div className="about-info">
          <h4 className="home-title">Avoid weather surprises</h4>
          <p className="home-desc">
            WeatherHub partners with national weather services and qualified
            meteorologists to bring you accurate forecasts for any location. We
            help people understand the impact of weather, make the best
            decisions, and plan their day in advance.
            <br />
            <br />
            On our website, you can expect highly accurate weather forecasts
            that provide actionable weather insights and increase your safety.
          </p>
          <Button className="about-btn">READ OUR STORY</Button>
        </div>
        <div className="about-image weather">
          <img src={imageThunder} alt="thunder" />
        </div>
      </section>

      <section className="contact-wrapper">
        <div className="wrapper">
          <h5 className="home-title">Get the fresh weather forecast daily</h5>
          <p className="home-desc" style={{ width: "50%" }}>
            Subscribe to our newsletter to receive regular updates on the latest
            weather insights, news, and tips to help you avoid any unwanted
            risks and surprises during your day.
          </p>
          <FormControl variant="standard" className="contact-form">
            <div className="contact-input">
              <InputLabel htmlFor="component-helper" sx={{ color: "#fff" }}>
                Email
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
                sx={{ fontSize: "32px", width: "90%", color: "#fff" }}
              />
            </div>
            <Button className="contact-btn">Submit</Button>
          </FormControl>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
