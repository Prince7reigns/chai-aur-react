import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footar/Footar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
         <>
         <Header />
         <Outlet />
         <Footer />
         </>
          
    )
}

export default Layout
