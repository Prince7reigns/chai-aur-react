import React from 'react';
import useTheme from '../Context/ThemeContext';

function DarkBtn(){

    const {ThemeMode,DarkTheme,LightTheme} = useTheme()

    const Control = (e) =>{
       const mode = e.currentTarget.checked

       if(mode){
        DarkTheme()
       }else{
        LightTheme()
       }
    }

    return(
       <input type="checkbox" value="" onChange={Control} checked={ThemeMode=="dark"}/>
    )
}

export default DarkBtn