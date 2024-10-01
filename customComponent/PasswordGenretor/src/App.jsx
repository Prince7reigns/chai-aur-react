import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [possword, setsetpassword] = useState("")
  const [Length,setLength]=useState(8)
  const [number,setNumberAllowed]=useState(false)
  const [specil,setSpecilAllowed]=useState(false)
  const ref=useRef(null)

  const MainPassword = useCallback( () =>{
    let Password=""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) {str+="0123456789"}
    if(specil) {str+="!@#$%^&*()_+"}

    for(let i=0;i<Length;i++){
       let index = Math.floor(Math.random()*str.length+1)
       Password+=str.charAt(index)
    }
    setsetpassword(Password)
  } , [setsetpassword,Length,number,specil])
  useEffect(()=> {
    MainPassword()
  },[setsetpassword,Length,number,specil])

  const copyclip = useCallback( () => {
    ref.current?.select()
    window.navigator.clipboard.writeText(possword)
  } ,[possword])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1>Password Genrete</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={possword}
            readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyclip}
        >copy</button>  
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
         className='cursor-pointer'
         min={6}
         max={20}
         value={Length}
         ref={ref}
         onChange={(e) =>setLength( e.target.value)}
          />
          <label>Length:{Length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          value={number}
          onClick={() => setNumberAllowed((prev) =>!prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              value={specil}
              onClick={() => setSpecilAllowed((prev) =>!prev)}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
   </div>
  
  )
}

export default App
