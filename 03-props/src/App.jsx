import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={43} img='https://plus.unsplash.com/premium_photo-1730157453239-870fc8a4a7f9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Devanand ' age={21} img='https://plus.unsplash.com/premium_photo-1766012368380-88b0ff89d664?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fHw%3D'/>
      <Card user='Deva' age={21} img='https://plus.unsplash.com/premium_photo-1730078556475-d5c8bbcf9838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
