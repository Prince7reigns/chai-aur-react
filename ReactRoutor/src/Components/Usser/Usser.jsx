import React from "react";
import { useParams } from "react-router-dom";

function Usser(){
    const {usserId} = useParams()
    return(
        <div> usserId:{usserId}</div>
    )
}

export default Usser