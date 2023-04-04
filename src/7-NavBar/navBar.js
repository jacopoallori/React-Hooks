import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg"
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import './navBar.css'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const linkCointainerRef = useRef(null);
    const linkListRef = useRef(null);

    useEffect(()=>{
        const linkListHeight = linkListRef.current.getBoundingClientRect().height;
        if(show){
            linkCointainerRef.current.style.height = `${linkListHeight}px`
        }else{
            linkCointainerRef.current.style.height = `0px`
        }
        console.log(linkListHeight);
    },[show])

  return (
    <nav className="nav">
        <header className="nav-header">
            <div className="nav-brand">
                <img src={logo} alt="logo" className="nav-logo"/>
                <h4>DevBar</h4>
            </div>
            <button className="btn nav-toggler" onClick={() => setShow(!show)}> 
                <FaBars className="nav-icon"/>
            </button>
        </header>
        <div className={`${show ? "links-container show" : 'links-container'}`} ref={linkCointainerRef}>
            <ul className="nav-links" ref={linkListRef}>
                {
                    links.map( el => {
                        return(
                            <li key={el.id}>
                                <a href={el.url} alt={el.text}>
                                    {el.text}
                                </a>
                            </li>)
                    })
                }
            </ul>
        </div>
        <div className="social-links">
            <SocialBar />
        </div>
    </nav>
  );
};

export default Navbar;