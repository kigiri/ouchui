import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const myInit = { method: 'GET',
           mode: 'cors',
           cache: 'default' }

class Fiche extends Component {

  state = {
    load:false,
    ville:'',
    codePostal:'',
    population:'',
    meteoTemp:'',
    meteoDes:'',
    meteoImg:'',
  }

  componentWillReceiveProps(props) {
    if (props.ext && !this.state.load){
      this.setState({codePostal : this.props.codePostal})
      this.setState({ville : this.props.ville})
      this.setState({meteoTemp : props.ext.main.temp})
      this.setState({meteoDes : props.ext.weather[0].description})
      this.setState({meteoImg : props.ext.weather[0].icon})
      this.setState({temp : props.ext.main.temp})
      setTimeout(() => this.setState({load:true}) , 500)
    }
    if (props.codePostal && !this.state.load && props.ville) {
      console.log(props,'putain t ki')
      console.log('dedans je suis')
      fetch(`https://geo.api.gouv.fr/communes?codePostal=${props.codePostal}`, myInit)
      .then(req => req.json())
      .then(res => this.setState({population : res.filter(e => e.nom === props.ville)[0].population}))
    }
  }

    render() {
    if (this.state.load){
      return (
        <div>
          <h6 className='row' >Environement</h6>
          <div className='box' >
            <p className=''> {this.state.meteoDes} {this.state.temp} °C </p>
            <img className='' src={`http://openweathermap.org/img/w/${this.state.meteoImg}.png`} />
          </div>
          <p>{this.state.ville}</p>
          <p>{this.state.population} personnes</p>
        </div>
      )
    }else {
        return (
          <div>
            <h6 className='row max' >Environement</h6>
            <div className='app box' >
              <CircularProgress mode="indeterminate" color="#ffcc00"  size={20} />
            </div>
            <p>Ville : Load...
              <CircularProgress mode="indeterminate" color="#ffcc00"  size={10} />
            </p>
            <p>Population : Load...
              <CircularProgress mode="indeterminate" color="#ffcc00"  size={10} />
            </p>
          </div>
       )
    }
  }
}

export default Fiche