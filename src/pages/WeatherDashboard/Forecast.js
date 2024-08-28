import { Box, Typography, Tooltip } from "@mui/material";
import { WiDegrees } from "react-icons/wi";
import { getIcon } from "../../assets/iconWeathers";

function Forecast({ dataForecast }) {
  function getDayOfWeek(dateString) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${daysOfWeek[dayOfWeek]} ${day}/${month}`;
  }
  return (
    <Box
      sx={{
        p: "0 24px",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        height: "74%",
      }}
    >
      {dataForecast &&
        dataForecast.map((item, index) => (
          <Tooltip
            key={index}
            title={item.summary}
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "18px",
                  backgroundColor: "#778899",
                  color: "#fff",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                  minWidth: "362px",
                  p: "12px",
                  borderRadius: "12px",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100px",
                width: "100%",
                backgroundColor: "#3498db",
                borderRadius: "12px",
                mb: 2,
                color: "#fff",
              }}
            >
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
                  src={getIcon(item.icon)}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {getDayOfWeek(item.day)}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "300",
                    }}
                  >
                    {`Temperature ${Math.round(
                      item.all_day.temperature_min
                    )}/${Math.round(item.all_day.temperature_max)} °C`}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "800",
                    position: "relative",
                    p: 4,
                  }}
                >
                  {Math.round(item.all_day.temperature)}
                  <WiDegrees
                    style={{
                      fontSize: "90px",
                      position: "absolute",
                      top: "18%",
                      left: "28%",
                    }}
                  />
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        ))}
    </Box>
  );
}

export default Forecast;
