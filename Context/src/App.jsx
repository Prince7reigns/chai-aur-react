import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Display from './Components/Display'


function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>please log in here</h1>
    <Login/>
    <Display/>
   </UserContextProvider>
  )
}

export default App
