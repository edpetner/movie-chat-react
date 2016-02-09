import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, fetchCast, fetchBackground } from '../actions/index';
import { Link } from 'react-router';


export default class MovieShow extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  componentWillMount() {
    const movie_id = this.props.params.id;
    this.props.fetchMovie(movie_id);
    this.props.fetchCast(movie_id);
    this.props.fetchBackground(movie_id);
  }

  renderCast(actors) {
    return actors.cast.map((actor, index) => {
      if (index > 5) {
        return '';
      }
      return (
        <li className="list-group-item" key={actor.name}>{actor.name}</li>
      );
    });
  }

  renderGenres(genrelist) {
    return genrelist.map((genre, index) => {
      if (index == genrelist.length-1) {
        return <strong key={genre.name}>{genre.name}</strong>;
      }
      return <strong key={genre.name}>{genre.name} | </strong>;
    });
  }

  render() {
    const { movie } = this.props;
    const { cast } = this.props;
    const { background } = this.props;
    if (!movie || !cast || !background) {
      return <div>Loading..</div>;
    }
    const randIndex = Math.floor(Math.random() * (background.backdrops.length - 0) + 0);
    document.getElementById('big-container').style.backgroundImage = "url(https://image.tmdb.org/t/p/w396"+ background.backdrops[randIndex].file_path +")";

    return (
      <div className="movie-container">
        <div className="alert alert-danger">
          <Link to="/">Return to home</Link>
        <h1>{movie.original_title}</h1><small>{this.renderGenres(movie.genres)}</small>
        </div>
          <div className="list-width">
            <ul className="list-group">
              <li className="list-group-item">
                <h5>Top Billed Cast</h5>
              </li>
            {this.renderCast(cast)}
            </ul>
          </div>
          <div className="movie-details">
            <h3>Plot Summary</h3>
            <p>{movie.overview}</p>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie, cast: state.movies.cast, background: state.movies.background };
}

export default connect(mapStateToProps, { fetchMovie, fetchCast, fetchBackground })(MovieShow);
