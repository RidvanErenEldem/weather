import React, { Component } from "react";

class TestCompanent extends Component {
  render() {
    return (
      <div>
        <img src={"http:" + this.props.weatherForecast.current.condition.icon} alt="" />
        <p>{this.props.weatherForecast.location.name + "/" + this.props.weatherForecast.location.country} </p>
        <p>{this.props.weatherForecast.current.temp_c + "°C " + this.props.weatherForecast.current.condition.text}</p>
      </div>
    );
  }
}

export default TestCompanent;
