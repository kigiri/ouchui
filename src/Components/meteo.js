import React, { Component } from 'react'



class Meteo extends Component {

  state = {
    meteoIcon: "",
    meteoTemp:"24",
    meteoDesc: "description"
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&APPID=339ca6935cce3023e268810a00f76910`)
      .then(req => req.json())
      .then(res => {
        this.setState({
          meteoTemp: res.main.temp
        })
        this.setState({
          meteoDesc: res.weather[0].description
        })
        this.setState({
          meteoIcon: res.weather[0].icon
        })
    })
  }

  render() {
    return (
      <div>
        <img className='' src={`http://openweathermap.org/img/w/${this.state.meteoIcon}.png`} />
        <h3 className=''>{this.state.meteoDesc} , {this.state.meteoTemp} degres</h3>
      </div>
    )
  }
}

export default Meteo