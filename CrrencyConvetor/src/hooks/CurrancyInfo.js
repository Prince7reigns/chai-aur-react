import { useState,useEffect } from "react";

function useCurrancyInfo(currancy){
    const [currancyInfo,setCurrancyInfo] = useState({});
     useEffect( () => {
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currancy}.json`)
       .then((res) => res.json())
       .then((data) => setCurrancyInfo(data[currancy]))

     },[currancy])
     return currancyInfo;
}

export default useCurrancyInfo;