import React, { Component } from 'react'

const getUserIP = (onNewIP) => {

  //compatibility for firefox and chrome
  let myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection

  let pc = new myPeerConnection({
      iceServers: []
    }),
    noop = function () {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key

  const iterateIP = (ip) => {
    if (!localIPs[ip]) onNewIP(ip)
    localIPs[ip] = true
  }

  //create a bogus data channel
  pc.createDataChannel("")

  // create offer and set local description
  pc.createOffer().then((sdp) => {
    sdp.sdp.split('\n').forEach((line) => {
      if (line.indexOf('candidate') < 0) return
      line.match(ipRegex).forEach(iterateIP)
    })
    pc.setLocalDescription(sdp, noop, noop)
  }).catch((reason) => {
    // An error occurred, so handle the failure to connect
  })

  //listen for candidate events
  pc.onicecandidate = (ice) => {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
  }
}


class Who extends Component {


  state = {
    ipHost: "45.45.45",
  }

  componentWillMount() {
    getUserIP((ip) => {
      this.setState({ipHost:ip})
    })

  }


  render() {
    return (
    <div>
      <h6 className='row' >Informations</h6>
      <p>public : {this.props.ip}</p>
      <p>Local : {this.state.ipHost}</p>
    </div>
    )
  }
}

  export default Who