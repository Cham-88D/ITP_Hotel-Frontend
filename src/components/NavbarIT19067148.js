import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import {SidebarDataIT19067148 } from './SidebarDataIT19067148';
import './NavBarIT19067148.css';
import {IconContext} from 'react-icons';

function NavbarIT19067148() {
    const [sidebar,setSidebar]= useState(false);

    const showSlider = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#825311'}} >
            <div className="navbar">

                <Link to="#" className="menu-bar">
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

                   {SidebarDataIT19067148.map((item, index)=>{
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

export default NavbarIT19067148