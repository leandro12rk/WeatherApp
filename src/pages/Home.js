import React from "react";

import ContainerWeatherActual from "../components/ContainerWeatherActual";
import ContainerWeatherDay from "../components/ContainerWeatherDay";
import ContainerWeatherTemperature from "../components/ContainerWeatherTemperature";
import ContainerWeatherWeek from "../components/ContainerWeatherWeek";
import Map from "../components/Map";
import SearchInput from "../components/SearchInput";
export default function Home() {
  return (
    <div id="Container-home">
      <div>
        <div className="Header">
          <SearchInput />
        </div>
        <div className="container-body-home">
          <div className="container-weather">
            <div className="container-weather-l">
              <ContainerWeatherActual />
              <ContainerWeatherTemperature />
            </div>
            <ContainerWeatherDay />
          </div>
          <div></div>
        </div>
      </div>

      <ContainerWeatherWeek />

      <Map longitude={-0.1062} latitude={51.5171} />
    </div>
  );
}
