import React, { Component } from 'react'

import Horloge from './Components/horloge.js'
import Information from './Components/information.js'
import Map from './Components/map.js'

import './style/radar.css'
import './style/app.css'


const myInit = { method: 'GET',
           mode: 'cors',
           cache: 'default' }

class App extends Component {

  state = {
    ip:"127.0.0.1",
    ville:"Load...",
    codePostal:undefined,
    ext:undefined,
    time:Date.now()
  }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
      .then(req => req.json())
      .then(res => {
        this.setState({ip:res.ip})
        return res.ip
      })
      .then(ip => fetch(`http://api.ipstack.com/${ip}?access_key=b908dcc9061f0b9644498ae6329f7c3a`))
      .then(req => req.json())
      .then(res => {
        this.setState({ville:res.city, codePostal:res.zip})
        return Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res.city}&units=metric&APPID=339ca6935cce3023e268810a00f76910`))
           .then(req => req.json()),
          fetch(`https://geo.api.gouv.fr/communes?codePostal=${res.zip}`, myInit)
            .then(req => req.json()),
        ])
      })
      .then(([ weatherData, cityData ]) =>
        this.setState({
          ext: weatherData,
          population : cityData.filter(e => e.nom === this.state.ville)[0].population,
       }))
    })
  }

  render() {
    return (
      <div className="center" >
        <div className="app row fiche cadre" >
          <Horloge />
          <Information props={this.state} />
        </div>
        <div className="mapDisplay" >
          <div className="pulse"></div>
          <Map />
          </div>
      </div>
    )
  }
}

export default App
