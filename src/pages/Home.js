import React, { useEffect, useRef } from "react";
import ContainerWeatherActual from "../components/ContainerWeatherActual";
import ContainerWeatherDay from "../components/ContainerWeatherDay";
import ContainerWeatherTemperature from "../components/ContainerWeatherTemperature";
import ContainerWeatherWeek from "../components/ContainerWeatherWeek";
import { SearchProvider } from "../context/SearchContext";
import SearchInput from "../components/SearchInput";
export default function Home() {
  return (
    <SearchProvider>
      <div className="container-body">
        <SearchInput />
        <div className="container-sections container-fluid">
          <div className="section">
            <ContainerWeatherActual />
            <ContainerWeatherTemperature />
          </div>
          <ContainerWeatherDay />
          <ContainerWeatherWeek />
        </div>
      </div>
    </SearchProvider>
  );
}
