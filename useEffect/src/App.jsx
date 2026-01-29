import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [A,setA] = useState(0)
  const [B,setB] = useState(0)
  function aChanging(){
    console.log('A ki value change hui')
  }
  function bChanging(){
    console.log('B ki value change hui')
  }

 useEffect(function(){
  aChanging()
 },[A,B])
  return (
    <div>
      <h2> Value of A {A}</h2>
      <h2> Value of B {B}</h2>
      <button onClick={()=>
        {
          setA(A+1)
        }
      }>A changed</button>
      <button onClick={()=>{
        setB(B-1)
      }}>B changed</button>
    </div>
  )
}

export default App
