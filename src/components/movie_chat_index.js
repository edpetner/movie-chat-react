import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchCast } from '../actions/index';
import { Link } from 'react-router';

class MovieChatIndex extends Component {
  componentWillMount() {
    // console.log("Hello, it's me");
    this.props.fetchMovies();
  }

  renderMovies() {
    return this.props.movies.results.map((movie) => {
      return (
        <li className="list-group-item" key={movie.id}>
          <Link to={"movies/" + movie.id}>
            <span className="pull-xs-right">GENRE</span>
            <strong>{movie.original_title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    if (!this.props.movies){
      return <h3>Loading</h3>;
    }
    return (
      <div>
        <h3>Movies</h3>
        <ul className="list-group">
          {this.renderMovies()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies.all }
}

export default connect(mapStateToProps, { fetchMovies })(MovieChatIndex);
