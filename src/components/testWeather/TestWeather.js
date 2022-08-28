import React, { Component, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { connect } from "react-redux";

class TestWeather extends Component {
  componentDidMount() {
    this.props.getCurrentWeather();
  }
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

const mapStateToProps = (state) => {
  return { currentWeather: state.weatherReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { getCurrentWeather: bindActionCreators(weatherActions.getCurrentWeather, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestWeather);
