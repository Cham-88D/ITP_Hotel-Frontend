import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import {SidebarData } from './SidebarData';
import './NavBar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar,setSidebar]= useState(false);

    const showSlider = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#fab84d'}} >
            <div className="navbar">

                <Link to="#" className="menu-bars">
                <FaIcon.FaBars onClick={showSlider}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSlider}>
                   <li className="navbar-toggle">
                       <Link to="#"  className="menu-bars">
                       <AiIcon.AiOutlineClose/>
                       
                       </Link>

                   </li>

                   {SidebarData.map((item, index)=>{
                       return(
                          <li key= {index} className={item.cName}>
                              <Link to={item.path}>
                                  {item.icon}
                                  <span>{item.title}</span>
                              </Link>
                          </li>
                       )
                   })}

                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;