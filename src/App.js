import React, { Component } from 'react'

import Horloge from './Components/horloge.js'

import Information from './Components/information.js'
import Depart from './Components/depart.js'
import Map from './Components/map.js'

import './App.css'



class App extends Component {

  state = {
    ip:"45.45.45",
    info:{test:'oui',mouette:'arggggg'},
    departTGV: "16heur Bagdad",
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Horloge />
        <Information />
        <Depart />
        <Map />
      </div>
    )
  }
}

export default App
