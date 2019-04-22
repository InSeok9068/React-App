/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title   : "Matrix",
    poster  : "http://www.whatisthematrix.com/img/matrix.jpg"
  },
  {
    title   : "Full Metal Jacket",
    poster  : "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
  },
  {
    title   : "Oldboy",
    poster  : "http://theasiancinemablog.com/wp-content/uploads/2013/11/oldboy1.jpg"
  },
  {
    title   : "Star Wars",
    poster  : "https://www.thinkgeek.com/images/category/star-wars/rep/star-wars-40th-anniversary.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
