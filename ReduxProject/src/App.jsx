import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import {store} from './app/store'

function App() {
  return (
   <>
   <AddTodo/>
   <Todos/>
   </>
  )
}

export default App
