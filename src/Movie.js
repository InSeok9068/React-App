/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    //타입검사와 필수값 체크
    static propTypes = {
        title  : PropTypes.string.isRequired,
        poster : PropTypes.string
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster : PropTypes.string.isRequired
    } 

    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie