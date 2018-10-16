import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import data from './data/character';
import SearchContainer from './Components/SearchContainer'
import Selector from './Components/Selector'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//Test Character JSON file
it('Test for Character JSON file', () => {
  const chars = [
    {
      "name": "Luke Skywalker",
      "url": "https://swapi.co/api/people/1/"
    },
    {
      "name": "Darth Vader",
      "url": "https://swapi.co/api/people/4/"
    },
    {
      "name": "Obi-wan Kenobi",
      "url": "https://swapi.co/api/people/unknown/"
    },
    {
      "name": "R2-D2",
      "url": "https://swapi.co/api/people/3/"
    }
  ];

  expect(data).toBeDefined();
  expect(data.characters).toEqual(expect.arrayContaining(chars));
})

//Test Search Container
describe('Search Container', () => {
  it('renders', () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.exists()).toBe(true);
  })

  it('has character in state', () => {
    const chars = [
      {
        "name": "Luke Skywalker",
        "url": "https://swapi.co/api/people/1/"
      },
      {
        "name": "Darth Vader",
        "url": "https://swapi.co/api/people/4/"
      },
      {
        "name": "Obi-wan Kenobi",
        "url": "https://swapi.co/api/people/unknown/"
      },
      {
        "name": "R2-D2",
        "url": "https://swapi.co/api/people/3/"
      }
    ];
    const wrapper = shallow(<SearchContainer />);
    expect(wrapper.state().characters).toBeDefined();
    expect(wrapper.state().characters).toEqual(expect.arrayContaining(chars));
  })
})

//Test Selector Component
describe('Selector Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Selector characters={[{ name: 'Luke Skywalker' }]} />);

    expect(wrapper.exists()).toBe(true);
  })

  it('selection is passed in', () => {
    const wrapper = mount(<Selector characters={[{ name: 'Luke Skywalker' }]} />);
    expect(wrapper.find('select').props().children.length).toBe(2)
  })

  it('user selection is echoed', () => {
    const wrapper = mount(<Selector characters={[{name: 'Luke Skywalker'}]} onSelect={() => {}}/>);
    
    wrapper.find('select').simulate('change', {
      target: {
        value: 'Luke Skywalker'
      }
    })
    expect(wrapper.find('select').props().value).toBe('Luke Skywalker')
  })
})