import { Button, IconButton, Box, Typography } from "@mui/material";
import { CiLocationOn, CiBellOn, CiSearch } from "react-icons/ci";
import { WiDegrees } from "react-icons/wi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import {
  getWeather,
  getSearchResultPlaces,
  getInfoCountry,
} from "../../services/api";
import "../../styles/WeatherDashboard.scss";
import Header from "../../components/Header";
import NavConfig from "./Navbar/config-navbar";
import DropMenu from "./DropMenu";
import WeatherCarousel from "./WeatherCarousel ";
import CardInforWearther from "./CardInforWeather";
import { convertWindDirection } from "./convertWeather";
import { getIcon } from "../../assets/iconWeathers";
import Loading from "../../components/Loading";
import Forecast from "./Forecast";
import ChartWeather from "./ChartWeather";
import useDebounce from "../../hooks/useDebounce";

function WeatherDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [dataWeather, setDataWeather] = useState();
  const [country, setCountry] = useState();
  const { placeID } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const debounceSearch = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debounceSearch.trim() === "") {
      setSearchResult([]);
      return;
    }
    fetchSearchResult();
  }, [debounceSearch]);
  useEffect(() => {
    const storedWeather = localStorage.getItem("weatherData");
    const storedCountry = localStorage.getItem("countryData");

    if (storedWeather && storedCountry) {
      setDataWeather(JSON.parse(storedWeather));
      setCountry(JSON.parse(storedCountry));
    } else {
      fetchWeatherCountry(placeID);
    }
  }, []);
  useEffect(() => {
    fetchWeatherCountry(placeID);
  }, [placeID]);
  const fetchWeatherCountry = async (id) => {
    setIsLoading(true);
    const res = await getWeather(id);
    if (res && !res.detail) {
      setDataWeather(res);
      fetchInfoCountry(id);
      localStorage.setItem("weatherData", JSON.stringify(res));
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } else if (res.detail) {
      setIsLoading(false);
      toast.error(res.detail);
    } else {
      setIsLoading(false);
      toast.error(res.message);
    }
  };
  const fetchInfoCountry = async (keyword) => {
    const res = await getInfoCountry(keyword);
    console.log(res);
    if (res.length > 0) {
      localStorage.setItem("countryData", JSON.stringify(res[0]));
      setCountry(res[0]);
    }
  };
  const fetchSearchResult = async () => {
    const res = await getSearchResultPlaces(debounceSearch);
    if (res.length > 0) {
      setSearchResult(res);
    } else {
      setSearchResult([
        { name: "No locations found matching your search.", type: "NULL" },
      ]);
    }
  };
  const handleFetchAPI = (placeID) => {
    fetchWeatherCountry(placeID);
  };
  return (
    <div className="dashboard-wrapper">
      <div className="nav">
        <Header dataNav={NavConfig} type="DASHBOARD" />
      </div>
      <div className="container-dashboard">
        <div className="search-dashboard">
          <h4 className="search-title">
            <CiLocationOn />
            {country
              ? `${country.name}${
                  country.adm_area1 ? " / " + country.adm_area1 : ""
                }`
              : ""}
          </h4>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSearchResult([]);
                }, 200);
                setSearchTerm("");
              }}
            />
            <Button
              onClick={handleFetchAPI}
              sx={{
                height: "42px",
                fontSize: "22px",
                backgroundColor: "#EFF3F9",
              }}
            >
              <CiSearch />
            </Button>
            {searchResult.length > 0 && (
              <div className="search-suggest">
                {searchResult.map((item, index) =>
                  item.type !== "NULL" ? (
                    <div
                      key={index}
                      className="search-item"
                      onClick={() => handleFetchAPI(item.place_id)}
                    >
                      <CiSearch className="search-icon" />
                      {`${item.name} 
                      ${item.adm_area1 ? " / " + item.adm_area1 : ""} 
                      ${item.country ? " / " + item.country : ""} `}
                    </div>
                  ) : (
                    <div key={index} className="search-item">
                      {`${item.name}`}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <div className="search-action">
            <IconButton sx={{ mr: 2 }}>
              <CiBellOn />
            </IconButton>
            <DropMenu />
          </div>
        </div>
        <div className="content-dashboard">
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              m: "36px",
              height: "540px",
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Box
                sx={{
                  display: "flex",
                  height: "234px",
                  backgroundColor: "#3498db",
                  borderRadius: "24px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
                }}
              >
                <Box
                  sx={{
                    p: "24px",
                    width: "34%",
                    textAlign: "center",
                  }}
                >
                  {dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current && (
                      <img
                        style={{ height: "180px", marginTop: "-48px" }}
                        src={
                          dataWeather &&
                          !dataWeather.detail &&
                          getIcon(dataWeather.current.icon_num)
                        }
                        alt="weather"
                      />
                    )}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#fff",
                      mt: "-36px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        overflow: "hidden",
                      }}
                    >
                      <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                        {country ? `${country.name}` : ""}
                      </Typography>
                      {dataWeather &&
                        !dataWeather.detail &&
                        dataWeather.current && (
                          <Typography
                            sx={{ fontSize: "16px", fontWeight: "400" }}
                          >
                            {dataWeather && dataWeather.current.summary}
                          </Typography>
                        )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                      }}
                    >
                      {dataWeather &&
                        !dataWeather.detail &&
                        dataWeather.current && (
                          <Typography
                            sx={{
                              fontSize: "72px",
                              fontWeight: "400",
                              position: "relative",
                            }}
                          >
                            {Math.round(dataWeather.current.temperature)}
                            <WiDegrees
                              style={{
                                fontSize: "150px",
                                position: "absolute",
                                top: "-8%",
                                left: "22%",
                              }}
                            />
                          </Typography>
                        )}
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ p: "24px", width: "66%" }}>
                  {dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current &&
                    dataWeather.hourly.data &&
                    dataWeather.hourly.data.length > 0 && (
                      <WeatherCarousel
                        dataHourlyWeather={dataWeather.hourly.data}
                      />
                    )}
                </Box>
              </Box>

              <Typography
                sx={{ m: "24px 0", fontSize: "32px", fontWeight: "600" }}
              >
                Today’s Highlights
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  height: "220px",
                  width: "100%",
                  flexWrap: "wrap",
                  gap: "38px",
                  justifyContent: "space-around",
                }}
              >
                <CardInforWearther
                  type="INFO"
                  title="Temperature"
                  data={
                    dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current &&
                    Math.round(dataWeather.current.temperature)
                  }
                />
                <CardInforWearther
                  type="INFO"
                  title="Clouds cover"
                  data={
                    dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current &&
                    dataWeather.current.cloud_cover + "%"
                  }
                />
                <CardInforWearther
                  type="INFO"
                  title="Wind"
                  data={
                    dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current &&
                    dataWeather.current.wind.speed + "m/s"
                  }
                />
                <CardInforWearther
                  type="INFO"
                  title="Wind direction"
                  data={
                    dataWeather &&
                    !dataWeather.detail &&
                    dataWeather.current &&
                    convertWindDirection(dataWeather.current.wind.dir)
                  }
                />
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#fff",
                width: "30%",
                borderRadius: "24px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "400",
                  p: "24px",
                }}
              >
                Weather forecast for 7 days
              </Typography>
              {dataWeather &&
                dataWeather.daily &&
                dataWeather.daily.data.length > 0 && (
                  <Forecast dataForecast={dataWeather.daily.data} />
                )}
            </Box>
          </Box>
          <Box sx={{ m: "72px 36px" }}>
            <Typography
              sx={{ m: "24px 0", fontSize: "32px", fontWeight: "600" }}
            >
              24-hour Temperature Forecast
            </Typography>
            {dataWeather &&
              dataWeather.hourly &&
              dataWeather.hourly.data.length > 0 && (
                <ChartWeather dataHourlyWeather={dataWeather.hourly.data} />
              )}
          </Box>
        </div>
      </div>
      <Loading open={isLoading} />
    </div>
  );
}
export default WeatherDashboard;
