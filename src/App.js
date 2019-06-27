import React, { Fragment, Component } from 'react';
import NavBar from './NavBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
      </Fragment>
    );
  }
}

export default App;
