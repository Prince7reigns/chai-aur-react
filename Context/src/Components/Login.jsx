
import React, { useState, useContext } from "react";

import UserContext from "../Context/UserContext";

function Login(){
   
    const [userName, setUserName] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const Submit = (e) =>{
        e.preventDefault()
        setUser({userName,password})
    }
    return(
       <div>
        <h1>log in page</h1>
        <input type="text" placeholder="username" 
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        />

        <input type="text" placeholder="password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <button onClick={Submit}>submit</button>
       </div>
    )
}

export default Login;