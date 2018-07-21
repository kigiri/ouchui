import React from 'react'

import Who from './ip.js'
import Fiche from './fiche.js'


const Information = ({ville, ip, ext}) => {

  return (
    <div >
      <Who ip={ip} />
      <Fiche ville={ville} ext={ext} />
    </div>
  )
}

export default Information