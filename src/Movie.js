/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
            <h1>hello this is moive</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://i.ytimg.com/vi/HoqmtbtL3uo/maxresdefault.jpg"/>
        )
    }
}

export default Movie