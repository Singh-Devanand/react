import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(0)
  function increaseFirst(){
    setfirst(first+1)
  }
    function decreaseFirst(){
    setfirst(first-1)
    }
     function increaseby5First(){
    setfirst(first+5)
    }
  return (
       <div className="container">
      <div className="card">
        <h1 className="count">{first}</h1>

        <div className="btn-group">
          <button className="btn inc" onClick={increaseFirst}>Increase</button>
          <button className="btn dec" onClick={decreaseFirst}>Decrease</button>
          <button className="btn inc5" onClick={increaseby5First}>Increase by 5</button>
        </div>
      </div>
    </div>
  )
}

export default App
