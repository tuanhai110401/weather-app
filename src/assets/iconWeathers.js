const iconWeathers = [
  {
    codes: 1,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/not-available.svg",
  },

  {
    codes: 2,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
  },
  {
    codes: 3,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
  },
  {
    codes: 4,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-haze.svg",
  },
  {
    codes: 5,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-fog.svg",
  },
  {
    codes: 6,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg",
  },
  {
    codes: 7,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg",
  },
  {
    codes: 8,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg",
  },
  {
    codes: 9,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg",
  },
  {
    codes: 10,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg",
  },

  {
    codes: 11,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg",
  },
  {
    codes: 12,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg",
  },
  {
    codes: 13,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg",
  },
  {
    codes: 14,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg",
  },
  {
    codes: 15,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-rain.svg",
  },
  {
    codes: 16,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg",
  },
  {
    codes: 17,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
  },
  {
    codes: 18,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg",
  },
  {
    codes: 19,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-sleet.svg",
  },
  {
    codes: 20,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sleet.svg",
  },
  {
    codes: 21,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-sleet.svg",
  },
  {
    codes: 22,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-sleet.svg",
  },
  {
    codes: 23,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-hail.svg",
  },
  {
    codes: 24,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-hail.svg",
  },
  {
    codes: 25,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg",
  },
  {
    codes: 26,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg",
  },
  {
    codes: 27,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg",
  },
  {
    codes: 28,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-fog.svg",
  },
  {
    codes: 29,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-fog.svg",
  },
  {
    codes: 30,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night.svg",
  },
  {
    codes: 31,
    image: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg",
  },
  {
    codes: 32,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-rain.svg",
  },
  {
    codes: 33,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-extreme-rain.svg",
  },
  {
    codes: 34,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-snow.svg",
  },
  {
    codes: 35,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-sleet.svg",
  },
  {
    codes: 36,
    image:
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-extreme-rain.svg",
  },
];

const getIcon = (index) => {
  const icon = iconWeathers.find((item) => item.codes === index);
  return icon.image;
};

export { iconWeathers, getIcon };
