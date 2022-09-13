import React, { Component } from "react";
import { Table } from "reactstrap";
import "./hourlyWeather.css";
import { connect } from "react-redux";
import { ArrowUp } from "react-bootstrap-icons";

class HourlyWeather extends Component {
  writeTheHourlyTable() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperture °C</th>
            <th>Condition</th>
            <th>Wind KM/H</th>
            <th>Wind Rotation</th>
            <th>Chance of Rain</th>
            <th>Chance of Snow</th>
            <th>Humidity</th>
            <th>Feels Like in °C</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weatherInfo.weatherForecast.forecast.forecastday[this.props.selectedDayInfo.selectedDay].hour.map((hourly, index) => (
            <tr key={index}>
              <td>{hourly.time.slice(-5)}</td>
              <td>{hourly.temp_c}</td>
              <td>
                {hourly.condition.text}
                <img src={"https:" + hourly.condition.icon} alt="" />
              </td>
              <td>{hourly.wind_kph}</td>
              <td>
                <ArrowUp style={{ transform: "rotate(" + hourly.wind_degree + "deg)" }} />
              </td>
              <td>{hourly.chance_of_rain + "%"}</td>
              <td>{hourly.chance_of_snow + "%"}</td>
              <td>{hourly.humidity + "%"}</td>
              <td>{hourly.feelslike_c}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.props.weatherInfo.loading ? "Loading..." : this.writeTheHourlyTable()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer, selectedDayInfo: state.whichDayReducer };
};

export default connect(mapStateToProps)(HourlyWeather);
