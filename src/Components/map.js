import React, { Component } from 'react'
import { Scene } from 'react-arcgis';
// import * as React from 'react';



let maPosition
class MapYou extends Component {

  state = {
    lat:"42",
    lon:"42"
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({lat:position.coords.latitude})
      this.setState({lon:position.coords.longitude})
      maPosition = [this.state.lat,this.state.lon]
      {console.log(maPosition,'popopi')}
    })
  }
  }

  render() {
    return (
      <div>
        <Scene
            style={{ width: '100vw', height: '100vh' }}
            mapProperties={{ basemap: 'satellite' }}
            viewProperties={{
                center: [-122.4443, 47.2529],
                zoom: 6
            }}
        />
      </div>
    )
  }

}

export default MapYou