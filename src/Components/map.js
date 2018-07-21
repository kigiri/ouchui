import React, { Component } from 'react'
import { Scene } from 'react-arcgis';



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
      })
    }
  }

  render() {
    return (
      <div className=''>
        <div className="row cadre position">
          <p> Latitude : ({this.state.lat}),  Longitude : ({this.state.lon}) </p>
        </div>
          <Scene
              style={{ width: '100vw', height: '100vh' }}
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