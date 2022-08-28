import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem></NavItem>
              <NavItem>
                <NavLink href="https://github.com/RidvanErenEldem/">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
