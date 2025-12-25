import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img   src={props.img}
         alt="Christmas tree"/>
        <h1>
         {props.user},{props.age}
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum ipsa eligendi odit nesciunt magnam minus! Autem nihil natus suscipit aperiam! Nulla debitis sunt, culpa porro illum a omnis unde.</p>
        <button> View Profile</button>


      </div>
      
    </div>
  )
}

export default Card
