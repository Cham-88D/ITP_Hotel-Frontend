import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
// import * as IoIcon from "react-icons/io5";
import * as GoIcon from "react-icons/go";

export const SidebarData_IT19964010 = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcon.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: ' Room Management',
        path:'/rooms',
        icon: <FaIcon.FaHotel/>,
       
        cName:'nav-text'

    },
    {
        title: 'Reservation Managment',
        path:'/reservations',
        icon: <FaIcon.FaAddressBook/>,
        cName:'nav-text'
    },
    {
        title: 'Reservation Modification Request Managment',
        path:'/res_modification_requests',
        icon: <FaIcon.FaEdit/>,
        cName:'nav-text'
    },
    {
        title: 'Payment',
        path:'/payments',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title: 'Sign Out',
        path:'/',
        icon: <GoIcon.GoSignOut/>,
        cName:'nav-text'
    }

]