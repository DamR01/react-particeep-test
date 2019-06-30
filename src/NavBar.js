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
      category: [],
      display: '',
      displayO: '',
      displayS: '',
      displayT: ''
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

  /*The displays functions belows display the number of movies on category when you click on category button */
  displayCategoryZero = category => {
    let data = 0;
    this.props.moviesCat.map((category, i) => {
      if (this.state.category[0] === category.category) {
        data++;
      }
      return data;
    });
    this.setState({
      display: data
    });
  };

  displayCategoryOne = category => {
    let dataOne = 0;
    this.props.moviesCat.map((category, i) => {
      if (this.state.category[1] === category.category) {
        dataOne++;
      }
      return dataOne;
    });
    this.setState({
      displayO: dataOne
    });
  };

  displayCategoryTwo = category => {
    let dataSecond = 0;
    this.props.moviesCat.map((category, i) => {
      if (this.state.category[2] === category.category) {
        dataSecond++;
      }
      return dataSecond;
    });
    this.setState({
      displayS: dataSecond
    });
  };
  displayCategoryThree = category => {
    let dataThird = 0;
    this.props.moviesCat.map((category, i) => {
      if (this.state.category[3] === category.category) {
        dataThird++;
      }
      return dataThird;
    });
    this.setState({
      displayT: dataThird
    });
  };
  render() {
    /*here we get movies category to display them on navbar button */
    let moviesCategory = this.props.moviesCat.map((cat, i) => {
      let categoryCopy = [...this.state.category];
      if (categoryCopy.indexOf(cat.category) < 0) {
        this.setState({
          category: categoryCopy.concat([cat.category])
        });
      }
    });
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
              <Button
                onClick={this.displayCategoryZero}
                style={{ marginLeft: 15 }}
              >
                {this.state.display} {this.state.category[0]}
              </Button>
              <Button
                onClick={this.displayCategoryOne}
                style={{ marginLeft: 15 }}
              >
                {this.state.displayO} {this.state.category[1]}
              </Button>
              <Button
                onClick={this.displayCategoryTwo}
                style={{ marginLeft: 15 }}
              >
                {this.state.displayS} {this.state.category[2]}
              </Button>
              <Button
                onClick={this.displayCategoryThree}
                style={{ marginLeft: 15 }}
              >
                {this.state.displayT} {this.state.category[3]}
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
