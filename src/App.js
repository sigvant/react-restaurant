import React, {Component} from 'react';
import {Card} from './components/card.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [

      ]
    }
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    this.setState({
      restaurants:[
        {
          id: '1',
          name: "Sushi S",
          details: "2301 Moscrop Street, Burnaby, BC v61 23Y",
          image: 'null',
          starsSelected: 0,
        },
        {
          id: '2',
          name: "Agra Tandoori",
          details: "1255 Canada Way, Burnaby, BC V61 23Y",
          image: 'null',
          starsSelected: 0,
        },
        {
          id: '3',
          name: "Bandidas Taqueria",
          details: "2544 Sanders Avenue, Richmond, BC V6Y 0B5",
          image: 'null',
          starsSelected: 0,
        },
      ]
    })
  }

  onChange(id, starsSelected) {
    this.setState(
      [...this.state.restaurants].map((restaurant) => {
        if(restaurant.id === id) {
          restaurant.starsSelected = starsSelected
        }
        return null
      })
    )
  }

  render() {
    return (
      <div className='main-body'>
        {[...this.state.restaurants].map((restaurant, index) => {
          let name = restaurant.name
          let image = restaurant.image
          let details = restaurant.details
          let starsSelected = restaurant.starsSelected
          let id = restaurant.id
          return (
            <Card
              key={index}
              name={name}
              details={details}
              image={image}
              starsSelected={starsSelected}
              id={id}
              change={(id, starsSelected) => this.onChange(id, starsSelected)}
              />
          )
        })}
      </div>
    )
  }
}

  


export default App;
