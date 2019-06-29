import React from 'react';
import { Col, Card, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTimes,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      isHidden: '',
      category: []
    };
  }

  /*This function is used to like a movie. We send props to the App Compoenent : movie Title & the like state */
  handleClick = () => {
    var isLike = !this.state.like;
    this.setState({
      like: isLike
    });
    this.props.handleClickFromApp(isLike, this.props.movieTitle);
  };

  /*This functions is used to delete a movie card */
  handleClickDelete = () => {
    this.setState({
      isHidden: 'none'
    });
    this.props.handleDelete(this.props.movieId);
  };

  render() {
    let styleHeart = {
      color: '#F7F7F7',
      position: 'absolute',
      top: '5%',
      left: '88%',
      cursor: 'pointer'
    };

    let styleCross = {
      color: '#721121',
      position: 'absolute',
      bottom: '5%',
      left: '90%',
      cursor: 'pointer'
    };
    let styleLike = {
      color: 'green',
      position: 'absolute',
      top: '38%',
      left: '10%',
      cursor: 'pointer'
    };

    let styleDislike = {
      color: 'red',
      position: 'absolute',
      top: '40%',
      left: '39%',
      cursor: 'pointer'
    };

    if (this.state.like) {
      styleHeart.color = '#fc6861';
    }
    console.log('this.props.movieCategory', this.props.movieCategory);
    const { movieTitle, movieCategory, movieLikes, movieDislikes } = this.props;
    return (
      <Col xs="12" sm="6" md="5" lg="4">
        <div style={{ marginBottom: 30 }}>
          <Card
            style={{
              display: this.state.isHidden,
              backgroundColor: '#E07A5F'
            }}
            body
            outline
            color="warning"
          >
            <FontAwesomeIcon
              onClick={this.handleClick}
              size="2x"
              style={styleHeart}
              icon={faHeart}
            />

            <CardTitle>
              <span style={{ fontWeight: 'bold' }}>{movieTitle}</span> -{' '}
              {movieCategory}
            </CardTitle>

            <Col>
              <div
                style={{
                  width: 180,
                  height: 80,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <FontAwesomeIcon
                  size="1x"
                  style={styleLike}
                  icon={faThumbsUp}
                />
                {movieLikes}
                <FontAwesomeIcon
                  size="1x"
                  style={styleDislike}
                  icon={faThumbsDown}
                />
                {movieDislikes}
              </div>
            </Col>
            <FontAwesomeIcon
              onClick={this.handleClickDelete}
              size="2x"
              style={styleCross}
              icon={faTimes}
            />
          </Card>
        </div>
      </Col>
    );
  }
}

export default MovieCard;
