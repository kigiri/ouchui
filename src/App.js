import React, { Component } from 'react'

import Horloge from './Components/horloge.js'

import Information from './Components/information.js'
import Map from './Components/map.js'

import './App.css'



class App extends Component {

  state = {
    ip:"127.0.0.1",
    ville:"metroPolice",
    ext:undefined,
    time:Date.now()
  }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
      .then(req => req.json())
      .then(res => {
        this.setState({ip:res.ip})
      })
      .then( res => {
        fetch(`http://api.ipstack.com/88.186.169.153?access_key=b908dcc9061f0b9644498ae6329f7c3a`)
        .then(req => req.json())
        .then(res => {
          this.setState({ville:res.city})
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res.city}&units=metric&APPID=339ca6935cce3023e268810a00f76910`)
          .then(req => req.json())
          .then(res => {
            this.setState({ext:res})
          })
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Horloge />
        <Information ip={this.state.ip} ville={this.state.ville} ext={this.state.ext} />
        <Map />
      </div>
    )
  }
}

export default App
