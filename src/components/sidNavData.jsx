import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faUser} from "@fortawesome/free-solid-svg-icons";


export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <FontAwesomeIcon icon={faHome} />,
        cName:'nav-text'
    },
    {
        title: 'Employee Management',
        path:'/employee',
        icon: <FontAwesomeIcon icon={faUser} />,
        cName:'nav-text'

    },


]

