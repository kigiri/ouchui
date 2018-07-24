import React from 'react'

let sessionTime = 0

setInterval(() => {
  sessionTime++
}, 1000)

class Horloge extends React.Component {
  state = {
        time : new Date().toLocaleString()
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        time : new Date().toLocaleString()
      })
    },1000)
  }

  render() {
    return (
        <div className="heure">
        <p> {this.state.time} </p>
        <p> {sessionTime} </p>
      </div>
    )
}
}

export default Horloge