import React from "react";
import { AppProvider } from "./context/context";
import AppCart from "./appCart";

const Indexcart = () =>{
    return(
        <>
            <AppProvider>
                <AppCart />
            </AppProvider>        
        </>
    )
}

export default Indexcart;
