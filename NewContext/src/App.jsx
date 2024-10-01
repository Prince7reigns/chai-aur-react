import { useState } from 'react'

import './App.css'

import React from "react";

import UserContextProvider from "./Context/UserContextProvider";
import ShowUser from './Components/ShowUser';
import Input from './Components/Input';

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <Input/>
    <ShowUser/>
    </UserContextProvider>
  )
}

export default App
