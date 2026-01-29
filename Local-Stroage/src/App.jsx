import React from 'react'

const App = () => {

  // local stroage method
  // 1)how to insert a item into stroage
  localStorage.setItem('user','devanand');
  // 2) how to get from local stroage
  localStorage.getItem('user');
  // 3)how to remove item from local stroage
localStorage.removeItem('user');
// 4)how to clear to local stroage
localStorage.clear();
// how to store an object into local stroage
const student={
  name:'devanand',
  age:18,
  cousre:'it'
}
localStorage.setItem('student', JSON.stringify(student));
const st=JSON.parse(localStorage.getItem('student'));

  return (
    <div>
      
    </div>
  )
}

export default App
