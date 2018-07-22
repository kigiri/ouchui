import React from 'react'

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
        <p > {this.state.time} </p>
      </div>
    )
}
}

export default Horloge