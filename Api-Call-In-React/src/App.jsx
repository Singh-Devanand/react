import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  // fetch use to call a aur data from api
  {/*const getData= async ()=>{
    const data= await fetch('https://jsonplaceholder.typicode.com/users');
    const response= await data.json()
    console.log(response)
  }
    */}
    

    // step 2=> calling api from axois

    const [data, setData] = useState([])
    const getData= async()=>{
     const response= await axios.get('https://jsonplaceholder.typicode.com/users')
     setData(response.data);
    }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem ,idx){
          return <h2>{idx}</h2>
        })}
      </div>
    </div>
  )
}

export default App
