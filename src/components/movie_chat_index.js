import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchCast, fetchByActor } from '../actions/index';
import { Link } from 'react-router';

class MovieChatIndex extends Component {
  constructor(props) {
    super (props)

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    // console.log("Hello, it's me");
    this.props.fetchMovies();
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchByActor(this.state.term);
    this.setState({ term: '' });
  }

  renderMovies() {
    return this.props.movies.map((movie) => {
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
    document.body.style.background = "#FFF";
    return (
      <div className="body-container">
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="By Actor"
            type="input"
            onChange={this.onInputChange} />
        </form>
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

export default connect(mapStateToProps, { fetchMovies, fetchByActor })(MovieChatIndex);
