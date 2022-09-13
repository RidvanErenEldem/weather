import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroupItem, ListGroup } from "reactstrap";
import { ArrowUp } from "react-bootstrap-icons";
class CurrentWeather extends Component {
  uvColor(value) {
    if (value <= 2) return { color: "#45a635" };
    if (value > 2 && value <= 5) return { color: "#f5eb10" };
    if (value > 5 && value <= 7) return { color: "#ed8a08" };
    if (value > 7 && value <= 10) return { color: "#dc3e23" };
    return { color: "#b578b3" };
  }

  render() {
    return (
      <div>
        <ListGroup horizontal>
          <ListGroupItem style={{ border: "none" }}>
            <img src={"https:" + this.props.weatherInfo.weatherForecast.current.condition.icon} alt="" />
            <p>
              {this.props.weatherInfo.weatherForecast.current.temp_c +
                "°C " +
                this.props.weatherInfo.weatherForecast.current.condition.text}{" "}
              <br />
              {this.props.weatherInfo.weatherForecast.location.name + "/" + this.props.weatherInfo.weatherForecast.location.country}
              <br />
              {"Last updated: " + this.props.weatherInfo.weatherForecast.current.last_updated}
              <br />
              {"Moon Phase: " + this.props.weatherInfo.weatherForecast.forecast.forecastday[0].astro.moon_phase}
            </p>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <p>
              Wind KM/H: {this.props.weatherInfo.weatherForecast.current.wind_kph} <br />
              Wind Rotation:{" "}
              {<ArrowUp style={{ transform: "rotate(" + this.props.weatherInfo.weatherForecast.current.wind_degree + "deg)" }} />} <br />
              Humidity: {this.props.weatherInfo.weatherForecast.current.humidity + "%"} <br />
              Feels Like °C: {this.props.weatherInfo.weatherForecast.current.feelslike_c} <br />
              Rain Change: {this.props.weatherInfo.weatherForecast.forecast.forecastday[0].day.daily_chance_of_rain + "%"} <br />
              Snow Change: {this.props.weatherInfo.weatherForecast.forecast.forecastday[0].day.daily_chance_of_snow + "%"} <br />
              <span style={this.uvColor(this.props.weatherInfo.weatherForecast.current.uv)}>
                UV Level: {this.props.weatherInfo.weatherForecast.current.uv}
              </span>
            </p>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer };
};

export default connect(mapStateToProps)(CurrentWeather);
