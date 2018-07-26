import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Who from './who.js'
import Fiche from './fiche.js'

// codePostal, ville, ip, ext
const Information = ({props}) => {
  const content = props.ext
    ? <Fiche
        codePostal={props.codePostal}
        ville={props.ville}
        meteoTemp={props.ext.main.temp}
        meteoDes={props.ext.weather[0].description}
        meteoImg={props.ext.weather[0].icon}
        temp={props.ext.main.temp}
        population={props.population}
      />
    : <div>
        <h6 className='row max' >Environement</h6>
         <CircularProgress mode="indeterminate" color="#ffcc00"  size={10} />
      </div>
  return (
    <div className='box'>
      <div className='boxRight' >
        {content}
      </div>
      <div className='boxLeft'>
       <Who  ip={props.ip} />
      </div>
    </div>
  )
}

export default Information
