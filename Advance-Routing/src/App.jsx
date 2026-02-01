import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/course' element={<Course/> }/>
         <Route path='/course/:id' element={<CourseDetail/>}/>
          <Route path='/contact' element={<Contact/>}>
          <Route path='men' element={<Mens/>}/>
          <Route path='women' element={<Women/>}/>
          </Route>
        
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
