import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Data,setdata] = useState([])
  const [index,setIndex] = useState(1)

  const getData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setdata(response.data)
     }

    useEffect(function(){
     getData()
    },[index])



   let printUserData=<h3 className='text-gray-300 text-xs  font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>
   if(Data.length>0){
    printUserData=Data.map(function(elem, idx){
      return <div key={idx}>
        
      <a href={elem.url } target='_blank'>
          <div className='h-40 w-44 overflow-hidden  rounded-xl'>
        <img  className='h-full w-full object-cover' src={elem.download_url} alt=''/>
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
      </div>
      
    })
   }
  return (
    <div className='bg-black overflow-auto  h-screen text-white'>
      
      <div className='flex flex-wrap h-[82%] gap-4'>
        {printUserData}
      </div>
      <div className='  flex justify-center items-center gap-6 p-4 '>
        <button 
        style={{opacity: index==1 ? 0.5 :1}} onClick={()=>{
          if(index>1){
      setIndex(index-1)
      setdata([])
    }
        }
        } className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h3>page {index}</h3>
        <button onClick={()=>{
       setIndex(index+1)
       setdata([])
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
