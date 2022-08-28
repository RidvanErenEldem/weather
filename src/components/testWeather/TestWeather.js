import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { connect } from "react-redux";

class TestWeather extends Component {
  componentDidMount() {
    this.props.getCurrentWeather();
  }
  render() {
    return <div>{console.log(JSON.stringify(this.props.currentWeather))}</div>;
  }
}

const mapStateToProps = (state) => {
  return { currentWeather: state.weatherReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { getCurrentWeather: bindActionCreators(weatherActions.getCurrentWeather, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestWeather);
