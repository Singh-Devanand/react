import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-8'>
     <Link className='text-lg font-bold' to='/'>Home</Link>
     <Link className='text-lg font-bold' to='/about'>About us</Link>
     <Link className='text-lg font-bold' to='/contact'>Contact</Link>
         <Link className='text-lg font-bold' to='/course'>Course</Link>
      </div>
    </div>
  )
}

export default Navbar
