import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, fetchCast } from '../actions/index';
import { Link } from 'react-router';


export default class MovieShow extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  componentWillMount() {
    this.props.fetchMovie(this.props.params.id);
    this.props.fetchCast(this.props.params.id);
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



  render() {
    const { movie } = this.props;
    const { cast } = this.props;
    if (!movie || !cast) {
      return <div>Loading..</div>;
    }
    document.body.style.backgroundImage = "url(https://image.tmdb.org/t/p/w396"+ movie.poster_path +")";

    return (
      <div className="movie-container">
        <div className="alert alert-danger">
        <h1>{movie.original_title}</h1>
        </div>
          <div className="list-width">
            <ul className="list-group">
              <li className="list-group-item">
                <h5>Top Billed Cast</h5>
              </li>
            {this.renderCast(cast)}
            </ul>
          </div>
          <div className="panel panel-default pull-xs-right">
            <div className="panel-heading">Plot Summary</div>
            <div className="panel-body">{movie.overview}</div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie, cast: state.movies.cast };
}

export default connect(mapStateToProps, { fetchMovie, fetchCast })(MovieShow);
