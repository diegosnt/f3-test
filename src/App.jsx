import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import users from './fakeApi/users.json'


function App() {
  //const [count, setCount] = useState(0)

  console.log(users)

  users.forEach((user, i) => {
    console.log("foreach",i,user)
  })


  return (
    <>
      <div>
        TEST 1
      </div>
    </>
  )
}

export default App
