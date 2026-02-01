import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
    let navigate=useNavigate()
    let navi=useNavigate()
    const btnClicked=()=>{
        navigate('/')
    }
    const btn=()=>{
     navi(-1)
    }
  return (
    <div>
        <button onClick={btnClicked} className=' font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to home Page</button>
         <button onClick={btn} className=' font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
      <h1>About Page</h1>
      <h1>About Page</h1>
    </div>
  )
}

export default About
