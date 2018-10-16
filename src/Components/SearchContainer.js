import React, { Component } from 'react';

import { characters } from '../data/character';
import Selector from './Selector';
import MovieList from './MoviesList';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      characters,
      url: ''
    }
  }

  onSelect = (name) => {
    const { characters } = this.state
    const selected = characters.filter(element => element.name === name)
    if(selected.length) this.setState({url: selected[0].url})
  }

  render() {
    return (
      <div className='container'>
        <Selector characters={characters} onSelect={this.onSelect} />
        <MovieList url={this.state.url} />
      </div>
    )
  }
}

export default SearchContainer;