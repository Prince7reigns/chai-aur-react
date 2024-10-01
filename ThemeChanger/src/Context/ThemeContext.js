
import React, { createContext,useContext } from 'react';

export const ThemeContext= createContext({
    ThemeMode:"light",
    DarkTheme: ()=>{},
    LightTheme:()=>{}
})

export const ContextProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
