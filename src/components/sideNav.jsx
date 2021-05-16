import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import {SidebarData } from './sidNavData';
import '../styles/SideNav.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {MDBBtn, MDBLink} from "mdbreact";
import AuthService from "../adapters/AuthService";

function Navbar() {
    const [sidebar,setSidebar]= useState(false);
    const onLogout = ()=>{
        AuthService.logout();

    }
    let user = AuthService.getCurrentUser();
    const history = useHistory();
    if(user == null)
    {
        history.push("/login");
    }

    const showSlider = () => setSidebar(!sidebar);
    return (
        <>
                <div className="navbar">

                    <div  className="menu-bars">
                        <FontAwesomeIcon icon={faBars} onClick={showSlider}/>
                    </div>
                    <MDBBtn style={{marginLeft:"1320px",padding:"1px"}} outline color="deep-orange" onClick={onLogout}>Log Out</MDBBtn>
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSlider}>
                        <li className="navbar-toggle">

                            <div className="menu-bars">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </div>

                        </li>
                        {SidebarData.map((item, index)=>{
                            return(
                                <div key= {index} className={item.cName}>
                                    <MDBLink to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </MDBLink>
                                </div>
                            )
                        })}

                    </ul>
                </div>

        </>
    )
}

export default Navbar
