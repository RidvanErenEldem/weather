import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Input, Button } from "reactstrap";
import { Search } from "react-bootstrap-icons";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      queryString: "",
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleChange(event) {
    this.setState({
      queryString: event.target.value,
    });
  }

  handleClick() {
    console.log(this.state.queryString);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="col-md-12" navbar>
              <NavItem className="col-md-4">
                <NavLink href="#" style={{ textAlign: "left" }}>
                  Weather App By Rıdvan
                </NavLink>
              </NavItem>
              <NavItem className="col-md-4">
                <Input
                  type="text"
                  className="rounded-5"
                  placeholder="Enter a location..."
                  autoFocus
                  onChange={(e) => this.handleChange(e)}
                />
              </NavItem>
              <NavItem className="col-md-2">
                <Button color="primary" type="button" onClick={() => this.handleClick()}>
                  <Search />{" "}
                </Button>
              </NavItem>
              <NavItem className="col-md-2">
                <NavLink href="https://github.com/RidvanErenEldem/" style={{ textAlign: "right" }}>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
