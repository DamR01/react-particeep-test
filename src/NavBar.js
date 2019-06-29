import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Creation NavBar Component */
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNavBar: false,
      isOpenPopOver: false,
      viewOnlyLike: false
    };
  }

  toggleNavBar = () => {
    this.setState({
      isOpenNavBar: !this.state.isOpenNavBar
    });
  };

  togglePopOver = () => {
    this.setState({
      isOpenPopOver: !this.state.isOpenPopOver
    });
  };
  render() {
    return (
      <div style={{ marginBottom: 90 }}>
        <Navbar color="dark" dark expand="md" fixed="top">
          <span className="navbar-brand">
            <img
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo myMoviz"
            />
          </span>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.isOpenNavBar} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink href="#" style={{ color: '#FFFFFF', marginRight: 10 }}>
                  Particeep - Movies
                </NavLink>
              </NavItem>
              <Button
                id="Popover1"
                onClick={this.togglePopOver}
                color="secondary"
              >
                {this.props.moviesCount}

                {this.props.moviesCount > 1 ? ' films' : ' film'}
              </Button>
              <Popover
                placement="bottom"
                isOpen={this.state.isOpenPopOver}
                target="Popover1"
                toggle={this.togglePopOver}
              >
                <PopoverHeader>Derniers films</PopoverHeader>
                <PopoverBody>{this.props.moviesNameList} </PopoverBody>
              </Popover>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
