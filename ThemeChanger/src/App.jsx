import { useState,useEffect } from 'react'
import './App.css'
import { ContextProvider } from './Context/ThemeContext'
import Card from './Components/Card'
import DarkBtn from './Components/DarkBtn'

function App() {
  const [ThemeMode,useThemeMode]=useState("light")

  useEffect(() => {

    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(ThemeMode)
   
   
  }, [ThemeMode])
  
 

  const DarkTheme = () =>{
    useThemeMode("dark")
  }

  const LightTheme= () =>{
    useThemeMode("light")
  }

  return (
    <ContextProvider value={ {ThemeMode,DarkTheme,LightTheme} }>
      <DarkBtn/>
      <Card/>

    </ContextProvider>
  )
}

export default App
