import axios from "../utils/axiosCustomize";
const KEY = "8s3jf6frj3o5273oixf472975f4ru0db2x3p582l";
const SECTION_ALL = "all";
const TIMEZONE = "auto";
const UNITS = "metric";
const LANGUAGE = "en";

const getWeather = (id) => {
  return axios.get("point", {
    params: {
      place_id: id,
      sections: SECTION_ALL,
      timezone: TIMEZONE,
      units: UNITS,
      key: KEY,
    },
  });
};

const getSearchResultPlaces = (keyword) => {
  return axios.get("find_places_prefix", {
    params: {
      text: keyword,
      language: LANGUAGE,
      key: KEY,
    },
  });
};

const getInfoCountry = (keyword) => {
  return axios.get("find_places", {
    params: {
      text: keyword,
      language: LANGUAGE,
      key: KEY,
    },
  });
};
export { getWeather, getSearchResultPlaces, getInfoCountry };
