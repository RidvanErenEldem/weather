import React from "react";
import TestWeather from "../testWeather/TestWeather";
import Navi from "../navi/Navi";
import HourlyWeather from "../hourlyWeather/HourlyWeather";

function App() {
  return (
    <div>
      <Navi></Navi>
      <TestWeather />
      <HourlyWeather />
    </div>
  );
}

export default App;
