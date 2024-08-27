const KELVIN_TO_CELSIUS = 273.15;
const WIND_SPEED_CONVERSION = 3.6;

const convertKelvinToCelsius = (temperature) => {
  const celsius = temperature - KELVIN_TO_CELSIUS;

  return Math.round(celsius);
};

const windDirections = [
  { code: "N", direction: "North" },
  { code: "NNE", direction: "North-Northeast" },
  { code: "NE", direction: "Northeast" },
  { code: "ENE", direction: "East-Northeast" },
  { code: "E", direction: "East" },
  { code: "ESE", direction: "East-Southeast" },
  { code: "SE", direction: "Southeast" },
  { code: "SSE", direction: "South-Southeast" },
  { code: "S", direction: "South" },
  { code: "SSW", direction: "South-Southwest" },
  { code: "SW", direction: "Southwest" },
  { code: "WSW", direction: "West-Southwest" },
  { code: "W", direction: "West" },
  { code: "WNW", direction: "West-Northwest" },
  { code: "NW", direction: "Northwest" },
  { code: "NNW", direction: "North-Northwest" },
];
const convertWind = (speed) => {
  const windSpeed = speed * WIND_SPEED_CONVERSION;

  return windSpeed.toFixed(0, 2);
};
const convertWindDirection = (windDEG) => {
  const windDirection = windDirections.find((item) => item.code === windDEG);

  return windDirection.direction;
};
export { convertKelvinToCelsius, convertWind, convertWindDirection };
