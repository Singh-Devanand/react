import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [task,setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
   const deleteNode=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1);
    setTask(copyTask);
   }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-4 md:p-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Form Section */}
        <form
          onSubmit={submitHandler}
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 md:p-10 flex flex-col gap-6 shadow-xl"
        >
          <h1 className="text-3xl font-bold text-center lg:text-left">
            ✍️ Add Your Note
          </h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-3 w-full rounded-lg bg-black border border-zinc-700 outline-none focus:border-white transition"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea
            placeholder="Write Details"
            className="px-5 py-3 w-full h-40 rounded-lg bg-black border border-zinc-700 outline-none resize-none focus:border-white transition"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button className="bg-white text-black w-full py-3 font-semibold rounded-lg hover:bg-gray-200 transition">
            Add Note
          </button>

          {/* Your Image (Kept & Styled) */}
          <img
            className="h-44 md:h-52 mx-auto mt-4 rounded-xl object-contain"
            src="https://imgs.search.brave.com/_gQfCfdWyNfPz7O-W9w0pIeDOk_ns9YlP_TnVu82-OU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/NDY0LzcyOC9zbWFs/bC9jdXJseS1oYWly/LXNjaG9vbGJveS13/cml0aW5nLW9uLWEt/bm90ZWJvb2stZnJl/ZS1wbmcucG5n"
            alt="writing illustration"
          />
        </form>

        {/* Notes Section */}
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
            📒 Recent Notes
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {task.map(function(elem,idx){
            return  <div key={idx} className="flex justify-between flex-col items-start  relative h-52  py-9 px-4 bg-cover rounded-xl bg-[url('https://imgs.search.brave.com/Fvmm9vfKeUQMg8vSkcUWuG4mG0S24XnUU-1PaoBoilw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/LzEyLzEwL21lbW8t/bm90ZXBhZC1waW5u/ZWQtbGluZWQtbm90/ZS1wYXBlci12Snhr/Mkc3dl90LmpwZw')] text-black pt-9 pb-4  font-medium shadow">
              <div>
              <h3 className='leading=tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-sm font-medium text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNode(idx)
              }
              } className='w-full cursor-pointer active:scale-95 bg-red-900 text-white py-1 text-xs rounded font-bold'>Delete Note</button>
            </div>
          })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
