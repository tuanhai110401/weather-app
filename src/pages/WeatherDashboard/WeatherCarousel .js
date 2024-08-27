import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import { WiDegrees } from "react-icons/wi";
import { getIcon } from "../../assets/iconWeathers";
import { useState, useEffect } from "react";

const WeatherCarousel = ({ dataHourlyWeather }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [dateCurrent, setDateCurrent] = useState();
  useEffect(() => {
    const getDate = () => {
      const today = new Date();
      const date = today.getDate();
      return date;
    };

    setDateCurrent(getDate());
  }, []);
  const dateString = "2024-08-21T17:00:00";
  const getTime = (date) => {
    const parts = date.split("T");
    const time = parts[1].substring(0, 8);
    return time;
  };
  const getDay = (date) => {
    const parts = date.split("-");
    const day = parts[2].substring(0, 2);
    return day;
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay
      autoPlaySpeed={2000}
      customTransition="all 1s linear"
      infinite
      rewind={false}
      shouldResetAutoplay
      swipeable
      transitionDuration={100}
    >
      {dataHourlyWeather.map((item, index) => {
        if (+getDay(item.date) === dateCurrent) {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "black",
                height: "180px",
                width: "190px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                p: "12px 12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    height: "60px",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      height: "98px",
                    }}
                    src={getIcon(item.icon)}
                    alt="weather"
                  />
                </Box>

                <Typography
                  sx={{
                    width: "38%",
                    fontSize: "42px",
                    fontWeight: "400",
                    position: "relative",
                    p: 0,
                  }}
                >
                  {Math.round(item.temperature)}
                  <WiDegrees
                    style={{
                      fontSize: "120px",
                      position: "absolute",
                      top: "-20%",
                      left: "0",
                    }}
                  />
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ color: "#3b3b40", fontSize: "20px", fontWeight: "600" }}
                >
                  {getTime(item.date)}
                </Typography>
                <Typography
                  sx={{ color: "#929292", fontSize: "18px", fontWeight: "200" }}
                >
                  {item.summary}
                </Typography>
              </Box>
            </Box>
          );
        }
      })}
    </Carousel>
  );
};

export default WeatherCarousel;
