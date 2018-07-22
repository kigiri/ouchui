import React from 'react'

import Who from './who.js'
import Fiche from './fiche.js'

// codePostal, ville, ip, ext
const Information = ({props}) => {
  return (
    <div className='box'>
      <div className='boxRight' >
        <Fiche ville={props.ville} ext={props.ext} codePostal={props.codePostal} />
      </div>
      <div className='boxLeft'>
       <Who  ip={props.ip} />
      </div>
    </div>
  )
}

export default Information