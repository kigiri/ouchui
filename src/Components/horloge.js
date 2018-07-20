import React from 'react'

const Horloge = () => {

  const time = Date.now()
  const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
  const month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  return (
    <div>
      <p>
        {time}
      </p>
    </div>
  )
}

export default Horloge