import React, { Component } from 'react'
import { Scene } from 'react-arcgis';



class MapYou extends Component {

  state = {
    lat:"",
    lon:""
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
        <p>Latitude : {this.state.lat} | Longitude : {this.state.lon}</p>
        <Scene
            style={{ width: '50vw', height: '50vh' }}
            mapProperties={{ basemap: 'streets' }}
            viewProperties={{
                center: [this.state.lon, this.state.lat],
                scale:10000
            }}
        />
      </div>
    )
  }
}

export default MapYou