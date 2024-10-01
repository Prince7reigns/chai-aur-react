import { useState } from 'react'
import './App.css'



function App() {
  const [color, setcolor] = useState("olive")
  
  return (
   <>
   <div 

    className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-3xl'>
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("red")}
              style={{backgroundColor:"red"}}
              >red</button>

              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("blue")}
              style={{backgroundColor:"blue"}}
              >blue</button>  

              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("black")}
              style={{backgroundColor:"black"}}
              >black</button>

              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("pink")}
              style={{backgroundColor:"pink"}}
              >pink</button>

              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
               onClick={()=>setcolor("gray")}
              style={{backgroundColor:"gray"}}
              >gray</button>

              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("green")}
                            style={{backgroundColor:"green"}}
                            >green</button>
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("yellow")}
                            style={{backgroundColor:"yellow"}}
                            >yellow</button>
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("purple")}
                            style={{backgroundColor:"purple"}}
                            >purple</button>
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
                            onClick={()=>setcolor("orange")}

                            style={{backgroundColor:"orange"}}
                            >orange</button>
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("brown")}
                            style={{backgroundColor:"brown"}}
                            >brown</button>
              
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("cyan")}
                            style={{backgroundColor:"cyan"}}
                            >cyan</button>
              
              
              <button className='outline-none px-4 py-4 rounded-full text-white shadow-lg'
              onClick={()=>setcolor("teal")}
                            style={{backgroundColor:"teal"}}
                             >teal</button>


           </div>
        </div>
    </div>
   </>
  )
}

export default App
