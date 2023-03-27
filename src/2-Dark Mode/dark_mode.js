import React, { useEffect } from "react";
import { useState } from "react";

import data from "./data";
import Articolo from "./Articolo";
import './dark_mode.css';

const getFromlocalStorage = () =>{
    if(localStorage.getItem("theme")){
        return localStorage.getItem("theme")
    }
}
function DarkMode(){
    const [theme, setTheme] = useState(getFromlocalStorage() || 'light-mode');

    const cambiaTema = () =>{
        if(theme === 'light-mode'){
            setTheme('dark-mode');
        }else{
            setTheme('light-mode');
        }
        console.log(theme);
    }

    useEffect( () => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    },[theme])
    
    return(
        <section className="section-center">
            <div className="container"> 
                <button className="btn" onClick={cambiaTema}> Cambia</button>
                <section>
                    {
                        data.map(el => <Articolo key={el.id} {...el}/>)
                    }
                </section>
            </div>
        </section>
    );
}

export default DarkMode;