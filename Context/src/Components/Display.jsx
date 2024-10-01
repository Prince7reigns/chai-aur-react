import React from "react";
import {useContext } from "react";
import UserContext from "../Context/UserContext";

function Display(){
    const{user} = useContext(UserContext)
   if(!user) return <div>Please log in</div>

   return <div>{user.userName}</div>
}

export default Display