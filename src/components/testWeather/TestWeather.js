import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { connect } from "react-redux";
import TestCompanent from "./TestCompanent";

class TestWeather extends Component {
  constructor(props) {
    super(props);
    this.props.getWeatherForecast("Konya");
  }

  render() {
    return (
      <div>
        {this.props.weatherInfo.loading ? "Loading..." : <TestCompanent weatherForecast={this.props.weatherInfo.weatherForecast} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { weatherInfo: state.weatherReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { getWeatherForecast: bindActionCreators(weatherActions.getWeatherForecast, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestWeather);
