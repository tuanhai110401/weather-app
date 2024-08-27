import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../styles/ChartWeather.scss";
import { useState, useEffect } from "react";
import { getIcon } from "../../assets/iconWeathers";
import { CiClock2, CiCalendarDate, CiTempHigh } from "react-icons/ci";

function ChartWeather({ dataHourlyWeather }) {
  const [dataChart, setDataChart] = useState();
  const getTime = (date) => {
    const parts = date.split("T");
    const time = parseInt(parts[1].substring(0, 2));
    if (time > 12) {
      const newTime = time - 12 + " pm";
      return newTime;
    }
    return time + "am";
  };
  const getDay = (date) => {
    const parts = date.split("T");
    const day = parts[0].split("-").reverse().join("-");
    return day;
  };
  useEffect(() => {
    const newdate = dataHourlyWeather.map((item) => {
      return {
        name: getTime(item.date),
        Temperature: item.temperature,
        icon: item.icon,
        weather: item.summary,
        date: getDay(item.date),
      };
    });
    setDataChart(newdate);
  }, [dataHourlyWeather]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="info-chart">
            <p className="label-chart">
              <CiClock2 className="icon-chart" /> <span>{label}</span>
            </p>
            <p className="label-chart">
              <CiCalendarDate className="icon-chart" />{" "}
              <span>{payload[0].payload.date}</span>
            </p>
            <p className="label-chart">
              <CiTempHigh className="icon-chart" />
              <span>{payload[0].payload.Temperature}°C</span>
            </p>
          </div>
          <div className="img-chart">
            <img src={getIcon(payload[0].payload.icon)} alt="icon" />
            <p className="label-chart">{payload[0].payload.weather}</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={dataChart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3498db" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3498db" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="Temperature"
            stroke="#3498db"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartWeather;
