import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import { connect } from "react-redux";

class WeatherByDay extends Component {
  returnDate(dateFromApi) {
    let date = new Date(dateFromApi);
    return date.toLocaleDateString("tr-TR");
  }
  render() {
    return (
      <div>
        <ListGroup horizontal>
          {this.props.weatherInfo.weatherForecast.forecast.forecastday.map((forecast, index) => (
            <ListGroupItem key={index}>
              <ListGroup flush>
                <ListGroupItem>
                  <img src={"http:" + forecast.day.condition.icon} alt="" />
                  {forecast.day.condition.text} {forecast.day.maxtemp_c + "°C /"} {forecast.day.mintemp_c + "°C"}
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: "center" }}>{this.returnDate(forecast.date)}</ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer };
};

export default connect(mapStateToProps)(WeatherByDay);
