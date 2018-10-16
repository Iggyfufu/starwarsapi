import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      movies: [],
      loading: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.url !== prevState.url) {
      return { url: nextProps.url, loading: true }
    } else {
      return null
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      if(prevState.url !== this.state.url) {
        const { url } = this.props
        const moviesLinks = await axios.get(url).then(response => response.data.films)
        const dataObjs = await Promise.all(moviesLinks.map(link => axios.get(link)))
        const movies = dataObjs.map(data => data.data)
        this.setState({movies: movies, loading: false})
      }
    } catch(error) {
      this.setState({error: true})
    }
  }


  render() {    
    const { movies } = this.state    
    if(this.state.error) throw new Error('Something went wrong.')
    if(this.state.loading) {
      return 'String'
    }
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