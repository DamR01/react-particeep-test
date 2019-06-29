import React, { Fragment, Component } from 'react';
import NavBar from './NavBar';
import MovieCard from './movieCard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <MovieCard />
      </Fragment>
    );
  }
}

export default App;
