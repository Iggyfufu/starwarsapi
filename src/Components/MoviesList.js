import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      movies: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.url !== prevState.url) {
      return { url: nextProps.url }
    } else {
      return null
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      if(prevState.url !== this.state.url) {
        const moviesLinks = await axios.get(this.props.url).then(response => response.data.films)
        const dataObjs = await Promise.all(moviesLinks.map(link => axios.get(link)))
        const movies = dataObjs.map(data => data.data)
        this.setState({movies: movies})
      }
    } catch(error) {
      throw new Error(error)
    }
  }


  render() {    
    const { movies } = this.state
    return (
      <div>
        {
          movies.map(movie => {
            return <div key={movie.title}>{ movie.title}</div>
          })
        }
      </div>
    )
  }
}

export default MovieList;