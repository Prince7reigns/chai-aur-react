import React from "react";
import {useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UserContextProvider";

function ShowUser(){
    const{user} = useContext(UserContext)
   if(!user) return <div>Please log in</div>

   return <div>{user.userName}</div>
}

export default ShowUser
