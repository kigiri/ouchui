import React, { Component } from 'react'

class Ipublic extends Component {

  state = {
    ip:"127.0.0.42",
  }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
      .then(req => req.json())
      .then(res => {
        this.setState({ip:res.ip})
      })
  }

  render() {
    return (
      <div>
        <p>Public : {this.state.ip}</p>
      </div>
      )
  }
}

export default Ipublic