import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


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
      <div>
        <p>LATITUDE : {this.state.lat}</p>
        <p>LONGITUDE : {this.state.lon}</p>
        <p>LA CARTE : </p>
        <div width="200px">
          <Map center={[this.state.lat,this.state.lon]} zoom={25}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
            <Marker position={[this.state.lat,this.state.lon]}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
        </div>
      </div>
    )
  }

}

export default MapYou