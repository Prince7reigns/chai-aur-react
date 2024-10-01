import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import { data } from 'autoprefixer'

function App() {
   const itemData1 ={
     title: 't-shait',
     description: 'Card Description',
     price:300
   }

   const itemData2 ={
    title: 'paint',
    description: 'Card Description2',
    price:700
  }

  const itemData3 ={
    title: 'paint',
    description: 'Card Description3',
    price:800
  }
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='text-orange-400 '>react and taiwind</h1>
   <Card itemName={itemData1}/>
   <Card itemName={itemData2}/>
   <Card itemName={itemData3}/>
   </>
  )
}

export default App
