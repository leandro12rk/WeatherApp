import React, { useContext, useState, useEffect } from "react";
import { useEnv } from "../context/EnvContext";
import Loading from "./Loading";
import { getAllDataWeather } from "../API/Api_Weather";

export default function Map({ longitude, latitude }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { apiMapKey,apiMapUrl, apiWeatherKey, apiWeatherUrl } = useEnv();
  const city = "London";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getAllDataWeather(
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
    return <div className="container-map">Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="container-map">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container-map">
      <iframe
        className="map"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`${apiMapUrl}?key=${apiMapKey}&q=${data.location.lat},${data.location.lon}`}></iframe>
    </div>
  );
}
