import React, { Component } from "react";

class TestCompanent extends Component {
  render() {
    return (
      <div>
        <img src={"http:" + this.props.currentWeather.current.condition.icon} alt="" />
        <p>{this.props.currentWeather.location.name + "/" + this.props.currentWeather.location.country} </p>
        <p>{this.props.currentWeather.current.temp_c + "°C " + this.props.currentWeather.current.condition.text}</p>
      </div>
    );
  }
}

export default TestCompanent;
