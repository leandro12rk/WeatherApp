import React, { useState, useEffect, useContext } from "react";
import { useEnv } from "../context/EnvContext";
import Loading from "./Loading";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchContext } from "../context/SearchContext";

import { getAllDataWeather } from "../API/Api_Weather";
import { compareActualActiveTimeDate } from "../utils/Functions";
export default function ContainerWeatherDay() {
  const [data, setData] = useState(null);
  const { searchTerm } = useContext(SearchContext);

  const [error, setError] = useState(null);
  const { apiWeatherKey, apiWeatherUrl } = useEnv();
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
  //console.log(data);

  if (error) {
    return <div className="container-weather-day">Error: {error}</div>;
  }

  if (!data || !data.forecast || !data.forecast.forecastday) {
    return (
      <div className="container-weather-day">
        <Loading />
      </div>
    ); // Handle loading state or missing data
  }

  // Flatten the hours array to calculate the active slide index
  const hours = data.forecast.forecastday.flatMap((day) => day.hour);
  const activeIndex = hours.findIndex(
    (forecastData) =>
      compareActualActiveTimeDate(data.location.localtime, forecastData.time)

    //data.location.localtime === forecastData.time
  );
  //console.info("hora actual " + data.location.localtime);

  return (
    <div className="container-weather-day">
      <h3>Weather Day</h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide visible en pantallas pequeñas
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2, // 2 slides visibles en pantallas medianas
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3, // 3 slides visibles en pantallas grandes
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 4, // 4 slides visibles en pantallas muy grandes
            spaceBetween: 20,
          },
        }}
        //navigation
        //pagination={{ clickable: true }}
        initialSlide={activeIndex !== -1 ? activeIndex : 0} // Start at the active slide or the first slide
      >
        {data.forecast.forecastday.map((day) =>
          day.hour.map((forecastData, index) => (
            <SwiperSlide>
              <div
                key={index}
                className={`hourly-forecast ${
                  compareActualActiveTimeDate(
                    data.location.localtime,
                    forecastData.time
                  )
                    ? "active"
                    : ""
                } `}>
                <span>Time: {forecastData.time}</span>
                <span>Temp: {forecastData.temp_c}°C</span>
                <span className="container-icon">
                  <span>
                    <img
                      src={forecastData.condition.icon}
                      className="img-fluid"
                      alt={forecastData.condition.text}
                    />
                  </span>
                  <span>{forecastData.condition.text}</span>
                </span>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
