import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import CurrentWeather from "../currentWeather/CurrentWeather";
import HourlyWeather from "../hourlyWeather/HourlyWeather";
import WeatherByDay from "../weatherByDay/WeatherByDay";

class TestCompanent extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs="4">
              <CurrentWeather />
            </Col>
            <Col xs="8">
              <WeatherByDay />
            </Col>
          </Row>
          <Row>
            <HourlyWeather />
          </Row>
        </Container>
      </div>
    );
  }
}

export default TestCompanent;
