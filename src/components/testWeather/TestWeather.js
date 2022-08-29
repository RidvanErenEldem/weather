import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { connect } from "react-redux";
import TestCompanent from "./TestCompanent";

class TestWeather extends Component {
  constructor(props) {
    super(props);
    this.props.getCurrentWeather("Konya");
  }

  render() {
    return (
      <div>
        {console.log(this.props.currentWeather)}
        {this.props.currentWeather.loading ? "Loading..." : <TestCompanent currentWeather={this.props.currentWeather.currentWeather} />}
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
