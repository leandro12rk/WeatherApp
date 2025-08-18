import React, { useState, useEffect } from "react";
import { useEnv } from "../context/EnvContext";
import Loading from "./Loading";
import { getDataWeatherActual } from "../API/Api_Weather";
export default function ContainerWeatherActual() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { apiWeatherKey, apiWeatherUrl } = useEnv();
  const city = "France/Paris";

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
        <h1> {data.location.name}</h1>
        <p>{data.location.region}</p>
        <p className="text-local-time"> {data.location.localtime}</p>
      </span>
      <span className="container-icon">
        <span>{data.current.condition.text}</span>
        <span>
          <img
            src={data.current.condition.icon}
            className=""
            alt={data.current.condition.text}
          />
        </span>
        <span>Temperature: {data.current.temp_c}°C</span>
      </span>
    </div>
  );
}
