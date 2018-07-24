import React, { Component } from 'react'
import { Scene } from 'react-arcgis';



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
      <div className=''>
        <div className="row grid cadrePosition position">
          <div>Latitude : ({this.state.lat}) </div>
          <div>Longitude : ({this.state.lon}) </div>
        </div>
          <Scene
              style={{ width: '100vw', height: '110vh' }}
              mapProperties={{ basemap: 'streets' }}
              viewProperties={{
                  center: [(this.state.lon), (this.state.lat - 0.002000005005050)],
                  scale:10000
              }}
          />
      </div>
    )
  }
}

export default Map