import React from "react";
import { useState,useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UserContextProvider";

const Input = () => {
    const [userName,setUserName] =useState("")
    const [password,setPassword]= useState("")

    const{setUser} =useContext(UserContext)

    const conSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

    return(
       <div>
         <input type="text" placeholder="User name"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        /> 
        <input type="text"  placeholder="Password"
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
        />

        <button onClick={conSubmit}>submit</button>
       </div>

       
    )
}

export default Input