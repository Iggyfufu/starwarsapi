import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  handleChange = (evt) => {
    const { onSelect } = this.props
    this.setState({ selected: evt.target.value })
    onSelect(evt.target.name)
  }

  render() {
    const { characters } = this.props
    
    return (
      <select className='dropdown' onChange={this.handleChange} value={this.state.selected}>
        <option value='Select your character'>Select a character</option>
        {
          characters.map(character => {
            return (
              <option key={character.name} value={character.name}>
                {character.name}
              </option>
            )
          })
        }
      </select>
    )
  }
}

export default Selector;