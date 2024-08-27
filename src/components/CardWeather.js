import "../styles/CardWheather.scss";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { WiDegrees } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
function CardWeather({ data }) {
  return (
    <div className="card-weather">
      <div className="header">
        <span className="lable">
          <BsWind className="icon" />
          {data.wind} km/h
        </span>
        <span className="lable">
          <WiHumidity className="icon" />
          {data.humidity} %
        </span>
      </div>
      <h5 className="title">
        {data.temperature}
        <WiDegrees className="icon" />
      </h5>
      <div className="img">
        <img src={data.image} alt={data.country} />
      </div>
      <div className="footer">
        <h5 className="lable">
          <FaLocationDot className="icon" />
          {data.country}
        </h5>
        <p>{data.weather}</p>
      </div>
    </div>
  );
}

export default CardWeather;
