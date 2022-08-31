import React, { Component } from "react";
import { connect } from "react-redux";

class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <img src={"http:" + this.props.weatherInfo.weatherForecast.current.condition.icon} alt="" />
        <p>{this.props.weatherInfo.weatherForecast.location.name + "/" + this.props.weatherInfo.weatherForecast.location.country} </p>
        <p>
          {this.props.weatherInfo.weatherForecast.current.temp_c + "°C " + this.props.weatherInfo.weatherForecast.current.condition.text}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer };
};

export default connect(mapStateToProps)(CurrentWeather);
