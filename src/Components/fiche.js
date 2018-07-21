import React from 'react'



const Fiche = ({ville, ext}) => {
  if (ext)
    return (
       <div>
         <p>localisation : {ville}</p>
         <img className='' src={`http://openweathermap.org/img/w/${ext.weather[0].icon}.png`} />
         <h3 className=''> {ext.weather[0].description} , {ext.main.temp} degres </h3>
       </div>   
     )
    else
     return (<div>J.doe</div>)
  }

export default Fiche