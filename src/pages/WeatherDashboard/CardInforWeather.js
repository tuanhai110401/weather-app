import { Box, Typography } from "@mui/material";
import { WiDegrees } from "react-icons/wi";

function CardInforWearther({ data, title }) {
  const infoWeather = [
    {
      title: "Temperature",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg",
    },
    {
      title: "Humidity",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg",
    },
    {
      title: "Wind",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windsock.svg",
    },
    {
      title: "Wind direction",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind-onshore.svg",
    },
    {
      title: "Clouds cover",
      image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg",
    },
    {
      title: "Sea level",
      image:
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/raindrop-measure.svg",
    },
  ];

  const iconWeather = infoWeather.find((item) => {
    if (item.title === title) {
      return true;
    }
    return false;
  });
  const styleInfoWeahter = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "90px",
    width: "460px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
  };
  return (
    data && (
      <Box sx={styleInfoWeahter}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            style={{
              display: "block",
              height: "86px",
            }}
            src={iconWeather.image}
            alt="icon"
          />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "500",
              position: "relative",
              p: 4,
            }}
          >
            {data}
            {title === "Temperature" && (
              <WiDegrees
                style={{
                  fontSize: "90px",
                  position: "absolute",
                  top: "18%",
                  left: "28%",
                }}
              />
            )}
          </Typography>
        </Box>
      </Box>
    )
  );
}

export default CardInforWearther;
