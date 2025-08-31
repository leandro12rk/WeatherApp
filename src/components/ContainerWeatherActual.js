import React, { useState, useEffect } from "react";
import { useEnv } from "../context/EnvContext";
import Loading from "./Loading";
import { getDataWeatherActual } from "../API/Api_Weather";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function ContainerWeatherActual() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { apiWeatherKey, apiWeatherUrl } = useEnv();
  const city = "panama";
  const [localTime, setLocalTime] = useState("");
  const [actualYear, setActualYear] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getDataWeatherActual(
          apiWeatherKey,
          apiWeatherUrl,
          city
        );

        setTimeout(() => {
          setData(weatherData);
          setLocalTime(weatherData.location.localtime.split(" ")[1]);
          setActualYear(weatherData.location.localtime.split(" ")[0]);
        }, 5000);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [apiWeatherKey, apiWeatherUrl, city]);

  if (error) {
    return <div className="container-weather-actual">Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="container-weather-actual">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container-weather-actual">
      <span className="container-text">
        <h1>
          <LocationOnIcon /> {data.location.name}
          <br />
        </h1>
        <p>{data.location.region}</p>
        <span className="container-condition">
          <span>
            <img
              src={data.current.condition.icon}
              className=""
              alt={data.current.condition.text}
            />
          </span>
          <span>{data.current.condition.text}</span>
        </span>
      </span>
      <span className="container-icon">
        <p className="text-local-time">
          {actualYear} <br /> {localTime} <AccessTimeFilledIcon />
        </p>
        <span>
          {" "}
          <DeviceThermostatIcon /> {data.current.temp_c}°C
        </span>
      </span>
    </div>
  );
}
