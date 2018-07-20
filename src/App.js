import React, { Component } from 'react'

import Horloge from './Components/horloge.js'

import Information from './Components/information.js'
import Meteo from './Components/meteo.js'
import Depart from './Components/depart.js'
import Map from './Components/map.js'

import './App.css'



class App extends Component {

  state = {
    ip:"45.45.45",
    info:{test:'oui',mouette:'arggggg'},
    departTGV: "16heur Bagdad",
  }

  ComponentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Horloge />
        <Information />
        <Meteo />
        <Depart />
        <Map />
      </div>
    )
  }
}

export default App
