import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((aMovie, index) => < MovieCard key={index} title={aMovie.title} IMDBRating={aMovie.IMDBRating} genres={aMovie.genres} poster={aMovie.poster} />)
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
