import React, { Component } from 'react'

class Map extends Component {

  state = {
    lat:"42",
    lon:"42"
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({lat:position.coords.latitude})
      this.setState({lon:position.coords.longitude})
      })
    }
  }

  render() {
    return (
      <div>
        <p>LATITUDE : {this.state.lat}</p>
        <p>LONGITUDE : {this.state.lon}</p>
        <p>LACARTE</p>
      </div>
    )
  }

}

export default Map