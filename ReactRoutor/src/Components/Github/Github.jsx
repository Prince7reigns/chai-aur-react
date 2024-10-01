import React from "react";
import { useLoaderData } from "react-router-dom";


function GitHub(){

    const data= useLoaderData()

    // useEffect( () => {
    //     fetch("https://api.github.com/users/Prince7reigns")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

    return( 
         <div className="bg-slate-400 text-center text-3xl">
            GitHub followers:{data.followers}
            <img src={data.avatar_url} alt="git img" width={300} />
         </div>
         
    )
}

export default GitHub

export const LoaderFun= async() =>{
   const res= await fetch("https://api.github.com/users/Prince7reigns")
   return res.json()

}