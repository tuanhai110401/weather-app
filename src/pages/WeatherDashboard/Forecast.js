import { Box, Typography, Tooltip } from "@mui/material";
import { getIcon } from "../../assets/iconWeathers";
import { CiTempHigh } from "react-icons/ci";

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
      className="forecast-content"
      sx={{
        p: "0 24px",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        height: "70%",
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
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignItems: "center",
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
                  width: "60%",
                  minWidth: "180px",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    display: "block",
                    height: "76px",
                  }}
                  src={getIcon(item.icon)}
                />
                <Box>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {getDayOfWeek(item.day)}
                  </Typography>

                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: "16px",
                      fontWeight: "300",
                    }}
                  >
                    <CiTempHigh
                      style={{ fontSize: "20px", marginBottom: "-4px" }}
                    />
                    {`${Math.round(item.all_day.temperature_min)}/${Math.round(
                      item.all_day.temperature_max
                    )} °C`}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "800",
                  }}
                >
                  {Math.round(item.all_day.temperature)}°C
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        ))}
    </Box>
  );
}

export default Forecast;
