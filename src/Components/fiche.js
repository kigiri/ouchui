import React, { Component } from 'react'

const Fiche = props => (
        <div>
          <h6 className='row' >Environement</h6>
          <p >{props.ville}</p>
          <div className='box tassage' >
            <img className='' src={`http://openweathermap.org/img/w/${props.meteoImg}.png`} />
            <p className=''> {props.meteoDes} {props.temp} °C </p>
          </div>
          <p  >{props.population} habitants</p>
        </div>
      )
    }
  }
}

export default Fiche
