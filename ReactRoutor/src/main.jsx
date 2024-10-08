import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contanct/Contanct.jsx'
import Usser from './Components/Usser/Usser.jsx'
import GitHub from './Components/Github/Github.jsx'
import { LoaderFun } from './Components/Github/Github.jsx'


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"home",
//         element:<Home/>
//       },

//       { path:"about",
//         element:<About/>
//       },

//       { path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ]) 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about'   element={<About/>}></Route>
      <Route path='contact'   element={<Contact/>}></Route>
      <Route path='usser/:usserId'   element={<Usser/>}></Route>
      <Route
      loader={LoaderFun}
       path='Github'   element={<GitHub/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
