import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as whichDayAction from "../../redux/actions/whichDayAction";
class WeatherByDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 0,
    };
  }

  returnDate(dateFromApi) {
    let date = new Date(dateFromApi);
    return date.toLocaleDateString("tr-TR");
  }
  returnTime(timeFromApi) {
    timeFromApi = String(timeFromApi).toLowerCase().replace(/\s/g, "");
    var has_am = timeFromApi.indexOf("am") >= 0;
    var has_pm = timeFromApi.indexOf("pm") >= 0;
    timeFromApi = timeFromApi.replace("am", "").replace("pm", "");
    if (timeFromApi.indexOf(":") < 0) timeFromApi = timeFromApi + ":00";
    if (has_am) timeFromApi += " am";
    if (has_pm) timeFromApi += " pm";
    var d = new Date("1/1/2011 " + timeFromApi);
    var doubleDigits = function (n) {
      return parseInt(n) < 10 ? "0" + n : String(n);
    };
    return doubleDigits(d.getHours()) + ":" + doubleDigits(d.getMinutes());
  }
  onClick(index) {
    this.setState({
      selectedDay: index,
    });
    this.props.changeSelectedDate(index);
  }

  render() {
    return (
      <div>
        <ListGroup horizontal>
          {this.props.weatherInfo.weatherForecast.forecast.forecastday.map((forecast, index) => (
            <ListGroupItem key={index} active={index === this.state.selectedDay ? true : false} onClick={(e) => this.onClick(index)}>
              <ListGroup flush>
                <ListGroupItem
                  style={{ border: "none" }}
                  active={index === this.state.selectedDay ? true : false}
                  onClick={(e) => this.onClick(index)}
                >
                  <img src={"https:" + forecast.day.condition.icon} alt="" />
                  {forecast.day.condition.text} {forecast.day.maxtemp_c + "°C /"} {forecast.day.mintemp_c + "°C"}
                </ListGroupItem>
                <ListGroupItem
                  style={{ textAlign: "center" }}
                  active={index === this.state.selectedDay ? true : false}
                  onClick={(e) => this.onClick(index)}
                >
                  {this.returnDate(forecast.date) +
                    " | Sunrise: " +
                    this.returnTime(forecast.astro.sunrise) +
                    " | Sunset: " +
                    this.returnTime(forecast.astro.sunset) +
                    " | Moonrise: " +
                    this.returnTime(forecast.astro.moonrise) +
                    " | Moonset: " +
                    this.returnTime(forecast.astro.moonset)}
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer, selectedDayInfo: state.whichDayReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { changeSelectedDate: bindActionCreators(whichDayAction.changeSelectedDate, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherByDay);
