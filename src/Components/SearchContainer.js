import React, { Component } from 'react';
import { characters } from '../data/character';
import Selector from './Selector';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      characters,
      selected: ''
    }
  }

  onSelect = (name) => {
    const { characters } = this.state
    const selected = characters.filter(element => element.name === name)
    console.log(selected, name);
    
    // this.setState({selected: selected[0].url})
  }

  render() {
    console.log(this.state.selected)
    return (
      <div className='container'>
        <Selector characters={characters} onSelect={this.onSelect} />
      </div>
    )
  }
}

export default SearchContainer;