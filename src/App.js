import React, { Fragment, Component } from 'react';
import { Row, Container } from 'reactstrap';
import NavBar from './NavBar';
import MovieCard from './movieCard';
import { movies$ } from './movies';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesCount: 0,
      moviesNameList: [],
      category: []
    };
  }

  /*We use WillMount Component to get movies data before the render*/

  componentWillMount() {
    movies$.then(movies => {
      this.setState({
        movies
      });
    });
  }

  handleClickHeart = (isLike, title) => {
    let moviesNameListCopy = [...this.state.moviesNameList];
    if (isLike) {
      moviesNameListCopy.push(title);
      this.setState({
        moviesCount: this.state.moviesCount + 1,
        moviesNameList: moviesNameListCopy
      });
    } else {
      let index = this.state.movies.indexOf(title);
      moviesNameListCopy.splice(index, 1);
      this.setState({
        moviesCount: this.state.moviesCount - 1,
        moviesNameList: moviesNameListCopy
      });
    }
  };

  /* */
  handleClickCross = movieId => {
    let index = this.state.movies.indexOf(movieId);
  };

  render() {
    /* here we map on the movie state to get each properties to send them to the movieCard Component */
    let moviesList = this.state.movies.map((movie, i) => {
      var isLiked = false;
      return (
        <MovieCard
          key={i}
          movieTitle={movie.title}
          movieCategory={movie.category}
          movieId={movie.id}
          movieLikes={movie.likes}
          movieDislikes={movie.dislikes}
          handleClickFromApp={this.handleClickHeart}
          handleDelete={this.handleClickCross}
        />
      );
    });

    /*here we create a variable to push the movie them are like to display them on the NavBar Component */
    let moviesLast = this.state.moviesNameList.slice(-3);
    if (this.state.moviesCount === 0) {
      moviesLast = 'Aucun film sélectionné.';
    } else if (this.state.moviesCount > 3) {
      moviesLast = moviesLast.join(', ') + '...';
    } else {
      moviesLast = moviesLast.join(', ') + '.';
    }
    return (
      <Fragment>
        <NavBar
          moviesCount={this.state.moviesCount}
          moviesNameList={moviesLast}
        />
        <Container>
          <Row>{moviesList}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
